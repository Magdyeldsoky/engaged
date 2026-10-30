'use client';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  text?: string;
  onClick?: () => void;
}

export default function ScrollIndicator({ text = "اسحب للمزيد", onClick }: ScrollIndicatorProps) {
  return (
    <div 
      onClick={onClick}
      className="w-full flex flex-col items-center justify-center py-4 cursor-pointer opacity-75 hover:opacity-100 transition-opacity mt-4 group"
    >
      <span className="font-cairo text-xs text-[#C5A059] tracking-widest mb-1 font-medium">
        {text}
      </span>
      <div className="flex flex-col items-center">
        <ChevronDown className="w-5 h-5 text-[#C5A059] animate-bounce -mb-2" />
        <ChevronDown className="w-4 h-4 text-[#C5A059]/60 animate-bounce delay-100" />
      </div>
    </div>
  );
}