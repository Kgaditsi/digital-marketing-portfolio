
import { ArrowRight, Video, Mail, PresentationIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-marketing-100 dark:bg-marketing-900/20 rounded-full filter blur-3xl opacity-70 animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-marketing-50 dark:bg-marketing-900/10 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium">
                Digital Marketing Expert
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Turning Views into <span className="text-gradient">Value</span> for Your Brand
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I help businesses grow their online presence through strategic TikTok content, engaging email newsletters, and persuasive presentations.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#services" 
                  className="px-6 py-3 bg-marketing-600 hover:bg-marketing-700 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm flex items-center gap-2"
                >
                  Explore Services <ArrowRight size={18} />
                </a>
                <a 
                  href="#portfolio" 
                  className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-marketing-700 dark:text-marketing-300 rounded-full border border-marketing-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="glass-card dark:glass-card-dark rounded-2xl p-6 md:p-8 transform rotate-3 animate-float">
                <div className="space-y-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center">
                      <Video className="text-marketing-600 dark:text-marketing-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">TikTok Marketing</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Viral content strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center">
                      <Mail className="text-marketing-600 dark:text-marketing-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">Email Newsletters</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">High-conversion campaigns</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center">
                      <PresentationIcon className="text-marketing-600 dark:text-marketing-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">Presentations</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Persuasive slide decks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className={cn(
                "absolute -bottom-10 -left-20 glass-card dark:glass-card-dark rounded-xl p-5",
                "transform -rotate-6 animate-float animation-delay-1000"
              )}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">TikTok Views</p>
                    <p className="text-xl font-display font-bold text-marketing-700 dark:text-marketing-300">5.2M+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email Open Rate</p>
                    <p className="text-xl font-display font-bold text-marketing-700 dark:text-marketing-300">32%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
