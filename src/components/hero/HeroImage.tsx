import React, { useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className,
  onLoad
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const prevSrcRef = useRef<string>(src);

  useEffect(() => {
    // If the src has change d, we want to fade out the image
    if (prevSrcRef.current !== src && imageRef.current) {
      imageRef.current.style.opacity = '0';
      const timer = setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = '1';
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    prevSrcRef.current = src;
  }, [src]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = '1';
    }
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div className={cn(
      "relative w-full h-full rounded-2xl overflow-hidden shadow-xl",
      "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent before:z-10",
      className
    )}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="w-full h-full object-cover transition-opacity duration-700 opacity-0"
        style={{ 
          width: '100%', 
          height: '100%',
        }}
      />
    </div>
  );
};