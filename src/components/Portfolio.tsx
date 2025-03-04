
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const PortfolioItem = ({ 
  title, 
  category, 
  description, 
  image, 
  index 
}: { 
  title: string; 
  category: string; 
  description: string; 
  image: string; 
  index: number; 
}) => {
  return (
    <div 
      className={cn(
        "glass-card dark:glass-card-dark rounded-xl overflow-hidden hover-card opacity-0",
        "animate-fade-up",
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="py-1 px-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-marketing-700 dark:text-marketing-300 text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-marketing-600 dark:text-marketing-400 font-medium subtle-underline"
        >
          View Project <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      title: 'TikTok Growth Campaign',
      category: 'TikTok',
      description: 'A viral TikTok strategy that increased followers by 200% in 30 days for a lifestyle brand.',
      image: 'https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=2048&auto=format&fit=crop',
    },
    {
      title: 'Email Sequence for SaaS',
      category: 'Email',
      description: 'A 5-part email onboarding sequence that improved trial-to-paid conversion by 45%.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Investor Pitch Deck',
      category: 'Presentation',
      description: 'A compelling presentation that helped secure $2M in funding for a tech startup.',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2073&auto=format&fit=crop',
    },
    {
      title: 'Product Launch Series',
      category: 'TikTok',
      description: 'A series of TikTok videos that generated 1M+ views for a new product launch.',
      image: 'https://images.unsplash.com/photo-1622644997500-d8263ab9f7ba?q=80&w=2128&auto=format&fit=crop',
    },
    {
      title: 'Newsletter Rebrand',
      category: 'Email',
      description: 'A newsletter redesign that increased open rates by 32% and click-through rates by 48%.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Sales Training Deck',
      category: 'Presentation',
      description: 'A training presentation that improved sales team performance by 25% quarter-over-quarter.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
    },
  ];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore some of my recent work that has driven real results for clients
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'TikTok', 'Email', 'Presentation'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category.toLowerCase())}
                className={cn(
                  "py-2 px-4 rounded-full text-sm font-medium transition-all duration-300",
                  filter === category.toLowerCase() || (filter === 'all' && category === 'All')
                    ? "bg-marketing-600 text-white shadow-sm"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              description={item.description}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
