import React from 'react';
import { cn } from '../../utils/cn';
import { Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface AIRegenerateButtonProps {
  onClick: () => void;
  className?: string;
  isGenerating?: boolean;
}

export const AIRegenerateButton: React.FC<AIRegenerateButtonProps> = ({
  onClick,
  className,
  isGenerating = false
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      disabled={isGenerating}
      className={cn(
        "group relative overflow-hidden border-blue-400 hover:border-blue-500 text-blue-600",
        "transition-all duration-300",
        isGenerating && "opacity-70 cursor-not-allowed",
        className
      )}
    >


      <span className="relative z-10 flex items-center gap-2">
        <Sparkles 
          size={20} 
          className="text-blue-500 group-hover:text-blue-600 transition-transform group-hover:scale-110 duration-300"
        />
        {isGenerating ? "Generating..." : "Regenerate with AI"}
      </span>
      <span 
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
      />
    </Button>
  );
};