import React, { useState } from 'react';
import { Star } from 'lucide-react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  project: string;
  avatar?: string;
};

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<null | Testimonial>(null);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Project Manager',
      company: 'ABC Construction',
      content: 'EstimatingHub provided incredibly detailed and accurate estimates for our commercial building project. Their team was responsive and professional throughout the entire process. The level of detail in their takeoffs helped us identify cost-saving opportunities we would have missed otherwise.',
      rating: 5,
      project: 'Commercial Office Building',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Sarah Johnson',
      role: 'General Contractor',
      company: 'Johnson Builders',
      content: "We've been using EstimatingHub for all our residential projects for the past two years. Their estimates are always on point and delivered on time. Having reliable numbers has helped us win more bids and improve our profit margins significantly.",
      rating: 5,
      project: 'Luxury Home Construction',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Owner',
      company: 'Rodriguez Construction',
      content: 'The team at EstimatingHub helped us secure a major contract by providing detailed takeoffs and estimates that gave our client confidence in our bid. Their attention to detail and industry knowledge is impressive.',
      rating: 4,
      project: 'Retail Center Renovation',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Jennifer Williams',
      role: 'Construction Manager',
      company: 'Williams & Associates',
      content: "EstimatingHub's estimates have been consistently accurate within 2-3% of final costs. This level of precision has been invaluable for our project planning and client relationships. I highly recommend their services to any contractor looking to improve their estimating process.",
      rating: 5,
      project: 'Medical Office Buildout',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'David Chen',
      role: 'Developer',
      company: 'Chen Development Group',
      content: 'Working with EstimatingHub has transformed our pre-construction process. Their detailed estimates help us make informed decisions during the planning phase, resulting in smoother project execution and fewer change orders during construction.',
      rating: 5,
      project: 'Multi-Family Development',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Laura Martinez',
      role: 'Project Executive',
      company: 'Martinez Construction Services',
      content: 'EstimatingHub delivered our complex project estimate two days ahead of schedule. The organization and clarity of their estimate package was exceptional. We appreciate their professionalism and attention to detail.',
      rating: 4,
      project: 'Hotel Renovation',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Robert Jackson',
      role: 'Owner',
      company: 'Jackson Homes',
      content: 'As a custom home builder, accurate estimates are crucial to our business. EstimatingHub consistently provides detailed, reliable estimates that help us set proper expectations with clients and maintain our margins.',
      rating: 5,
      project: 'Custom Home Construction',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Patricia Thompson',
      role: 'CFO',
      company: 'Thompson Building Group',
      content: "EstimatingHub's detailed cost breakdowns have improved our financial planning and cash flow management. Their estimates are thorough and well-organized, making it easy to track costs throughout the project lifecycle.",
      rating: 4,
      project: 'Mixed-Use Development',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const renderOverallRating = () => {
    const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 >= 0.5;
    
    return (
      <div className="flex items-center justify-center mb-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star
              key={index}
              size={30}
              className={`${
                index < fullStars
                  ? 'text-yellow-500 fill-yellow-500'
                  : index === fullStars && hasHalfStar
                  ? 'text-yellow-500 fill-yellow-500 opacity-50'
                  : 'text-gray-300'
              } mx-1`}
            />
          ))}
      </div>
    );
  };

  const handleOpenTestimonial = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseTestimonial = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Testimonials Hero */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="mb-6 text-shadow">Our Clients' Success Stories</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Real feedback from real clients. See why contractors and builders trust EstimatingHub for their project estimates.
            </p>
            {renderOverallRating()}
            <p className="text-lg font-semibold">
              <span className="text-2xl text-yellow-500">{(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}</span>
              <span className="text-xl">/5</span> average rating from <span className="text-white font-bold">{testimonials.length}</span> reviews
            </p>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#f9fafb" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1440,58.7L1440,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mx-auto mb-16">Featured Testimonials</h2>
          
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 pr-4">
                    <div className="h-full">
                      <TestimonialCard
                        name={testimonial.name}
                        role={testimonial.role}
                        company={testimonial.company}
                        content={testimonial.content}
                        rating={testimonial.rating}
                        project={testimonial.project}
                        avatar={testimonial.avatar}
                        onClick={() => handleOpenTestimonial(testimonial)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static translate-y-0 mx-2" />
                <CarouselNext className="static translate-y-0 mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path 
              fill="#f9fafb" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1440,58.7L1440,120L0,120Z"
            ></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-50 to-white p-12 rounded-xl shadow-lg border border-gray-100 animate-fade-in hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center mb-8 gap-6">
              <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0 md:mr-6 shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="James Davis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-800">James Davis</h3>
                <p className="text-brand-600 font-medium">CEO, Davis Construction Group</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start mb-6">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className="text-yellow-500 fill-yellow-500 mr-1"
                  />
                ))}
            </div>
            
            <blockquote className="text-xl italic text-gray-700 mb-8 text-center md:text-left relative">
              <Star className="text-brand-200 absolute left-[-10px] top-[-10px] transform -rotate-12" size={20} />
              <span className="text-brand-600 text-3xl font-serif">"</span>
              Partnering with EstimatingHub has been one of the best business decisions we've made. Their estimates are consistently accurate, detailed, and delivered on time. In the past year alone, we've increased our bid success rate by 30% and improved our project margins by 15%. Their team has become an extension of our company, and we couldn't be happier with the results.
              <span className="text-brand-600 text-3xl font-serif">"</span>
              <Star className="text-brand-200 absolute right-[-10px] bottom-[-10px] transform rotate-12" size={20} />
            </blockquote>
            
            <p className="text-gray-600 flex justify-center md:justify-start items-center">
              <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full font-medium hover:bg-brand-200 transition-colors cursor-pointer">Project: Multi-phase Commercial Development</span>
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#2563eb" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1440,58.7L1440,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-600 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience Our Service?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our satisfied clients and discover how our estimating services can help your construction business succeed.
            </p>
            <button className="inline-block bg-white text-brand-800 py-4 px-10 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:translate-y-[-2px] hover:shadow-xl">
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonial Dialog */}
      <Dialog open={selectedTestimonial !== null} onOpenChange={handleCloseTestimonial}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Client Testimonial</DialogTitle>
            <DialogDescription className="text-center">
              Read the complete testimonial from {selectedTestimonial?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedTestimonial && (
            <div className="mt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-brand-50 border-2 border-brand-100">
                  {selectedTestimonial.avatar ? (
                    <img 
                      src={selectedTestimonial.avatar} 
                      alt={`${selectedTestimonial.name}'s avatar`} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-brand-200 flex items-center justify-center text-brand-700 text-xl font-bold">
                      {selectedTestimonial.name.charAt(0)}
                      {selectedTestimonial.name.split(' ')[1]?.charAt(0) || ''}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">{selectedTestimonial.name}</div>
                  <div className="text-sm text-gray-600">{selectedTestimonial.role}, {selectedTestimonial.company}</div>
                  <div className="flex items-center mt-1">
                    {Array(5).fill(0).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={`${
                          index < selectedTestimonial.rating 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-gray-300'
                        } mr-1`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-brand-300 pl-4 py-2 mb-6 bg-brand-50 rounded-r-md">
                <p className="italic text-gray-700">{selectedTestimonial.content}</p>
              </div>
              
              <div className="text-sm text-gray-600 flex justify-between items-center">
                <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
                  Project: {selectedTestimonial.project}
                </span>
                <span className="text-brand-600 font-medium">5-star client</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Testimonials;
