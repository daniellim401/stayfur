import { useState, useEffect } from "react";
import AboutUs from "../components/AboutUs";
import TeamPage from "../components/Team";

const AboutPage = () => {
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const teamSection = document.getElementById("team-section");
      const rect = teamSection.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsSecondVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* About us content */}
      <AboutUs />

      {/* Team member content */}
      <div
        id="team-section"
        className={`transition-all duration-700 ease-in-out transform ${
          isSecondVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TeamPage />
      </div>
    </>
  );
};

export default AboutPage;