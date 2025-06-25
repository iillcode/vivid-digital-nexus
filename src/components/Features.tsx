
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Shield, Smartphone, Globe, TrendingUp } from "lucide-react";

const Features = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored web, mobile, and desktop applications built with cutting-edge technologies and best practices.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS, Azure, and GCP solutions for scalable, secure, and cost-effective cloud infrastructure.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive threat detection, data protection, and security consulting to safeguard your business.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "SEO, SEM, and branding strategies to boost your online presence and drive business growth.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Enterprise ERP",
      description: "Streamlined finance, HR, and operations management systems for improved business efficiency.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
