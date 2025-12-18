import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          const scrollPos = window.scrollY;
          if (scrollPos >= top && scrollPos < bottom) {
            current = item.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <header className="text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-3xl font-bold">
          Port<span className="span">folio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:space-x-5 xl:space-x-7 a">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors duration-300 ${
                active === item.id ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="ri-menu-3-fill menu-icon"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-gray-800 transition-transform duration-500 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <i className="ri-close-line close-btn active:!text-white"></i>
          </button>
        </div>
        <nav className="flex flex-col px-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className={`transition-colors duration-300 ${
                active === item.id ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
