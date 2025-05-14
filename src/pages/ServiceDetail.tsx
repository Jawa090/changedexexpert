import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Service {
  title: string;
  subtitle: string;
  items: string[];
}

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const allServices: ServiceSection[] = [
    {
      id: 'mep',
      title: 'Comprehensive MEP Solutions for Modern Infrastructure',
      subtitle: 'Our integrated MEP services ensure optimal performance, energy efficiency, and sustainability for your projects',
      services: [
        {
          title: 'Mechanical Services',
          subtitle: 'HVAC Design & Energy Efficiency',
          items: [
            'HVAC System Design & Implementation',
            'Energy-Efficient Solutions',
            'Ventilation & Air Quality Systems',
            'Retrofitting Solutions',
            'Thermal Comfort Analysis'
          ]
        },
        {
          title: 'Electrical Services',
          subtitle: 'Smart Electrical Systems',
          items: [
            'Power Distribution Design',
            'Advanced Lighting Solutions',
            'Building Automation Systems',
            'Emergency Power Systems',
            'Energy Management'
          ]
        },
        {
          title: 'Plumbing Services',
          subtitle: 'Sustainable Plumbing Solutions',
          items: [
            'Water Supply Systems',
            'Drainage Solutions',
            'Fire Protection Systems',
            'Water Conservation',
            'Sanitary System Design'
          ]
        }
      ]
    },
    {
      id: 'architectural',
      title: 'Comprehensive Architectural Solutions for Modern Spaces',
      subtitle: 'Transform your vision into reality with our innovative architectural design services that blend aesthetics with functionality',
      services: [
        {
          title: 'Building Design & Space Planning',
          subtitle: 'Innovative Design Solutions',
          items: [
            'Custom Building Design',
            'Space Planning & Optimization',
            '3D Visualization',
            'Sustainable Design Solutions',
            'Building Code Compliance'
          ]
        },
        {
          title: 'Interior & Exterior Design',
          subtitle: 'Aesthetic & Functional Designs',
          items: [
            'Interior Space Design',
            'Exterior Facade Design',
            'Material Selection',
            'Lighting Design',
            'Color & Texture Planning'
          ]
        },
        {
          title: 'Renovation & Restoration',
          subtitle: 'Revitalizing Existing Structures',
          items: [
            'Building Renovation',
            'Historic Restoration',
            'Adaptive Reuse',
            'Structural Assessment',
            'Modernization Solutions'
          ]
        }
      ]
    },
    {
      id: 'solar',
      title: 'Custom Solar Energy Solutions',
      subtitle: 'Harness the power of the sun with our innovative and sustainable solar PV system design solutions',
      services: [
        {
          title: 'Custom Solar Solutions',
          subtitle: 'Tailored to Your Needs',
          items: [
            'Site-specific system design',
            'Energy consumption analysis',
            'ROI calculations',
            'Custom panel configurations',
            'Grid integration planning'
          ]
        },
        {
          title: 'Feasibility Studies & Design',
          subtitle: 'Optimized System Design',
          items: [
            'Site assessment',
            'Solar resource evaluation',
            'Technical feasibility analysis',
            'Financial modeling',
            'Performance projections'
          ]
        },
        {
          title: 'Installation & Maintenance',
          subtitle: 'Seamless Implementation',
          items: [
            'Installation planning',
            'Quality assurance',
            'System monitoring',
            'Preventive maintenance',
            'Performance optimization'
          ]
        }
      ]
    },
    {
      id: 'civil',
      title: 'Comprehensive Civil Design Solutions',
      subtitle: 'Expert civil engineering solutions for sustainable infrastructure development and urban planning',
      services: [
        {
          title: 'Cost Estimation',
          subtitle: 'Accurate Project Budgeting',
          items: [
            'Detailed cost analysis',
            'Quantity takeoffs',
            'Budget optimization',
            'Value engineering',
            'Cost control strategies'
          ]
        },
        {
          title: 'Material & Risk Estimation',
          subtitle: 'Project Safety & Efficiency',
          items: [
            'Material quantity analysis',
            'Risk assessment',
            'Quality control',
            'Safety planning',
            'Mitigation strategies'
          ]
        },
        {
          title: 'Road & Pavement Design',
          subtitle: 'Durable Solutions',
          items: [
            'Road geometry design',
            'Pavement analysis',
            'Traffic flow planning',
            'Material selection',
            'Construction detailing'
          ]
        }
      ]
    },
    {
      id: 'bim',
      title: 'Advanced BIM Modeling Solutions',
      subtitle: 'Transforming construction through digital innovation and precision',
      services: [
        {
          title: '3D Modeling & Visualization',
          subtitle: 'Precision in Design',
          items: [
            'Detailed 3D modeling',
            'Realistic visualization',
            'Virtual walkthroughs',
            'Design optimization',
            'Material specifications'
          ]
        },
        {
          title: 'Clash Detection & Coordination',
          subtitle: 'Seamless Collaboration',
          items: [
            'Interference checking',
            'Multi-discipline coordination',
            'Issue tracking',
            'Resolution management',
            'Team collaboration'
          ]
        },
        {
          title: 'Construction Documentation',
          subtitle: 'Detailed & Accurate',
          items: [
            'Shop drawings',
            'As-built documentation',
            'Quantity takeoffs',
            'Standards compliance',
            'Project specifications'
          ]
        }
      ]
    },
    {
      id: 'structural',
      title: 'Reliable Structural Engineering Solutions',
      subtitle: 'Expert structural engineering services for safe and efficient buildings',
      services: [
        {
          title: 'Structural Analysis & Design',
          subtitle: 'Safe & Efficient Designs',
          items: [
            'Load calculations',
            'Seismic analysis',
            'Computer modeling',
            'Design optimization',
            'Code compliance'
          ]
        },
        {
          title: 'Foundation & Framing Systems',
          subtitle: 'Strong & Durable Foundations',
          items: [
            'Foundation design',
            'Steel framing',
            'Concrete structures',
            'Material selection',
            'Quality assurance'
          ]
        },
        {
          title: 'Retrofitting & Reinforcement',
          subtitle: 'Enhancing Existing Structures',
          items: [
            'Structural assessment',
            'Retrofit solutions',
            'Seismic upgrades',
            'Building repairs',
            'Historic preservation'
          ]
        }
      ]
    },
    {
      id: 'landscaping',
      title: 'Sustainable Landscaping Solutions',
      subtitle: 'Creating beautiful, eco-friendly outdoor spaces that stand the test of time',
      services: [
        {
          title: 'Site Planning & Hardscaping',
          subtitle: 'Functional & Aesthetic Designs',
          items: [
            'Site analysis & planning',
            'Hardscape design',
            'Outdoor living spaces',
            'Retaining walls',
            'Paving solutions'
          ]
        },
        {
          title: 'Green Spaces & Sustainability',
          subtitle: 'Eco-Friendly Landscapes',
          items: [
            'Native plant selection',
            'Sustainable design',
            'Rain gardens',
            'Green infrastructure',
            'Low-maintenance solutions'
          ]
        },
        {
          title: 'Irrigation System Design',
          subtitle: 'Efficient Water Management',
          items: [
            'Smart irrigation systems',
            'Water conservation',
            'Drip irrigation',
            'Rainwater harvesting',
            'System maintenance'
          ]
        }
      ]
    }
  ];

  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <Button className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-36 bg-gradient-to-r from-brand-800 to-brand-600 text-white overflow-hidden"
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-700 px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.services.map((item: Service, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <h4 className="text-md font-semibold text-brand-600">{item.subtitle}</h4>
                </div>
                <ul className="space-y-4">
                  {item.items.map((feature, i) => (
                    <li key={i} className="text-gray-700 text-base">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link to="/contact" className="inline-block w-full">
                  <Button className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white py-3 rounded-lg shadow-md hover:from-brand-700 hover:to-brand-800 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-700 to-brand-600 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              Ready to Transform Your Project?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your {service.id} needs and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button className="bg-white text-brand-700 px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="text-white border-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;