import ProjectCard from "../../Components/ProjectsCard/ProjectsCard";
import "./projects.css";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "Computer E-Commerce Website",
      description:
        "Modern and fully responsive computer shop e-commerce website developed with React and Tailwind CSS.",
      live: "https://computer-shop-project.netlify.app/",
      code: "https://github.com/pratapgadhavi/Computer-shop-Ecommerce-website",
    },
    {
      title: "Omega Medical demo website",
      description:
        "Omega Medical demo website designed and developed with HTML, CSS, Bootstrap, and JavaScript and responsive medical UI.",
      live: "https://omega-medical-project.netlify.app/",
      code: "https://github.com/pratapgadhavi",
    },
    {
      title: "2nd portfolio",
      description:
        "Personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and experience.",
      live: "https://pratap-portfolio-website.netlify.app/  ",
      code: "https://github.com/pratapgadhavi",
    },
    {
      title: "Decorait Trade Website",
      description:
        "Decorative trade website designed and developed using HTML, CSS, and Bootstrap with a responsive layout.",
      live: "https://decorai-trade-website.netlify.app/",
      code: "https://github.com/pratapgadhavi",
    },
    {
      title: "Ecommerce Website Demo",
      description:
        "Demo e-commerce website developed using HTML, CSS, and JavaScript with basic shopping features.",
      live: "https://ecommerce-website-demo-2025.netlify.app/",
      code: "https://github.com/pratapgadhavi",
    },
    {
      title: "Todo App",
      description:
        "Professional Todo app for manage works build in HTML, CSS, javascript, fully responsive.",
      live: "https://todo-app-test-demo.netlify.app/",
      code: "https://github.com/pratapgadhavi",
    },
  ];

  return (
    <section id="projects" className="projects-section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <ScrollReveal direction="up" duration={1.2} delay={0.2}>
            <h2 className="text-5xl inline-block font-bold text-white mb-3">
              Featured{" "}
              <span className="text-transparent bg-clip-text from-blue-600 bg-gradient-to-r to-purple-600">
                Projects
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
