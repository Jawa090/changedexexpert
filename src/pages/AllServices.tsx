import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  details: {
    title: string;
    subtitle: string;
    sections: {
      title: string;
      subtitle: string;
      icon: string;
      items: string[];
      image?: string;
    }[];
  };
}

const AllServices: React.FC = () => {
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
      image: 'https://picsum.photos/500/300?random=1',
      description: 'Expert MEP design services for efficient mechanical, electrical, and plumbing systems tailored to your project.',
      details: {
        title: 'Comprehensive MEP Solutions',
        subtitle: 'Integrated MEP services for optimal performance and sustainability.',
        sections: [
          {
            title: 'Mechanical Services',
            subtitle: 'HVAC Design & Efficiency',
            icon: 'bi-fan',
            items: [
              'HVAC System Design',
              'Energy-Efficient Solutions',
              'Ventilation Systems',
              'Retrofitting Solutions',
              'Thermal Comfort Analysis',
            ],
            image: 'https://picsum.photos/500/300?random=11',
          },
          {
            title: 'Electrical Services',
            subtitle: 'Smart Electrical Systems',
            icon: 'bi-lightning-charge',
            items: [
              'Power Distribution Design',
              'Advanced Lighting Solutions',
              'Building Automation',
              'Emergency Power Systems',
              'Energy Management',
            ],
            image: 'https://picsum.photos/500/300?random=12',
          },
          {
            title: 'Plumbing Services',
            subtitle: 'Sustainable Plumbing',
            icon: 'bi-droplet',
            items: [
              'Water Supply Systems',
              'Drainage Solutions',
              'Fire Protection Systems',
              'Water Conservation',
              'Sanitary System Design',
            ],
            image: 'https://picsum.photos/500/300?random=13',
          },
        ],
      },
    },
    {
      id: 'architectural',
      name: 'Architectural Services',
      image: 'https://picsum.photos/500/300?random=2',
      description: 'Innovative architectural solutions to bring your vision to life with precision and creativity.',
      details: {
        title: 'Comprehensive Architectural Solutions',
        subtitle: 'Transform your vision into reality with innovative designs.',
        sections: [
          {
            title: 'Building Design',
            subtitle: 'Innovative Solutions',
            icon: 'bi-building',
            items: [
              'Custom Building Design',
              'Space Optimization',
              '3D Visualization',
              'Sustainable Design',
              'Code Compliance',
            ],
            image: 'https://picsum.photos/500/300?random=14',
          },
          {
            title: 'Interior Design',
            subtitle: 'Aesthetic & Functional Spaces',
            icon: 'bi-house-door',
            items: [
              'Interior Layout Planning',
              'Material Selection',
              'Lighting Design',
              'Furniture Coordination',
              'Color Schemes',
            ],
            image: 'https://picsum.photos/500/300?random=15',
          },
          {
            title: 'Renovation & Restoration',
            subtitle: 'Revitalize Your Space',
            icon: 'bi-hammer',
            items: [
              'Historic Preservation',
              'Structural Upgrades',
              'Modernization',
              'Energy Retrofits',
              'Adaptive Reuse',
            ],
            image: 'https://picsum.photos/500/300?random=16',
          },
        ],
      },
    },
    {
      id: 'solar',
      name: 'Solar PV System Design',
      image: 'https://picsum.photos/500/300?random=3',
      description: 'Custom solar PV system designs to maximize energy efficiency and sustainability.',
      details: {
        title: 'Solar PV System Design',
        subtitle: 'Harness the power of the sun with custom solar solutions.',
        sections: [
          {
            title: 'System Design',
            subtitle: 'Optimized Solar Solutions',
            icon: 'bi-sun',
            items: [
              'Solar Panel Layout',
              'Inverter Selection',
              'Energy Storage Solutions',
              'Performance Modeling',
              'Grid Integration',
            ],
            image: 'https://picsum.photos/500/300?random=17',
          },
        ],
      },
    },
    {
      id: 'civil',
      name: 'Civil Design',
      image: 'https://picsum.photos/500/300?random=4',
      description: 'Comprehensive civil design services for infrastructure and site development projects.',
      details: {
        title: 'Civil Design Services',
        subtitle: 'Robust infrastructure solutions for sustainable development.',
        sections: [
          {
            title: 'Site Development',
            subtitle: 'Comprehensive Planning',
            icon: 'bi-map',
            items: [
              'Site Grading',
              'Drainage Systems',
              'Roadway Design',
              'Utility Planning',
              'Erosion Control',
            ],
            image: 'https://picsum.photos/500/300?random=18',
          },
        ],
      },
    },
    {
      id: 'bim',
      name: 'BIM Modeling',
      image: 'https://picsum.photos/500/300?random=5',
      description: 'Advanced BIM modeling for accurate, collaborative, and efficient project planning.',
      details: {
        title: 'BIM Modeling Services',
        subtitle: 'Advanced modeling for efficient project collaboration.',
        sections: [
          {
            title: 'BIM Modeling',
            subtitle: '3D Coordination',
            icon: 'bi-boxes',
            items: [
              '3D Model Creation',
              'Clash Detection',
              'Construction Sequencing',
              'Quantity Takeoffs',
              'Facility Management',
            ],
            image: 'https://picsum.photos/500/300?random=19',
          },
        ],
      },
    },
    {
      id: 'structural',
      name: 'Structural Services',
      image: 'https://picsum.photos/500/300?random=6',
      description: 'Robust structural engineering solutions to ensure safety and durability.',
      details: {
        title: 'Structural Engineering Services',
        subtitle: 'Safe and durable structural solutions.',
        sections: [
          {
            title: 'Structural Design',
            subtitle: 'Robust Engineering',
            icon: 'bi-building-gear',
            items: [
              'Foundation Design',
              'Steel Framing',
              'Concrete Structures',
              'Seismic Analysis',
              'Load Calculations',
            ],
            image: 'https://picsum.photos/500/300?random=20',
          },
        ],
      },
    },
    {
      id: 'landscaping',
      name: 'Landscaping Design',
      image: 'https://picsum.photos/500/300?random=7',
      description: 'Creative landscaping designs to enhance outdoor spaces with beauty and functionality.',
      details: {
        title: 'Landscaping Design Services',
        subtitle: 'Beautiful and functional outdoor spaces.',
        sections: [
          {
            title: 'Landscape Design',
            subtitle: 'Creative Outdoor Solutions',
            icon: 'bi-tree',
            items: [
              'Garden Design',
              'Hardscape Features',
              'Irrigation Systems',
              'Plant Selection',
              'Outdoor Lighting',
            ],
            image: 'https://picsum.photos/500/300?random=21',
          },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-900 to-brand-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/hero-pattern.svg')] opacity-10 animate-pulse" />
        <div className="container mx-auto px-6 text-center relative z-10" data-aos="zoom-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Our Comprehensive Design Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
            Explore our full range of innovative and sustainable design solutions tailored for architects, engineers, and developers.
          </p>
          <Link to="/contact" aria-label="Get a free quote">
            <Button
              className="bg-white text-brand-800 hover:bg-brand-100 hover:text-brand-900 text-lg py-4 px-10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800">
              Our Specialized Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="200">
              From MEP design to landscaping, our expert team delivers high-quality solutions for all your project needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
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
                  <div className="absolute inset-0 bg-gradient-to #####-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-lg">{service.name}</h3>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <p className="text-gray-700 text-base leading-relaxed line-clamp-3">{service.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <a href={`#${service.id}-services`} aria-label={`View details for ${service.name}`}>
                    <Button className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-md">
                      View Details <i className="bi bi-arrow-right ml-2"></i>
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Service Sections */}
          {services.map((service) => (
            <section
              key={service.id}
              id={`${service.id}-services`}
              className="py-24 bg-gray-50 mb-16"
              data-aos="fade-up"
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800">
                    {service.details.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                    {service.details.subtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                  {service.details.sections.map((section, index) => (
                    <div
                      key={index}
                      className="relative bg-white/80 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-3xl hover:-translate-y-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                    >
                      {section.image && (
                        <div className="relative h-56 w-full overflow-hidden">
                          <img
                            src={section.image}
                            alt={`${section.title} illustration`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = 'https://picsum.photos/500/300?random=0';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-500" />
                        </div>
                      )}
                      <div className="p-8">
                        <div className="flex justify-center mb-6">
                          <i
                            className={`${section.icon} text-5xl text-brand-600 drop-shadow-md transition-transform duration-300 hover:scale-110`}
                          ></i>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-3 text-gray-900">{section.title}</h3>
                        <h4 className="text-lg font-semibold text-center mb.ConcurrentModificationException: 6 text-gray-600">{section.subtitle}</h4>
                        <ul className="space-y-4">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-center">
                              <i className="bi bi-check-circle-fill text-brand-600 mr-3 text-xl"></i>
                              <span className="text-gray-700 text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/contact" aria-label={`Request a custom solution for ${service.name}`}>
                    <Button
                      className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-brand-700 hover:to-brand-800 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-lg"
                      data-aos="zoom-in"
                    >
                      Request Custom Solution <i className="bi bi-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-brand-800 to-brand-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center relative" data-aos="fade-up">
          <div className="absolute inset-0 bg-[url('/public/cta-pattern.svg')] opacity-10 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg relative z-10">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed font-light relative z-10">
            Contact us today for a free consultation and let’s bring your vision to life.
          </p>
          <Link to="/contact" aria-label="Request a free consultation">
            <Button
              className="bg-white text-brand-800 hover:bg-brand-100 hover:text-brand-900 text-xl py-4 px-10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-300 shadow-lg relative z-10"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllServices;