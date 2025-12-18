import React from "react";
import "./Skills.css";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const Skills = () => {
  const skillsData = [
    "HTML",
    "CSS",
    "SCSS/SASS",
    "bootstrap & Tailwind CSS",
    "JavaScript & TypeScript",
    "Angular JS",
    "React JS",
    "Git & Github",
  ];

  return (
    <section
      id="skills"
      className="skills-section relative min-h-[80vh] md:min-h-96 flex flex-col items-center justify-center text-white"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Title */}
      <ScrollReveal direction="up" duration={1.2} delay={0.2}>
        <h2 className="text-5xl font-extrabold z-10 text-center mb-16">
          My <span className="text-sky-600">Skills</span>
        </h2>
      </ScrollReveal>

      {/* Skills Box */}
      <div className="skills-container z-10 border-2 border-sky-600 rounded-lg p-8 md:p-6 sm:p-4 md:w-2/5 w-3/4 mx-auto flex flex-col items-center gap-3">
        {skillsData.map((skill, index) => (
          <ScrollReveal key={index} direction="up" duration={0.9}>
            <p className="skill-item">{skill}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
