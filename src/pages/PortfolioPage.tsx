
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Recent <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore my latest projects and see how I've helped clients achieve their marketing goals
            </p>
          </div>
        </div>
      </div>
      <Portfolio />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to elevate your digital marketing? Let's create something amazing for your brand.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-marketing-600 hover:bg-marketing-700 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
