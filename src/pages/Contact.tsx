import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
      toast.success("Form submitted successfully! We'll contact you shortly.", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Submission failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Hero */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-32"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
          }}
        />
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            variants={fadeIn}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-100"
            variants={fadeIn}
          >
            Reach out to our expert team for your construction estimating needs. We're here to help you succeed.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="bg-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100"
            variants={fadeIn}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b pb-4 border-gray-200">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" variants={slideIn}>
                  <label htmlFor="name" className="text-gray-700 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Smith"
                    className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                  />
                  {/* {errors.name?.message && <p className="text-red-500 text-sm">{errors.name.message}</p>} */}
                </motion.div>
                <motion.div className="space-y-2" variants={slideIn}>
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="john@example.com"
                    className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                  />
                  {/* {errors.email?.message && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" variants={slideIn}>
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    {...register("phone")}
                    placeholder="(555) 123-4567"
                    className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={slideIn}>
                  <label htmlFor="company" className="text-gray-700 font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    {...register("company")}
                    placeholder="Your Company"
                    className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                  />
                </motion.div>
              </div>
              <motion.div className="space-y-2" variants={slideIn}>
                <label htmlFor="project" className="text-gray-700 font-medium">
                  Project Type
                </label>
                <input
                  id="project"
                  {...register("project")}
                  placeholder="Commercial, Residential, etc."
                  className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                />
              </motion.div>
              <motion.div className="space-y-2" variants={slideIn}>
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell us about your project and how we can help..."
                  rows={5}
                  className="w-full border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg shadow-sm p-3"
                />
                {/* {errors.message?.message && <p className="text-red-500 text-sm">{errors.message.message}</p>} */}
              </motion.div>
              <motion.div variants={slideIn}>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold py-3 px-8 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            variants={fadeIn}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620305280574!5m2!1sen!2sca"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location Map"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            variants={fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you complete an estimate?',
                answer:
                  'Our turnaround time depends on the project’s size and complexity. Typically, residential projects are completed within 2-3 business days, while larger commercial projects may take 5-7 business days. We also offer rush services for time-sensitive projects.',
              },
              {
                question: 'What information do you need to provide an estimate?',
                answer:
                  'To provide an accurate estimate, we typically need construction plans (blueprints), specifications, project location, and any specific requirements or constraints. The more detailed information you provide, the more accurate our estimate will be.',
              },
              {
                question: 'How accurate are your estimates?',
                answer:
                  'Our estimates are typically accurate within 2-5% of final costs, depending on the level of detail in the provided plans and specifications. We pride ourselves on providing reliable, detailed estimates that help contractors bid with confidence.',
              },
              {
                question: 'Do you offer ongoing support after providing an estimate?',
                answer:
                  'Yes, we provide support throughout your bidding process. If you have questions about our estimate or need adjustments based on project changes, we’re available to help. We can also provide value engineering suggestions to help reduce costs.',
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-gray-50 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 transition-colors focus:outline-none"
                    onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle('hidden')}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <motion.div
                      className="h-6 w-6 text-blue-600 flex-shrink-0"
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  <div className="hidden px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;