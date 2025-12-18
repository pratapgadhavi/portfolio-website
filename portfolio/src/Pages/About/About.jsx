import React from "react";
import "./About.css";
import Button, { scrollToSection } from "../../Components/Button/Button";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const About = () => {
  const aboutData = {
    name: "Frontend Developer!",
    description:
      "To Work in an Organization that provides an sample opportunities to enhance my skills knowledge and also in contributing to the growth of the Organization.",
    buttonText: "Read More",
  };

  const scrollToEducation = () => {
    const element = document.getElementById("education");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <ScrollReveal direction="down">
    <section
      id="about"
      className="about-section relative flex flex-col items-center justify-center text-center min-h-[90vh] md:min-h-96"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="z-10">
        <ScrollReveal direction="up" duration={1} delay={0.2}>
          <h2 className="text-5xl font-extrabold text-white mb-16">
            About <span className="text-sky-600">Me</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col items-center">
          <div className="profile-img-wrapper p-1 relative w-60 h-60 my-6">
            <div className="rotating-border"></div>

            <div className="profile-img relative rounded-full border-2 border-sky-600 overflow-hidden w-full h-full">
              <img className="object-cover w-full h-full" />
            </div>
          </div>

          <ScrollReveal direction="down" duration={1.2}>
            <h3 className="text-3xl font-bold text-white mb-2">
              {aboutData.name}
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="down" duration={0.9}>
            <p className="max-w-5xl text-gray-200 my-5 md:text-lg">
              {aboutData.description}
            </p>

            <Button
              onClick={() => scrollToSection("education")}
              text={aboutData.buttonText}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
    // </ScrollReveal>
  );
};

export default About;
