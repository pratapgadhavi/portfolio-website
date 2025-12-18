import React from "react";
import "./Footer.css";
import Button, { scrollToSection } from "../../Components/Button/Button";

const Footer = () => {
  return (
    <footer className="footer text-white px-32">
      <div>
        <p className="text-base md:text-lg xl:text-lg text-center pb-1">
          Copyright © 2025 by Pratap <strong>|</strong> ALL RIGHTS ARE RESERVED.
        </p>
        <p className="text-base md:text-lg xl:text-lg">Built with React.js & Tailwind CSS</p>
      </div>
      <div>
        <Button
          onClick={() => scrollToSection("home")}
          iconClass="fa-solid fa-arrow-up"
        />
      </div>
    </footer>
  );
};

export default Footer;
