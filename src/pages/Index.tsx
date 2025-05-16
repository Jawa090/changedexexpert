
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, HardHat, Building, Ruler, CheckCircle, Star, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';


const Index = () => {
  const services = [
    {
      id: 'mep',
      name: 'MEP Design',
      image: '/public/mep.png',
      description: 'Expert MEP design services for efficient mechanical, electrical, and plumbing systems tailored to your project.',
    },
    {
      id: 'architectural',
      name: 'Architectural Services',
      image: '/public/architectural-service.jpg',
      description: 'Innovative architectural solutions to bring your vision to life with precision and creativity.',
    },
    {
      id: 'solar',
      name: 'Solar PV System Design',
      image: '/public/solar.jpg',
      description: 'Custom solar PV system designs to maximize energy efficiency and sustainability.',
    },
    {
      id: 'civil',
      name: 'Civil Design',
      image: '/public/civil-engineering.jpg',
      description: 'Comprehensive civil design services for infrastructure and site development projects.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Project Manager',
      company: 'ABC Construction',
      content: "EstimatingHub provided incredibly detailed and accurate estimates for our commercial building project. Their team was responsive and professional throughout the entire process.",
      rating: 5,
      project: 'Commercial Office Building'
    },
    {
      name: 'Sarah Johnson',
      role: 'General Contractor',
      company: 'Johnson Builders',
      content: "We've been using EstimatingHub for all our residential projects for the past two years. Their estimates are always on point and delivered on time.",
      rating: 5,
      project: 'Luxury Home Construction'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Owner',
      company: 'Rodriguez Construction',
      content: "The team at EstimatingHub helped us secure a major contract by providing detailed takeoffs and estimates that gave our client confidence in our bid.",
      rating: 4,
      project: 'Retail Center Renovation'
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
      title: 'Accuracy Guaranteed',
      description: 'Our estimating process ensures precision and reliability in every project.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
      title: 'Fast Turnaround',
      description: 'Get your estimates quickly without sacrificing quality or attention to detail.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
      title: 'Experienced Team',
      description: 'Our estimators have decades of combined experience in the construction industry.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
      title: 'Competitive Pricing',
      description: 'Professional estimating services at rates that make sense for your business.'
    }
  ];

  return (
    <div>
<section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video
      className="w-full h-full object-cover"
      src="/landscaping.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-label="Promotional video for DEC Experts services"
      
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

  {/* Content */}
  <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1
        className="mb-6 animate-fade-in text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        DEC EXPERTS — Your Trusted MEP & Engineering Partner
      </h1>
      <p
        className="text-sm md:text-base lg:text-lg text-gray-200 font-light tracking-wide animate-fade-in opacity-90 max-w-5xl mx-auto leading-snug"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Expert solutions in MEP Design, Architectural Planning, Solar PV, Civil & Structural Engineering, BIM Modeling & Landscape Architecture — innovative, reliable, and sustainable.
      </p>

      <div className="flex flex-col mt-10 sm:flex-row gap-6 justify-center animate-fade-in">
        <Link to="/Services">
                <Button className="bg-brand-500 text-white hover:bg-brand-600 text-lg py-6 px-10 shadow-lg transition-all duration-300 font-medium rounded-md">
                  View Services
                </Button>
              </Link>
        <Button
  className="text-white hover:bg-white/10 text-lg py-6 px-10 transition-all duration-300 font-medium rounded-md"
  aria-label="Scroll down"
  onClick={() => {
    window.scrollBy({ top: 600, behavior: "smooth" }); // Change 600 to how far you want to scroll
  }}
>
  Learn More
</Button>


      </div>
    </div>
  </div>
</section>

{/* Featured Image Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-800">
          Engineering Excellence in MEP Solutions
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Looking for Top-Tier Engineering Services? DEC Experts is your perfect partner! We specialize in cutting-edge MEP solutions, solar PV system design, architectural services, and more, tailored to elevate your projects, optimize performance, and ensure sustainable infrastructure. From HVAC design and smart building automation to structural analysis and landscaping design, our expert team delivers innovative, client-centric solutions to transform your engineering vision into reality. Ready to achieve excellence? Let DEC Experts guide your path to success!
        </p>
        <ul className="space-y-4 mb-8">
          {[
            "Comprehensive material takeoffs",
            "Detailed labor cost analysis",
            "Equipment and overhead calculations",
            "Specialized commercial & residential expertise"
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <div className="mr-3 mt-1 bg-brand-100 rounded-full p-1">
                <CheckCircle className="h-5 w-5 text-brand-600" />
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <Link to="/services">
          <Button
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 px-8 flex items-center gap-2 rounded-md"
            aria-label="Explore our services"
          >
            Explore Our Services <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80"
          alt="Construction professionals reviewing blueprints"
          className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[16/9]"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

      {/* Services Overview - Improved design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-800">Our Services</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive estimating solutions tailored to your construction project needs
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div> */}
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-200">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section with Image */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Contractors</h2>
            <p className="text-xl mb-10">
              We've helped contractors across the nation win bids and maximize profits with our accurate estimates.
            </p>
            <div className="flex justify-center">
              <Button className="bg-white text-brand-800 hover:bg-gray-100 text-lg py-3 px-8 shadow-lg">
                See Our Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - With image background */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ height: "500px", width: "100%" }}>
        <img
          src="/public/welcome.jpg"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
         
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex">
              <div className="mr-4 bg-brand-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials - Improved section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-800">What Our Clients Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Don't take our word for it - hear from the contractors and builders who trust us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                project={testimonial.project}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-200">Read More Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced design */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-10 text-gray-100 leading-relaxed">
              Contact us today for a free quote on your construction project. Our team of experts is ready to help you succeed.
            </p>
            <Button className="bg-brand-500 text-white hover:bg-brand-600 text-lg py-5 px-10 rounded-md shadow-lg transition-all duration-300 font-semibold">
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
