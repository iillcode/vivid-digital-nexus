
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CTO, StartupTech",
      content: "TechNova delivered an exceptional mobile app that exceeded our expectations. Their team's expertise and dedication made all the difference.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager, GlobalCorp",
      content: "The ERP solution transformed our business operations. We've seen 40% improvement in efficiency since implementation.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Founder, Dubai Innovations",
      content: "Professional, reliable, and innovative. TechNova's cloud migration services helped us scale our business seamlessly.",
      rating: 5
    }
  ];

  const clients = [
    "Microsoft", "Amazon", "Google", "IBM", "Oracle", "Salesforce"
  ];

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their digital transformation
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="text-2xl font-bold text-white/40 hover:text-white/60 transition-colors">
              {client}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
