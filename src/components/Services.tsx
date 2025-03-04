
import { Video, Mail, PresentationIcon, ChartBar, TrendingUp, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'TikTok Content Creation',
      description: 'Engaging short-form videos that capture attention and drive brand awareness with tailored strategies for your target audience.',
    },
    {
      icon: <Mail className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'Email Marketing Campaigns',
      description: 'Conversion-focused newsletters that nurture leads and drive sales through personalized automation sequences.',
    },
    {
      icon: <PresentationIcon className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'Professional Presentations',
      description: 'Compelling slide decks and presentations designed to persuade, inform, and leave a lasting impression on your audience.',
    },
    {
      icon: <ChartBar className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'Marketing Analytics',
      description: 'Data-driven insights that help measure campaign performance and optimize your marketing strategies for better ROI.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'Growth Strategy',
      description: 'Comprehensive marketing plans that align with your business goals to achieve sustainable growth and increased market share.',
    },
    {
      icon: <Target className="h-8 w-8 text-marketing-600 dark:text-marketing-400" />,
      title: 'Brand Positioning',
      description: 'Strategic messaging and positioning to differentiate your brand and connect with your ideal customers effectively.',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-marketing-50 dark:bg-marketing-900/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-marketing-100 dark:bg-marketing-900/20 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Marketing Solutions That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive digital marketing services tailored to help your business grow its online presence and convert followers into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card dark:glass-card-dark rounded-xl p-6 hover-card"
            >
              <div className="w-14 h-14 rounded-xl bg-marketing-50 dark:bg-marketing-800/30 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
