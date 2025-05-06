import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ResumeAIChatbot from "@/components/chatbot-component";
import { ChatPage } from "@/components/ChatPage";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
        <ResumeAIChatbot />
        <ChatPage />
      </main>
    </ThemeProvider>
  );
}
