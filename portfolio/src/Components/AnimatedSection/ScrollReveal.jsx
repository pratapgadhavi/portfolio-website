import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const ScrollReveal = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
}) => {
  const [active, setActive] = useState(false);

  const { ref } = useInView({
    threshold: 0.2,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) {
        setActive(true); 
      } else {
        setActive(false);
      }
    },
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
