
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="glass-card dark:glass-card-dark rounded-2xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-2xl bg-marketing-100 dark:bg-marketing-800/40 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-display font-bold text-marketing-600 dark:text-marketing-400">404</span>
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-marketing-600 hover:bg-marketing-700 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
