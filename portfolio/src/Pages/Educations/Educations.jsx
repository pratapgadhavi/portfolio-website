import React from "react";
import "./Educations.css";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const Educations = () => {
  const journeyData = [
    {
      year: "2022–2025",
      title: "Siddhi Vinayak Education Trust College, Jamnagar",
      degree: "BCA – Bachelor of Computer Applications",
      details: "Affiliated to Saurashtra University",
      result: "CGPA: 7.69",
    },
    {
      year: "2022",
      title: "Shri Vivekananda Vidya Mandir, Bhogat",
      degree: "12th (HSC)",
      result: "Percentage: 75.6",
    },
    {
      year: "2020",
      title: "Shri Vivekananda Vidya Mandir, Bhogat",
      degree: "10th (SSC)",
      result: "Percentage: 65.2",
    },
  ];

  return (
    <section
      id="education"
      className="education-section relative min-h-screen md:min-h-96 flex flex-col items-center justify-center text-white"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Title */}
      <ScrollReveal direction="up" duration={1.2} delay={0.2}>
        <h2 className="text-5xl font-extrabold z-10 text-center mb-16">
          My <span className="text-sky-600">Journey</span>
        </h2>
      </ScrollReveal>

      <h3 className="mb-4 font-bold text-2xl xl:text-4xl w-full text-left xl:pl-60 md:pl-40 pl-14">
        Education
      </h3>

      {/* Timeline */}
      <div className="timeline-container relative z-10 w-11/12 md:w-3/4 mx-auto flex">
        {/* Vertical Line */}
        <div className="timeline-line bg-sky-500"></div>

        <div className="timeline-items flex flex-col ml-10 md:ml-16 gap-16 w-full">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className="timeline-item flex flex-row items-start"
            >
              {/* Dot */}
              <div className="timeline-dot bg-sky-500 border-4 border-black"></div>

              {/* Content */}
              <div className="timeline-content bg-black/60 border border-sky-600 rounded-xl p-3 md:p-5 md:ml-5 ml-4 w-72 md:w-full">
                <ScrollReveal direction="up" duration={0.9}>
                  <p className="text-sky-400 font-semibold flex items-center gap-2">
                    {item.year} <i className="fas fa-calendar-alt"></i>
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.degree}</p>
                  {item.details && (
                    <p className="text-gray-400">{item.details}</p>
                  )}
                  <p className="text-gray-400 mt-1">{item.result}</p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
