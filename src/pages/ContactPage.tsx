
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-28 pb-16 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-marketing-100 dark:bg-marketing-900/30 text-marketing-700 dark:text-marketing-300 text-sm font-medium mb-4">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind? Get in touch and let's discuss how I can help your business grow.
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
