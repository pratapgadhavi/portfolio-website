import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Experience.css";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const experiences = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Personal Portfolio",
    projectName: "My Portfolio Website",
    description:
      "I developed my personal portfolio website using React and Tailwind CSS. The project includes multiple sections like Home, About, Skills, and Contact etc. I used React components for Reusable layouts and Tailwind CSS for Responsive design. I also added animations, smooth scrolling, and dynamic data handling using React state and props. The site is fully responsive across all devices. This project helped me improve my React structure, component logic, and Tailwind design skills.",
  },
  {
    id: 2,
    role: "Intern - Front-End Developer",
    company: "CloseDigit LLP",
    projectName: "Decoraitrade Website",
    Duration: "Jun 2025 - Aug 2025",
    description:
      "During my Front-end internship, I worked on developing responsive web pages using Angular, Typescript, Bootstrap, and SCSS. I created dynamic components using ngFor and ngIf, implemented Reactive Forms with validations, and used services for data communication. I also integrated carousels and handled routing between pages. This internship helped me understand real-world Angular project structure and improved my front-end development skills.",
  },
  {
    id: 3,
    role: "Intern - Front-End Developer",
    company: "InternPe",
    projectName:
      "Calculator Project, E-commerce website , todo-Application, Connect4-master Game ",
    description:
      "I worked remotely on multiple front-end projects using HTML, CSS, and JavaScript. During this experience, I built several hands-on projects including a Calculator, an E-commerce website, a To-Do Application, and a Connect4 Game. These projects helped me improve my UI design, problem-solving, and JavaScript logic-building skills while learning step-by-step through online resources.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="work-experience-section text-white">
      <div className="container mx-auto">
        <ScrollReveal direction="up" duration={1.2} delay={0.2}>
          <h2 className="text-5xl font-extrabold text-center z-10 mb-16">
            Work <span className="text-sky-600">Experience</span>
          </h2>
        </ScrollReveal>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          grabCursor={true}
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.id}>
              <div className="experience-card overflow-auto m-5 my-10 relative z-10 bg-gray-800 border-2 border-sky-600 rounded-xl p-6 w-[90%] md:w-[90%] lg:w-[95%]  h-[500px] md:h-[530px] xl:h-[360px] transition-transform hover:scale-y-105">
                <ScrollReveal direction="up" duration={0.9}>
                  <h3 className="role text-xl font-semibold pb-2">
                    {exp.role}
                  </h3>
                  <p className="company font-medium pb-1">
                    <span className="font-bold text-lg text-sky-600">
                      {" "}
                      Company :{" "}
                    </span>
                    {exp.company}
                  </p>
                  <p className="duration text-gray-100 pb-1">
                    <span className="font-medium text-lg text-sky-600 mb-1">
                      Project Name :{" "}
                    </span>
                    {exp.projectName}
                  </p>

                  {exp.Duration && (
                    <p className="duration text-gray-100 pb-1">
                      <span className="font-medium text-lg text-sky-600 mb-1">
                        Duration :{" "}
                      </span>
                      {exp.Duration}
                    </p>
                  )}

                  <p className="description text-gray-100 font-medium">
                    <span className="company text-lg font-medium text-sky-600">
                      Project Explanation :{" "}
                    </span>
                    {exp.description}
                  </p>
                </ScrollReveal>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
