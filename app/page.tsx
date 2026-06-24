import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";
import Screenshots from "@/components/Screenshots";
import WhyAera from "@/components/WhyAera";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <AIAssistant />
      <Screenshots />
      <WhyAera />
      <Download />
      <Footer />
    </main>
  );
}
