import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle, 
  FileSpreadsheet, 
  Layers, 
  Users, 
  Briefcase, 
  Search, 
  FileText, 
  MessageSquare, 
  BarChart, 
  Contact, 
  FileCheck, 
  DollarSign, 
  TrendingUp, 
  Phone,
  PlayCircle 
} from 'lucide-react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  projectDetails: z.string().optional(),
});

const VirtualBidManager = () => {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      projectDetails: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Request submitted",
      description: "We'll be in touch with you shortly.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Virtual Bid Manager</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your bidding process with expert support to win more construction projects
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105">
            Hire a Virtual Bid Manager
          </Button>
        </div>

        {/* What is Virtual Bid Manager */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">What is a Virtual Bid Manager?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                A Virtual Bid Manager is a remote professional who streamlines your construction bidding process. They handle proposal creation, bid analysis, subcontractor coordination, and SWOT analysis to ensure competitive bids. With expertise in managing the entire bidding lifecycle, they help you save time, reduce costs, and win more projects.
              </p>
              <p className="text-lg text-gray-700">
                At Digital Estimating, our Virtual Bid Managers provide cost-effective, flexible support, allowing you to focus on core business activities while we optimize your bidding strategy.
              </p>
            </div>
            <div className="relative aspect-video">
              <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/jCCfWbv9epE?start=2"
                  title="What is a Virtual Bid Manager?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

            </div>
          </div>
        </div>

        {/* Why Virtual Bid Manager */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Why Choose Virtual Bid Manager?</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Virtual Bid Manager remotely assists your company with bidding management, including proposal creation, bid analysis, identifying potential subcontractors, and SWOT analysis of the bidding process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'Manage Bidding Process', description: 'VBM oversees the entire bidding process from start to finish.' },
              { icon: Search, title: 'Identify Suppliers', description: 'Finds potential subcontractors and material suppliers.' },
              { icon: FileText, title: 'Addendums & Change Orders', description: 'Incorporates all addendums and change orders into estimates promptly.' },
              { icon: MessageSquare, title: 'RFI Responses', description: 'Coordinates with owners/architects for timely RFI responses.' },
              { icon: BarChart, title: 'SWOT Analysis', description: 'Conducts SWOT analysis to optimize the bidding process.' },
              { icon: Contact, title: 'Local Vendors', description: 'Maintains updated contacts of subcontractors and vendors.' },
              { icon: FileCheck, title: 'Review Plans', description: 'Reviews project plans to select optimal bidding opportunities.' },
              { icon: DollarSign, title: 'Finalize Bids', description: 'Finalizes bids using estimates and vendor quotes.' },
              { icon: TrendingUp, title: 'Bid Analysis', description: 'Analyzes past bids to improve future performance.' },
              { icon: Phone, title: 'Communication', description: 'Ensures open communication with all pre-bid parties.' },
            ].map((service, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg transition-transform transform hover:scale-105">
                <div className="mr-4 bg-blue-50 rounded-full p-2">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Effective Bidding Section */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Hire Virtual Bid Manager for Effective Bidding</h2>
          <p className="text-lg text-gray-700 mb-6">
            Are you tired of losing bids or missing out on lucrative construction projects? A Virtual Bid Manager is a priceless asset for any construction project, with the expertise to create winning proposals that meet client needs and boost your success rate. At Digital Estimating, we provide skilled professionals to guide you through the bidding process, ensuring you submit competitive proposals. Contact us today to see how our Virtual Bid Manager can help you win more business and keep your projects on track.
          </p>
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Key Benefits of Hiring a Virtual Bid Manager</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: 'Access to Expertise', description: 'Specialized knowledge in managing bids and proposals to improve win rates.' },
              { icon: DollarSign, title: 'Cost-Effective', description: 'More economical than hiring full-time staff, saving you money.' },
              { icon: Layers, title: 'Flexibility', description: 'Remote support available as needed, adapting to your schedule.' },
              { icon: CheckCircle, title: 'Time-Saving', description: 'Frees up your time to focus on other critical business aspects.' },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start transition-transform transform hover:scale-105">
                <div className="mr-4 bg-blue-50 rounded-full p-2">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Submit Your Plans', description: 'Upload your project plans and specifications.' },
              { step: 2, title: 'Project Analysis', description: 'Our team reviews your project requirements.' },
              { step: 3, title: 'Detailed Estimate', description: 'We prepare comprehensive cost estimates.' },
              { step: 4, title: 'Bid Package', description: 'Receive complete bid documents ready for submission.' },
            ].map((item) => (
              <div key={item.step} className="text-center transition-transform transform hover:scale-105">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Streamline Bidding Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Streamline Your Bidding Process</h2>
          <p className="text-lg text-gray-700 mb-6">
            Any firm that routinely engages in bidding can benefit from a Virtual Bid Manager. They offer remote expertise in developing bid strategies, creating proposals, and managing submissions. By identifying opportunities, analyzing specifications, and researching competition, a Virtual Bid Manager ensures your proposals are competitive and successful. They oversee the process, coordinating with team members to meet deadlines and maintain high quality, ultimately increasing your chances of landing contracts.
          </p>
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Get Started Today</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Construction Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project (type, size, location, timeline)"
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Share any specific details that will help us prepare your estimate.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105">
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Custom Tailwind Animation */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default VirtualBidManager;