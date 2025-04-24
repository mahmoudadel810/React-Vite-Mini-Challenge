import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface EditableTextProps {
  initialText: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  onTextChange?: (text: string) => void;
}

export const EditableText: React.FC<EditableTextProps> = ({
  initialText,
  className,
  as = 'p',
  onTextChange
}) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isDirty) {
      setText(initialText);
    }
  }, [initialText, isDirty]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      if ('setSelectionRange' in inputRef.current) {
        inputRef.current.setSelectionRange(0, length);
      }
    }
  }, [isEditing]);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (onTextChange) {
      onTextChange(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      if (onTextChange) {
        onTextChange(text);
      }
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setText(initialText);
      setIsDirty(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
    setIsDirty(true);
  };

  const TagName = as;

  if (isEditing) {
    const InputComponent = as === 'p' ? 'textarea' : 'input';
    return (
      <InputComponent
        ref={inputRef as any}
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          "bg-transparent border border-blue-500 rounded px-2 py-1 outline-none w-full",
          "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          as === 'p' && "min-h-[100px] resize-none",
          className
        )}
        style={{ 
          fontSize: 'inherit', 
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          fontFamily: 'inherit',
          color: 'inherit'
        }}
      />
    );
  }
  // red span text to show in the header 
  return ( 
    <TagName 
      onClick={handleTextClick}
      className={cn(
        "cursor-text transition-colors duration-200 hover:bg-gray-100/50 rounded px-1 -mx-1",
        "relative after:content-['✏️'] after:text-xs after:absolute after:opacity-0 after:right-0 after:top-0 hover:after:opacity-50",
        className
      )}
      dangerouslySetInnerHTML={{
        __html: text.replace(
          /,Click me to Change the text/g,
          '<span class="text-red-500">,Click me to Change the text</span>'
        )
      }}
    />
  );
};