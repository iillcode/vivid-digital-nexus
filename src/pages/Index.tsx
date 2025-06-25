
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <CallToAction />
      <ChatWidget />
    </div>
  );
};

export default Index;
