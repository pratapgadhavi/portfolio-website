import React, { useState, useEffect } from "react";
import "./Home.css";
import Button, {
  SocialBtn,
  scrollToSection,
} from "../../Components/Button/Button";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const Home = ({ text = "Front-End Developer", speed = 150, pause = 1000 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting) {
        // Typing
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // Deleting
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, index, deleting, text, speed, pause]);

  return (
    <section
      id="home"
      className="hero-section relative bg-cover bg-center min-h-[90vh] md:min-h-96 flex items-center text-white"
    >
      <div className="container mx-auto px-5 lg:px-12">
        <div className="max-w-2xl">
          {/* Heading */}
          <ScrollReveal direction="down" duration={1.2} delay={0.2}>
            <h1 className="hero-heading text-4xl md:text-6xl font-extrabold pb-4">
              Hello
              <span className="hand inline-block origin-[70%_70%]">👋</span>,
              I'm <span>Pratap</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={0.9}>
            <h2
              className="typewriter outline-text
                       font-bold mt-2 sm:mt-0"
            >
              <strong className="text-white text-2xl md:text-4xl lg:text-5xl ">
                I'm{" "}
              </strong>{" "}
              <span className="font-extrabold text-2xl md:text-4xl lg:text-5xl ">
                {displayed}
              </span>
            </h2>

            {/* Paragraph */}
            <p className="desc my-7 text-gray-200 font-semibold text-justify center-text tracking-tight md:tracking-normal text-lg leading-tight">
              A passionate Front-End Developer with a keen eye for design and a
              love for creating seamless user experiences. I have over 10 months
              of freelancing Experience and 3 months in a Company, developing
              responsive and dynamic web applications. I specialize in HTML,
              CSS, JavaScript, and frameworks like Angular and Library like
              React. I thrive in collaborative environments and am always eager
              to learn the latest industry trends and technologies.
            </p>

            {/* Button */}

            <Button
              onClick={() => scrollToSection("contact")}
              text="Let's Talk"
            />

            {/* Contact Info */}
            <div className="mt-6">
              <p className="font-semibold text-cyan-400">
                Mobile No: <span className="text-white">+91 7990140220</span>
              </p>
              <p className="font-semibold text-cyan-400">
                Gmail ID:{" "}
                <span className="text-white">pratapluna20@gmail.com</span>
              </p>
            </div>

            {/* Social Icons */}

            <div className="mt-6 flex space-x-4 text-cyan-400 text-2xl">
              <SocialBtn IconUrl="fas fa-phone" href="tel:+917990140220" />
              <SocialBtn
                IconUrl="fas fa-envelope"
                href="mailto:pratapluna20@gmail.com"
              />
              <SocialBtn
                IconUrl="fab fa-linkedin"
                href="https://www.linkedin.com/in/pratapgadhavi"
              />
              <SocialBtn
                IconUrl="fab fa-github"
                href="https://github.com/pratapgadhavi"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Home;
