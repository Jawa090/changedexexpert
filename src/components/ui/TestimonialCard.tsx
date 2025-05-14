
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  project: string;
  avatar?: string;
  onClick?: () => void;
}

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  project, 
  avatar,
  onClick
}: TestimonialCardProps) => {
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <Card 
      className="testimonial-card h-full animate-fade-in transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden"
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar-wrapper h-16 w-16 rounded-full overflow-hidden bg-brand-50 border-2 border-brand-100 flex-shrink-0">
            {avatar ? (
              <img 
                src={avatar} 
                alt={`${name}'s avatar`} 
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-brand-200 flex items-center justify-center text-brand-700 text-xl font-bold">
                {name.charAt(0)}{name.split(' ')[1]?.charAt(0) || ''}
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-800 text-lg">{name}</div>
            <div className="text-sm text-gray-600">{role}, {company}</div>
          </div>
        </div>

        <div className="flex items-center mb-4">{renderStars()}</div>
        
        <div className="mb-6 text-gray-600 italic flex-grow leading-relaxed">
          <div className="relative px-2 py-1">
            <Quote size={20} className="text-brand-200 absolute -left-1 -top-2 rotate-180" />
            <span className="testimonial-quote pl-5">{content}</span>
            <Quote size={20} className="text-brand-200 absolute -right-1 -bottom-2" />
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100 transition-all duration-300 flex justify-between items-center">
          <div className="text-xs font-medium text-brand-600 bg-brand-50 inline-block px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all">
            Project: {project}
          </div>
          {onClick && (
            <button 
              onClick={onClick}
              className="text-xs font-medium text-white bg-brand-600 px-3 py-1 rounded-full hover:bg-brand-700 transition-all flex items-center gap-1"
            >
              Read more
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
