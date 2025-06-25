
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Star, Heart, Coffee, Trophy } from "lucide-react";

const Career = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Growth Opportunities",
      description: "Career advancement and skill development programs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Culture",
      description: "Collaborative environment with amazing colleagues"
    }
  ];

  const openings = [
    {
      title: "Senior Full Stack Developer",
      location: "Noida / Remote",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      description: "Join our core development team to build scalable web applications for enterprise clients."
    },
    {
      title: "UI/UX Designer",
      location: "Bangalore / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create stunning user experiences and interfaces for our diverse client portfolio."
    },
    {
      title: "DevOps Engineer",
      location: "Pune / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      description: "Build and maintain robust infrastructure for high-availability applications."
    },
    {
      title: "Business Development Manager",
      location: "Dubai / On-site",
      type: "Full-time",
      experience: "5-8 years",
      skills: ["Sales", "Client Relations", "Market Analysis", "Negotiation"],
      description: "Drive business growth in the Middle East market and build strategic partnerships."
    },
    {
      title: "Mobile App Developer",
      location: "Noida / Hybrid",
      type: "Full-time",
      experience: "2-5 years",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description: "Develop cutting-edge mobile applications for iOS and Android platforms."
    },
    {
      title: "Data Scientist Intern",
      location: "Bangalore / On-site",
      type: "Internship",
      experience: "0-1 years",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      description: "Work on exciting AI/ML projects and gain hands-on experience with real-world data."
    }
  ];

  const culture = [
    {
      title: "Innovation Hub",
      description: "We encourage experimentation and creative problem-solving",
      emoji: "💡"
    },
    {
      title: "Learning Culture",
      description: "Continuous learning with training budgets and conference attendance",
      emoji: "📚"
    },
    {
      title: "Work-Life Balance",
      description: "We value your personal time and mental health",
      emoji: "⚖️"
    },
    {
      title: "Global Exposure",
      description: "Work with international clients and diverse teams",
      emoji: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Be part of a dynamic team that's shaping the future of technology. 
            Build your career while making a real impact on businesses worldwide.
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">75+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-gray-400">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Why Choose TechNova?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Culture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Current Openings
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-bold text-white">{job.title}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.type === 'Full-time' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-400 mb-2">Required Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Apply</h3>
              <p className="text-gray-400">Submit your application with resume and portfolio</p>
            </div>
            <div className="relative">
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Screen</h3>
              <p className="text-gray-400">Initial screening call with our HR team</p>
            </div>
            <div className="relative">
              <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Interview</h3>
              <p className="text-gray-400">Technical and cultural fit interviews</p>
            </div>
            <div className="relative">
              <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Welcome</h3>
              <p className="text-gray-400">Join the TechNova family and start your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume anyway! We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Send Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
