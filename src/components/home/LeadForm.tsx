
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  projectType: z.string().min(1, { message: "Project type is required" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const LeadForm = ({
  className = "bg-white rounded-xl shadow-xl p-8 border border-gray-100",
  title = "Request a Free Estimate",
  subtitle = "",
  buttonText = "Submit Request"
}: LeadFormProps) => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Request received",
      description: "Thank you! We'll contact you shortly.",
    });
    form.reset();
  }

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-6 text-brand-800">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type</FormLabel>
                <FormControl>
                  <Input placeholder="Commercial, Residential, Industrial, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your project..."
                    className="resize-none min-h-24"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-brand-600 hover:bg-brand-700 mt-2"
          >
            {buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
