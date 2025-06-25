
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "6+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Projects Delivered", value: "500+", icon: Target },
    { label: "Global Offices", value: "4", icon: Globe },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that drive your business forward.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We build long-term partnerships based on trust and results.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring robust and scalable solutions.",
      icon: "⭐"
    },
    {
      title: "Global Reach",
      description: "From Noida to Dubai, we serve clients worldwide with local expertise and global vision.",
      icon: "🌍"
    }
  ];

  const team = [
    {
      name: "Arjun Mehta",
      role: "Chief Executive Officer",
      description: "Visionary leader with 12+ years of experience in digital transformation",
      image: "👨‍💼"
    },
    {
      name: "Sneha Reddy",
      role: "Chief Technology Officer",
      description: "Tech expert specializing in cloud architecture and AI solutions",
      image: "👩‍💻"
    },
    {
      name: "Vikram Sharma",
      role: "Head of Operations",
      description: "Operations mastermind ensuring seamless project delivery",
      image: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            About TechNova
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Empowering businesses since 2018 with innovative technology solutions that drive growth, 
            efficiency, and digital transformation across the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2018, TechNova Solutions emerged from a simple yet powerful vision: 
                  to bridge the gap between traditional business operations and cutting-edge technology.
                </p>
                <p>
                  What started as a small team of passionate developers in Noida has grown into 
                  a global technology partner with offices across India and the UAE, serving 
                  clients from startups to enterprise-level organizations.
                </p>
                <p>
                  Today, with 75+ dedicated professionals and 500+ successful projects, we continue 
                  to push boundaries and deliver solutions that not just meet expectations but 
                  exceed them consistently.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>CMMI Level 3</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>AWS Partner</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold mb-4">Global Presence</h3>
                <div className="space-y-3 text-gray-300">
                  <div>📍 Noida, India (HQ)</div>
                  <div>📍 Bangalore, India</div>
                  <div>📍 Pune, India</div>
                  <div>📍 Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">{member.image}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <div className="text-blue-400 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how TechNova can help transform your business with innovative technology solutions.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
