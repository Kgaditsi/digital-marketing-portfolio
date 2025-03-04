
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to elevate your digital marketing? Get in touch to discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <div className="glass-card dark:glass-card-dark rounded-xl p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center shrink-0">
                    <Mail className="text-marketing-600 dark:text-marketing-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Contact me directly</p>
                    <a 
                      href="mailto:hello@digitalmarketer.com" 
                      className="text-marketing-600 dark:text-marketing-400 subtle-underline"
                    >
                      hello@digitalmarketer.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card dark:glass-card-dark rounded-xl p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center shrink-0">
                    <MessageSquare className="text-marketing-600 dark:text-marketing-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Follow Me</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">On social platforms</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors">
                        TikTok
                      </a>
                      <span className="text-gray-400">•</span>
                      <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors">
                        LinkedIn
                      </a>
                      <span className="text-gray-400">•</span>
                      <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="glass-card dark:glass-card-dark rounded-xl p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-marketing-500 dark:focus:ring-marketing-400 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-marketing-500 dark:focus:ring-marketing-400 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-marketing-500 dark:focus:ring-marketing-400 transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-marketing-500 dark:focus:ring-marketing-400 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all",
                      isSubmitting
                        ? "bg-marketing-400 dark:bg-marketing-600 cursor-not-allowed"
                        : "bg-marketing-600 hover:bg-marketing-700 dark:bg-marketing-500 dark:hover:bg-marketing-400 transform hover:-translate-y-1"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={18} className="ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
