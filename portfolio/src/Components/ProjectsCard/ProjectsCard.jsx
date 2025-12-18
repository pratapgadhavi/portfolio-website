import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border-2 hover:scale-95 border-blue-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>

      <p className="text-white mb-4">{project.description}</p>

      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          className="px-4 py-3 to-purple-600 from-blue-600 bg-gradient-to-r text-white rounded-lg text-base font-semibold transition"
        >
          <i className="ri-share-box-line"></i> Live Demo
        </a>

        <a
          href={project.code}
          target="_blank"
          className="px-4 py-3 border font-semibold border-indigo-600 text-indigo-600 rounded-lg text-base hover:from-blue-600 hover:bg-gradient-to-r hover:to-purple-600 hover:text-white transition"
        >
          <i className="ri-github-line"></i> Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
