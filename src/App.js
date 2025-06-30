import React from 'react';
import { Mail, Phone, Linkedin, Github, Briefcase, Code, GraduationCap, Award, Heart, Calendar, ExternalLink } from 'lucide-react';

// Data extracted from the resume
const resumeData = {
  name: "SEGARI SAMUEL RICKSON",
  email: "samuelrickson@gmail.com",
  phone: "+91 8096721945",
  linkedin: "https://www.linkedin.com/in/samuel-rickson-084874278", // Placeholder
  github: "https://github.com/Samuel27-max", // Placeholder
  summary: "Java developer with strong knowledge of core Java, Spring Boot, JDBC, and Servlets. Committed to continuous learning and eager to contribute to real-world development projects.",
  technicalSkills: {
    languages: ["Java", "C", "Python", "JavaScript", "HTML", "CSS", "SQL"],
    javaTech: ["OOP", "Collections", "JDBC", "Servlets", "JSP", "Swing", "Serialization"],
    toolsFrameworks: ["Spring", "SpringBoot", "React.JS", "Maven", "Git"],
    otherTech: ["Node.js", "REST APIs", "Testing", "Deployment"]
  },
  experience: [
    {
      title: "Java Developer Intern",
      company: "Vault of Codes",
      location: "Remote",
      duration: "June 2025 - July 2025",
      description: [
        "Developed a Java Swing-based Library Management System with modular architecture.",
        "Built a command-line To-Do List app using core Java and file storage.",
        "Strengthened core Java concepts including OOP and Collections."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Agnirva (ISRO)",
      location: "Remote",
      duration: "May 2025 - July 2025",
      description: [
        "Worked on backend and API integration using Node.js and JavaScript.",
        "Built capstone projects using OpenWeather and NASA APIs."
      ]
    },
    {
      title: "Space Intern",
      company: "Agnirva (ISRO)",
      location: "Remote",
      duration: "April 2025 - May 2025",
      description: [
        "Explored space law, tourism, exploration, and interplanetary topics.",
        "Completed space-related certification and research modules."
      ]
    }
  ],
  projects: [
    {
      name: "Java Library Management System",
      duration: "June 2025 - July 2025",
      description: "GUI-based app using Java Swing with CRUD operations and layered architecture. Data stored using Java Serialization.",
      link: "https://github.com/Samuel27-max/LibraryManagementSystemProject-Repo.git" // Placeholder
    },
    {
      name: "Web-Based Task Manager Tool",
      duration: "May 2025 - July 2025",
      description: "Developed task manager using HTML, Tailwind CSS, JavaScript. Integrated Open Weather API for forecast-based task suggestions.",
      link: "https://github.com/Samuel27-max/Task-Mgmt-Tool.git" // Placeholder
    },
    {
      name: "Java CLI To-Do List App",
      duration: "April 2025 - May 2025",
      description: "Console-based app using core Java and file I/O to manage daily tasks via serialization.",
      link: "https://github.com/Samuel27-max/MiniProjectRepo.git" // Placeholder
    }
  ],
  education: [
    {
      degree: "MCA Master of Computer Applications",
      institution: "Aurora's PG College, Hyderabad (Affiliated to Osmania University)",
      duration: "2024 - 2026",
      status: "Pursuing"
    },
    {
      degree: "B.Sc Mathematics, Physics, Chemistry",
      institution: "Nizam College, Hyderabad",
      duration: "2021 - 2024",
      details: "Percentage: 97%"
    }
  ],
  certificationsAwards: [
    "Oracle Certified AI Foundations Associate (2024)",
    "Gold Medalist B.Sc Chemistry"
  ],
  volunteerExperience: [
    "Organized blood donation drives and taught in NSS village programs.",
    "Attended CSI (Computer Society of India) technical seminars."
  ]
};

// Reusable Section Component
const Section = ({ id, title, children }) => (
  <section id={id} className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center border-b-2 border-indigo-500 pb-4">
      {title}
    </h2>
    {children}
  </section>
);

// Hero Section Component
const Hero = ({ data }) => (
  <header className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg mb-8 text-center">
    <div className="container mx-auto">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 animate-fade-in-down">{data.name}</h1>
      <p className="text-xl sm:text-2xl mb-8 opacity-90 animate-fade-in-up">{data.summary}</p>
      <div className="flex flex-wrap justify-center gap-6 text-lg">
        <a href={`mailto:${data.email}`} className="flex items-center space-x-2 hover:text-indigo-200 transition-colors duration-300">
          <Mail size={20} /> <span>{data.email}</span>
        </a>
        <a href={`tel:${data.phone}`} className="flex items-center space-x-2 hover:text-indigo-200 transition-colors duration-300">
          <Phone size={20} /> <span>{data.phone}</span>
        </a>
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-indigo-200 transition-colors duration-300">
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-indigo-200 transition-colors duration-300">
            <Github size={20} /> <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  </header>
);

// Skills Section Component
const Skills = ({ data }) => (
  <Section id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(data).map(([category, skills], index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Code size={20} className="mr-2 text-indigo-500" />
            {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <span className="text-indigo-500 mr-2">&bull;</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

// Experience Section Component
const Experience = ({ data }) => (
  <Section id="experience" title="Experience">
    <div className="space-y-8">
      {data.map((job, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-indigo-500 pb-8 last:pb-0">
          <div className="absolute -left-3 top-0 bg-indigo-500 rounded-full p-1">
            <Briefcase size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company} - {job.location}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{job.duration}</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {job.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

// Projects Section Component
const Projects = ({ data }) => (
  <Section id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((project, index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex items-center">
              <Calendar size={16} className="mr-2 text-indigo-500" /> {project.duration}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 font-medium transition-colors duration-300">
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      ))}
    </div>
  </Section>
);

// Education Section Component
const Education = ({ data }) => (
  <Section id="education" title="Education">
    <div className="space-y-8">
      {data.map((edu, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-indigo-500 pb-8 last:pb-0">
          <div className="absolute -left-3 top-0 bg-indigo-500 rounded-full p-1">
            <GraduationCap size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 flex items-center">
            <Calendar size={16} className="mr-2 text-indigo-500" /> {edu.duration} {edu.status && `(${edu.status})`}
          </p>
          {edu.details && <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>}
        </div>
      ))}
    </div>
  </Section>
);

// Certifications & Awards Section Component
const CertificationsAwards = ({ data }) => (
  <Section id="certifications-awards" title="Certifications & Awards">
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
      {data.map((item, index) => (
        <li key={index} className="flex items-start">
          <Award size={20} className="mr-3 text-indigo-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Section>
);

// Volunteer Experience Section Component
const VolunteerExperience = ({ data }) => (
  <Section id="volunteer-experience" title="Volunteer Experience">
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
      {data.map((item, index) => (
        <li key={index} className="flex items-start">
          <Heart size={20} className="mr-3 text-indigo-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 text-center rounded-xl mt-8">
    <p>&copy; {new Date().getFullYear()} SEGARI SAMUEL RICKSON. All rights reserved.</p>
    <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl space-y-8">
        <Hero data={resumeData} />
        <Skills data={resumeData.technicalSkills} />
        <Experience data={resumeData.experience} />
        <Projects data={resumeData.projects} />
        <Education data={resumeData.education} />
        <CertificationsAwards data={resumeData.certificationsAwards} />
        <VolunteerExperience data={resumeData.volunteerExperience} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
