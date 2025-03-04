
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Working with this digital marketer transformed our TikTok presence completely. We went from struggling to get views to consistently reaching hundreds of thousands of people. The ROI has been incredible.",
      author: "Sarah Johnson",
      title: "Marketing Director, Lifestyle Brand",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop"
    },
    {
      quote: "Our email campaigns were underperforming until we started working together. Within three months, we saw a 40% increase in open rates and our conversion rates doubled. I couldn't be happier with the results.",
      author: "Michael Chen",
      title: "CEO, SaaS Company",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
    },
    {
      quote: "The presentation created for our investor meeting was absolutely stunning. We secured our funding round, and multiple investors specifically commented on how professional and persuasive the deck was.",
      author: "Lisa Rodriguez",
      title: "Founder, Tech Startup",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2187&auto=format&fit=crop"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-marketing-50 dark:bg-marketing-900/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-marketing-100 dark:bg-marketing-900/20 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take my word for it - hear what clients have to say about working with me
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card dark:glass-card-dark rounded-2xl p-8 md:p-12">
            <div className="text-marketing-500 dark:text-marketing-400 mb-8">
              <Quote size={48} />
            </div>
            
            <div className="min-h-[200px]">
              <div key={activeIndex} className="animate-fade-in">
                <p className="text-xl md:text-2xl font-display mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-marketing-200 dark:border-marketing-800"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex 
                        ? "bg-marketing-600 dark:bg-marketing-500 w-6" 
                        : "bg-gray-300 dark:bg-gray-700"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
