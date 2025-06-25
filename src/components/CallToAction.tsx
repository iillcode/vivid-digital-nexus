
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create innovative solutions that drive growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold group transition-all duration-300 hover:scale-105"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
            >
              View Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <div className="text-white font-semibold">Call Us</div>
              <div className="text-gray-400">+91 9999 999 999</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <div className="text-white font-semibold">Email Us</div>
              <div className="text-gray-400">info@technova.in</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-bold text-lg mb-2">24/7 Support</div>
              <div className="text-gray-400">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
