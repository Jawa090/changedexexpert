import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Star, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      number: '10+',
      label: 'Years Experience',
      icon: <Clock className="h-10 w-10 text-brand-600" />,
    },
    {
      number: '500+',
      label: 'Projects Completed',
      icon: <CheckCircle className="h-10 w-10 text-brand-600" />,
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: <Star className="h-10 w-10 text-brand-600" />,
    },
    {
      number: '20+',
      label: 'Team Members',
      icon: <Users className="h-10 w-10 text-brand-600" />,
    },
  ];

  const values = [
    {
      title: 'Accuracy',
      description: 'We meticulously verify all measurements and calculations to ensure our estimates are precise and reliable.',
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business dealings and client relationships.',
    },
    {
      title: 'Expertise',
      description: 'Our team brings years of industry experience and specialized knowledge to every project.',
    },
    {
      title: 'Innovation',
      description: 'We continuously adopt new technologies and methodologies to improve our estimating processes.',
    },
    {
      title: 'Communication',
      description: 'We maintain clear, consistent communication throughout the estimating process.',
    },
    {
      title: 'Client Focus',
      description: "We prioritize understanding and meeting each client's unique needs and project requirements.",
    },
  ];

  const team = [
    {
      name: 'John Anderson',
      position: 'Founder & CEO',
      bio: 'John has over 20 years of experience in construction estimating and project management. He founded EstimatingHub to provide accurate, reliable estimating services to contractors and builders.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      name: 'Sarah Thompson',
      position: 'Lead Estimator',
      bio: 'Sarah specializes in commercial construction estimating with expertise in healthcare and institutional projects. She leads our team of estimators and ensures quality control across all projects.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      name: 'Michael Rodriguez',
      position: 'Senior Estimator',
      bio: 'Michael brings 15 years of field experience as a former general contractor to our estimating team. He specializes in residential and multi-family projects, with expertise in renovation costs.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* About Hero */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6">
            About DecExperts
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed text-gray-100">
            We're a team of dedicated estimating professionals committed to helping contractors and builders succeed with accurate, reliable cost projections.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Our Story
          </h2>
          <div className="prose prose-lg text-gray-700 mx-auto space-y-6 leading-relaxed">
            <p>
              EstimatingHub was founded in 2013 with a simple mission: to provide contractors and builders with accurate, reliable construction estimates that help them win projects and improve profitability.
            </p>
            <p>
              Our founder, John Anderson, spent over 20 years working as a contractor and project manager before recognizing a critical need in the industry. Many contractors were losing bids due to inaccurate estimates or missing out on profit due to underestimating costs.
            </p>
            <p>
              What began as a one-person operation has grown into a team of over 20 estimating professionals serving clients across the United States. We've helped hundreds of contractors and builders improve their bidding process and project outcomes through detailed, accurate estimating.
            </p>
            <p>
              Today, EstimatingHub continues to grow and evolve, embracing new technologies and methodologies while maintaining our commitment to accuracy, integrity, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-brand-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold text-brand-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                To provide contractors and builders with the most accurate, reliable estimating services that help them win projects and maximize profitability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're committed to delivering detailed, thorough estimates that account for all aspects of a construction project. Our goal is to help our clients build with confidence, knowing their budgets and bids are based on solid, reliable data.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                To be the most trusted estimating partner in the construction industry, known for accuracy, integrity, and exceptional client service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every contractor has access to professional estimating services that help them grow their business, improve project outcomes, and achieve greater success in the competitive construction market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-700 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100">
            Contact us today to learn more about our services and how we can help with your construction estimating needs.
          </p>
          <Button className="bg-white text-brand-700 hover:bg-gray-100 text-lg font-semibold py-3 px-10 rounded-full shadow-lg transition-colors">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;