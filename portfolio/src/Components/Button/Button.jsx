import React from "react";
import "./Button.css";

const Button = ({ text, iconClass, onClick, type = "button" }) => {
  return (
    <button className="btn-primary" type={type} onClick={onClick}>
      <span>{text}</span>
      {iconClass && <i className={iconClass}></i>}
    </button>
  );
};

export const SocialBtn = ({ IconUrl, href, onClick, radius }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`Social-btn ${radius}`}
    >
      <i className={IconUrl}></i>
    </a>
  );
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default Button;
