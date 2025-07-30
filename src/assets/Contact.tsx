import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ParticleBackground from '../components/ParticleBackground';

// Contact form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Form submission handler using Web3Forms
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // The form will be submitted directly via the form action attribute
      // This function is now primarily for validation and UX
      
      // Show success message
      toast({
        title: "Sending Message",
        description: "Sending your message to Brijith...",
        duration: 2000
      });
      
      // Form will be submitted natively, we don't need to manually reset
      // as the page will redirect
    } catch (error) {
      console.error('Error sending contact form:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0a0915]">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="container mx-auto py-28 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white">Contact Me</h1>
          <p className="text-gray-400 mt-2">Get in touch for collaborations, speaking engagements, or questions</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#151320] rounded-lg shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
              {/* Web3Forms required fields */}
              <input type="hidden" name="access_key" value="492d5fd6-bf16-43ef-accd-417eb9413e34" />
              <input type="hidden" name="from_name" value="Brijith K Biju Portfolio Contact" />
              <input type="hidden" name="redirect" value="https://brijithkbiju-portfolio.replit.app" />
              {/* Honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} name="name" className="bg-[#0d0c14] border-gray-700" />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} name="email" className="bg-[#0d0c14] border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What is this regarding?" {...field} name="subject" className="bg-[#0d0c14] border-gray-700" />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message here..." 
                        {...field}
                        name="message"
                        className="bg-[#0d0c14] border-gray-700 min-h-[150px]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-xs text-gray-500 mb-4 text-center">
                Your message will be sent to groot4272@gmail.com
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                disabled={isSubmitting || form.formState.isSubmitting}
              >
                {isSubmitting || form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#151320] rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-envelope text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-400">brijithkbiju@gmail.com</p>
          </div>
          
          <div className="bg-[#151320] rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-map-marker-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
            <p className="text-gray-400">Kerala, India</p>
          </div>
          
          <div className="bg-[#151320] rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-globe text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Social Media</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}