import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async () => {
    // This would normally be a form submission to a server
    // For this frontend-only implementation, we're just showing a success toast
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate server delay
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully. I'll get back to you soon!",
    });
    
    reset();
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0915] pt-20">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Get in touch for collaborations, speaking engagements, or questions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gray-100 dark:bg-[#151320] rounded-lg shadow-lg p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name" 
                  className={`w-full bg-gray-100 dark:bg-[#0d0c14] border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  {...register('name')}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your.email@example.com" 
                  className={`w-full bg-gray-100 dark:bg-[#0d0c14] border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  {...register('email')}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject"
                placeholder="What is this regarding?" 
                className={`w-full bg-gray-100 dark:bg-[#0d0c14] border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                {...register('subject')}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea 
                id="message"
                placeholder="Your message here..." 
                rows={5}
                className={`w-full bg-gray-100 dark:bg-[#0d0c14] border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                {...register('message')}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-center">
              Your message will be sent to brijithkbiju@gmail.com
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white dark:from-purple-600 dark:to-indigo-600 dark:hover:from-purple-700 dark:hover:to-indigo-700 py-3 px-4 rounded-md shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-100 dark:bg-[#151320] rounded-lg shadow-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-envelope text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-500 dark:text-gray-400">brijithkbiju@gmail.com</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-100 dark:bg-[#151320] rounded-lg shadow-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-map-marker-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
            <p className="text-gray-500 dark:text-gray-400">Kerala, India</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-100 dark:bg-[#151320] rounded-lg shadow-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <i className="fas fa-globe text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Social Media</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
