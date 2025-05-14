
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="mb-6 text-brand-600 bg-brand-50 p-4 rounded-full w-16 h-16 flex items-center justify-center">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-brand-800">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium mt-auto shadow-sm">Request a Quote</Button>
    </div>
  );
};

export default ServiceCard;
