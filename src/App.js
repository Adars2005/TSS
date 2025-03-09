import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection"; // Import your FAQ component

function App() {
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.5; // Show FAQ when scrolled halfway
      
      console.log(`Scroll Position: ${scrollPosition}, Trigger Height: ${triggerHeight}`);
      
      if (scrollPosition > triggerHeight && !showFAQ) {
        console.log("Setting showFAQ to true");
        setShowFAQ(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showFAQ]); // Dependency added to avoid redundant event listeners

  return (
    <div>
      <HeroSection />
      <FAQSection />
    </div>
  );
}

export default App;
