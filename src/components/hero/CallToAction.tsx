import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
//CTA button
export const CallToAction: React.FC<CallToActionProps> = ({
  label = "Get Started",
  onClick,
  className
}) => {
  return (
    <Button
      size="lg"
      onClick={onClick}
      className={cn(
        "relative overflow-hidden group transition-all duration-300",
        "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
        "shadow-md hover:shadow-lg text-white font-medium tracking-wide",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {label}
        <ArrowRight 
          size={16} 
          className="transition-transform duration-300 group-hover:translate-x-1" 
        />
      </span>
    </Button>
  );
};