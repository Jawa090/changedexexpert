import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    return () => AOS.refresh();
  }, []);

  const services: Service[] = [
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
    {
      id: 'bim',
      name: 'BIM Modeling',
      image: '/public/bim.jpg',
      description: 'Advanced BIM modeling for accurate, collaborative, and efficient project planning.',
    },
    {
      id: 'structural',
      name: 'Structural Services',
      image: '/public/structural.png',
      description: 'Robust structural engineering solutions to ensure safety and durability.',
    },
    {
      id: 'landscaping',
      name: 'Landscaping Design',
      image: '/public/landscape.jpg',
      description: 'Creative landscaping designs to enhance outdoor spaces with beauty and functionality.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      {/* Services Hero */}
      <section className="relative bg-gradient-to-r from-brand-900 to-brand-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/hero-pattern.svg')] opacity-10 animate-pulse" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
            data-aos="fade-down"
          >
            Our Design Services
          </h1>
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover our comprehensive design services crafted for architects, engineers, and developers to create innovative, efficient projects.
          </p>
          <Link to="/contact" aria-label="Request a free quote">
            <Button
              className="bg-white text-brand-800 hover:bg-brand-100 hover:text-brand-900 text-lg py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800"
              data-aos="fade-up"
            >
              Specialized Design Solutions
            </h2>
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At EstimatingHub, we deliver tailored design services using cutting-edge technology and industry expertise, ensuring high-quality solutions for projects of all scales.
            </p>
          </div>

          {/* Design Services */}
          <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 group backdrop-blur-sm"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 150}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.name} service`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://picsum.photos/500/300?random=0';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-lg">
                      {service.name}
                    </h3>
                  </div>
                  <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                    <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link to={`/services/${service.id}`} aria-label={`Learn more about ${service.name}`}>
                      <Button className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-md">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800"
            data-aos="fade-up"
          >
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: 'Project Analysis',
                description: 'We dive deep into your project requirements to align with your vision.',
              },
              {
                step: 'Conceptual Design',
                description: 'Our team crafts initial concepts to meet your project goals.',
              },
              {
                step: 'Detailed Development',
                description: 'We produce precise designs using advanced tools for efficiency.',
              },
              {
                step: 'Final Delivery',
                description: 'We provide comprehensive documentation ready for execution.',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white/80 p-8 rounded-3xl shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{process.step}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div
            className="bg-gradient-to-r from-brand-800 to-brand-600 text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl backdrop-blur-md relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-[url('/public/cta-pattern.svg')] opacity-10 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg relative z-10">
              Ready to Transform Your Project?
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed font-light relative z-10">
              Reach out for a free consultation and quote to bring your vision to life.
            </p>
            <Link to="/contact" aria-label="Request a free quote">
              <Button
                className="bg-white text-brand-800 hover:bg-brand-100 hover:text-brand-900 text-xl py-4 px-10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;