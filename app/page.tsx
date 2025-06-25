"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Brain,
  Database,
  Cloud,
  Award,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML5/CSS3", level: 85 },
    ],
    "AI/ML Frameworks": [
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Keras", level: 80 },
      { name: "OpenCV", level: 75 },
    ],
    "Cloud & Tools": [
      { name: "AWS (EC2, S3)", level: 70 },
      { name: "MySQL/Oracle", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "REST APIs", level: 75 },
    ],
  };

  const projects = [
    {
      title: "Diabetic Retinopathy Detection System",
      description:
        "Deep learning model using CNN architecture achieving 92% classification accuracy on retinal scan images",
      technologies: ["Python", "TensorFlow", "Gradio", "CNN", "OpenCV"],
      highlights: [
        "Architected CNN model with 92% accuracy",
        "Engineered image preprocessing pipeline",
        "Deployed interactive web interface with Gradio",
        "Open-sourced with full documentation",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Car Price Prediction Application",
      description:
        "Web application using machine learning to provide accurate car price estimates",
      technologies: ["Python", "Machine Learning", "HTML", "Scikit-learn"],
      highlights: [
        "Built predictive model for car pricing",
        "Developed user-friendly web interface",
        "Implemented data preprocessing pipeline",
        "Used predefined datasets for training",
      ],
      github: "#",
      demo: "#",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "Hypweb Solutions LLP",
      location: "Remote",
      period: "Jan 2025 – Present",
      responsibilities: [
        "Developing and maintaining full stack applications using Java, Kotlin, and Android Studio",
        "Collaborating with cross-functional teams to design scalable software solutions",
        "Debugging and optimizing backend systems using Java and JDK tools",
        "Participating in agile sprints and contributing to clean, documented codebases",
        "Supporting UI/UX improvements and feature integrations across mobile platforms",
      ],
    },
  ];

  const certifications = [
    {
      title: "BCG X – Data Science Job Simulation",
      issuer: "BCG",
      skills: [
        "Predictive Modeling",
        "Precision/Recall/F1-Score",
        "Data Storytelling",
        "Client Communication",
      ],
    },
    {
      title: "British Airways – Data Science Virtual Experience",
      issuer: "British Airways",
      skills: [
        "Customer Churn Prediction",
        "RFM Segmentation",
        "Dashboard Development",
        "KPI Visualization",
      ],
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      skills: [
        "Data Cleaning",
        "Tableau",
        "SQL Queries",
        "R Programming",
        "Advanced Visualization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              KL | Data Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-400"
                        : "text-slate-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
        </motion.div>

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              K L Charan
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-purple-300 mb-8"
            >
              Full Stack Developer
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
            >
              Computer Science student passionate about building intelligent
              solutions with machine learning and full-stack development
              expertise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center space-x-6 mt-12"
            >
              <a
                href="https://github.com/charan2040"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/klcharan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="mailto:lakshmancharan2040@gmail.com">
                <Mail className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Computer Science student at Malla Reddy
                  College of Engineering & Technology, graduated in June 2025.
                  With a strong foundation in data structures, algorithms, and
                  machine learning, I love creating intelligent solutions that
                  solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently working as a Full Stack Developer Intern at Hypweb
                  Solutions, I'm gaining hands-on experience in building
                  scalable applications using Java, Kotlin, and modern
                  development practices. My expertise spans from deep learning
                  models to full-stack web applications.
                </p>
                <div className="flex items-center space-x-4 text-purple-300">
                  <MapPin className="w-5 h-5" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Full Stack</h3>
                  <p className="text-slate-400 text-sm">
                    Java, Python, Web Development
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">AI/ML</h3>
                  <p className="text-slate-400 text-sm">
                    TensorFlow, CNN, Computer Vision
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Database</h3>
                  <p className="text-slate-400 text-sm">MySQL, Oracle, SQL</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Cloud</h3>
                  <p className="text-slate-400 text-sm">AWS EC2, S3, DevOps</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-center">
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skillList.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className="text-purple-400">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 h-full hover:bg-slate-700/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-4 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <CardTitle className="text-white text-xl">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-purple-300 text-lg font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-300">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-3 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="w-8 h-8 text-purple-400 mt-1" />
                      <div>
                        <CardTitle className="text-white">
                          Bachelor of Technology in Computer Science
                        </CardTitle>
                        <CardDescription className="text-purple-300 text-lg">
                          Malla Reddy College of Engineering & Technology
                        </CardDescription>
                        <p className="text-slate-400 mt-2">Hyderabad, India</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-purple-400 text-purple-400"
                    >
                      Nov 2021 - Jun 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    <strong>Core Competencies:</strong> Data Structures &
                    Algorithms, Machine Learning, Database Management Systems
                    (DBMS), Python (OOPS, Scripting), Java
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="w-8 h-8 text-purple-400 mt-1" />
                      <div>
                        <CardTitle className="text-white">
                          Class XII (Intermediate) – MPC Stream
                        </CardTitle>
                        <CardDescription className="text-purple-300 text-lg">
                          Narayana Junior College
                        </CardDescription>
                        <p className="text-slate-400 mt-2">Vijayawada, India</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-purple-400 text-purple-400"
                    >
                      Jun 2019 - May 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    <strong>Stream:</strong> Mathematics, Physics, Chemistry
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardHeader>
                    <Award className="w-8 h-8 text-purple-400 mb-2" />
                    <CardTitle className="text-white text-lg">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and innovation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a
                  href="mailto:lakshmancharan2040@gmail.com"
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  lakshmancharan2040@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/klcharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  linkedin.com/in/klcharan
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <a
                  href="https://github.com/charan2040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  github.com/charan2040
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                onClick={() =>
                  window.open("mailto:lakshmancharan2040@gmail.com", "_blank")
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Lakshman Charan Teja. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/charan2040"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/klcharan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="mailto:lakshmancharan2040@gmail.com">
                <Mail className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
