import React, { useState, useEffect } from 'react';
import { EditableText } from './EditableText';
import { AIRegenerateButton } from './AIRegenerateButton';
import { HeroImage } from './HeroImage';
import { CallToAction } from './CallToAction';
import { getRandomContent, DummyContent } from '../../utils/dummyContent';
import { cn } from '../../utils/cn';

export const HeroSection: React.FC = () => {
  const [content, setContent] = useState<DummyContent>(getRandomContent());
  const [customContent, setCustomContent] = useState<Partial<DummyContent>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Initial animation
    setImageLoaded(false);
  }, []);

  const regenerateContent = () => {
    setIsGenerating(true);
    setImageLoaded(false);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const newContent = getRandomContent();
      setContent(newContent);
      setCustomContent({}); // Reset custom edits
      setIsGenerating(false);
    }, 600);
  };

  const handleTextChange = (key: keyof DummyContent, value: string) => {
    setCustomContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const displayContent = {
    headline: customContent.headline ?? content.headline,
    subheadline: customContent.subheadline ?? content.subheadline,
    imageUrl: content.imageUrl,
    imageAlt: content.imageAlt
  };

  return (
    <section className={cn(
      "relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center",
      "bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50",
      "transition-all duration-700"
    )}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-100/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className={cn(
        "container mx-auto px-6 py-12 z-10",
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center",
        "opacity-0 translate-y-6 transition-all duration-1000",
        imageLoaded ? "opacity-100 translate-y-0" : ""
      )}>
        {/* Left column: Text content */}
        <div className="flex flex-col space-y-6 max-w-2xl">
          <div className={cn(
            "transition-all duration-500 delay-100",
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <EditableText
              initialText={displayContent.headline}
              as="h1"
              onTextChange={(text) => handleTextChange('headline', text)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 bg-clip-text"
            />
          </div>
          
          <div className={cn(
            "transition-all duration-500 delay-200",
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <EditableText
              initialText={displayContent.subheadline}
              as="p"
              onTextChange={(text) => handleTextChange('subheadline', text)}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            />
          </div>
          
          <div className={cn(
            "flex flex-wrap gap-4 pt-4",
            "transition-all duration-500 delay-300",
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <CallToAction label="Get Started" />
            <AIRegenerateButton 
              onClick={regenerateContent} 
              isGenerating={isGenerating}
            />
          </div>
        </div>
        
        {/* Right column: Image */}
        <div className={cn(
          "relative h-[400px] md:h-[500px] lg:h-[600px] w-full",
          "transition-all duration-700 delay-200",
          imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <HeroImage 
            src={displayContent.imageUrl}
            alt={displayContent.imageAlt}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};