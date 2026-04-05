import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "🤖 Real-Time ASL Recognition System",
    desc: "Developed a real-time American Sign Language (ASL) recognition system using YOLOv8 and PyTorch for accurate hand gesture detection, optimized for low-latency inference.",
    ss: "/ASL.png",
    tech: ["YOLOv8", "PyTorch", "OpenCV", "Python"],
    live: "#",
    code: "https://github.com/Vivank411"
  },
  {
    title: "💼 Portfolio Website",
    desc: "Modern portfolio built with React + Framer Motion with smooth animations and clean UI.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "#",
    code: "https://github.com/Vivank411",
  },
  {
  title: "🎙️ Voice Conversion Model",
  desc: "Built a neural voice conversion model using the VITS architecture to transform speaker voice characteristics, with audio preprocessing and feature extraction handled using Librosa.",
  ss: "/Voice Conversion.png",
  tech: ["PyTorch", "Librosa", "VITS", "Python"],
  live: "#",
  code: "https://github.com/Vivank411"
  },

  {
  title: "🧠 Object Detection System",
  desc: "Developed an object detection system using YOLOv5 and OpenCV for real-time image and video analysis, and deployed the model via a Flask-based REST API with Dockerized packaging.",
  ss: "/Object Detection System.png",
  tech: ["YOLOv5", "PyTorch", "OpenCV", "Flask", "Docker"],
  live: "#",
  code: "https://github.com/Vivank411"
  },
  {
  title: "🏥 AI-Driven Rural Healthcare Platform",
  desc: "Developed a telemedicine platform enabling real-time video consultations with secure patient records and appointment management, backed by scalable REST APIs and containerized services.",
  ss: "/AI-Driven Rural Healthcare Platform.png",
  tech: ["React Native", "FastAPI", "PostgreSQL", "Docker", "WebRTC", "LLM"],
  live: "#",
  code: "https://github.com/Vivank411"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
