import React from 'react';
import { Mail, Phone, Linkedin, Github, Briefcase, Code, GraduationCap, Award, ExternalLink } from 'lucide-react';

// Data strictly synchronized with your polished single-page resume
const resumeData = {
  name: "SEGARI SAMUEL RICKSON",
  email: "segarisamuelrickson@gmail.com",
  phone: "+91 8096721945",
  linkedin: "https://www.linkedin.com/in/samuel-rickson-084874278",
  github: "https://github.com/Samuel27-max",
  summary: "Aspiring Java Developer and MCA student with a solid foundation in Core Java, OOP principles, and hands-on project experience using Spring Boot. Eager to apply academic training and backend development skills to real-world engineering challenges as a Software Developer.",
  technicalSkills: {
    languagesAndCore: ["Java (Advanced)", "SQL", "Python", "JavaScript", "Data Structures & Algorithms (DSA)", "OOP/SOLID"],
    frameworksAndBackend: ["Spring Boot", "Spring MVC", "JDBC", "Servlets", "Hibernate/JPA", "RESTful APIs"],
    toolsAndDatabases: ["Git", "GitHub", "Maven", "Postman", "MySQL", "IntelliJ IDEA", "VS Code"],
    frontendAndGui: ["Java Swing", "ReactJS", "Tailwind CSS", "Bootstrap"]
  },
  experience: [
    {
      title: "Java Backend Developer Intern",
      company: "Vault of Codes",
      location: "Remote",
      duration: "Jun 2025 – Jul 2025",
      description: [
        "Engineered a GUI Library Management System using Java Swing and JDBC, accelerating data retrieval speed by 50%.",
        "Refactored legacy monolithic infrastructure using MVC and DAO design patterns to enforce modular code separation.",
        "Ranked in the top 5% of internal Java backend technical assessments for code quality and algorithmic efficiency."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Agnirva (ISRO)",
      location: "Remote",
      duration: "May 2025 – Jul 2025",
      description: [
        "Integrated external OpenWeather and NASA APIs into JavaScript data handlers to display real-time metrics.",
        "Optimized asynchronous network communications using async/await, dropping endpoint latency by 30%."
      ]
    }
  ],
  projects: [
    {
      name: "EchoPost: AI Driven Post Quantum Secure Messenger & Behavioural Auditor",
      techStack: "Java, Spring Boot, Spring Security, CRYSTALS-Kyber",
      description: "Architected a secure messaging environment integrating key Post-Quantum Cryptography (PQC) validation mechanics. Built an AI behavioral auditor engine assessing biometric keystroke dynamics for continuous multi-user verification.",
      link: "https://github.com/Samuel27-max"
    },
    {
      name: "Enterprise Library Management System",
      techStack: "Java, JDBC, MySQL, Swing API",
      description: "Designed a standalone desktop workflow enforcing reliable CRUD operations and secure database data persistence.",
      link: "https://github.com/Samuel27-max"
    },
    {
      name: "ChefAI India: Personalized Recipe System",
      techStack: "Generative AI & LLMs",
      description: "Developing an intelligent recipe system co-authored to parse user culinary preferences and dietary limits dynamically. (Academic Research Initiative — Paper Under Review)",
      link: "https://github.com/Samuel27-max"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Aurora’s PG College (Affiliated with Osmania University)",
      duration: "2024 – 2026",
      status: "Pursuing",
      location: "Hyderabad, India"
    },
    {
      degree: "Bachelor of Science (B.Sc. – MPC)",
      institution: "Nizam College (Osmania University)",
      duration: "Graduated: 2024",
      details: "Aggregate: 97%",
      location: "Hyderabad, India"
    }
  ],
  honorsLeadership: [
    {
      role: "Outstanding Student Volunteer Award",
      organization: "Computer Society of India (CSI) State Level",
      details: "Recognized at the state level for exceptional leadership and driving student branch technical initiatives."
    },
    {
      role: "President",
      organization: "Computer Society of India (CSI) Student Branch (2025–26)",
      details: "Spearheading core campus tech initiatives, 24-hour hackathons, and technical bootcamps."
    },
    {
      role: "CSI Hyderabad Prize Winner",
      organization: "Technical Presentation",
      details: "Clinched top honors for presenting 'Role of Young Engineers in an AI Driven World'."
    },
    {
      role: "University Gold Medalist",
      organization: "Nizam College",
      details: "Conferred the University Gold Medal in B.Sc. Chemistry for overall top ranking."
    },
    {
      role: "Hackathon Participant",
      organization: "Rapid Technical Prototyping",
      details: "Competed in rapid technical hackathons, collaborating under tight deadlines to prototype scalable software architectures."
    }
  ],
  certificationsCoursework: {
    certifications: ["Oracle AI and Machine Learning Foundations Associate (2024)"],
    coursework: ["Data Structures and Algorithms (DSA)", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
  }
};

// Reusable Section Component with smooth animations
const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8 animate-fade-in-up ${className}`}>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center border-b-2 border-indigo-500 pb-4">
      {title}
    </h2>
    {children}
  </section>
);

// Hero Section Component
const Hero = ({ data }) => (
  <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animated-hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl mb-8 text-center animate-fade-in-down">
    <div className="container mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">{data.name}</h1>
      <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">{data.summary}</p>
      <div className="flex flex-wrap justify-center gap-6 text-base sm:text-lg">
        <a href={`mailto:${data.email}`} className="flex items-center space-x-2 hover:text-indigo-200 transition-transform duration-300 hover:scale-105">
          <Mail size={18} /> <span>{data.email}</span>
        </a>
        <a href={`tel:${data.phone}`} className="flex items-center space-x-2 hover:text-indigo-200 transition-transform duration-300 hover:scale-105">
          <Phone size={18} /> <span>{data.phone}</span>
        </a>
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-indigo-200 transition-transform duration-300 hover:scale-105">
            <Linkedin size={18} /> <span>LinkedIn</span>
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-indigo-200 transition-transform duration-300 hover:scale-105">
            <Github size={18} /> <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  </header>
);

// Skills Section Component
const Skills = ({ data }) => (
  <Section id="skills" title="Technical Skills" className="delay-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(data).map(([category, skills], index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-card-trigger">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center border-b border-gray-200 dark:border-gray-600 pb-2">
            <Code size={18} className="mr-2 text-indigo-500" />
            {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <span className="text-indigo-500 mr-2 font-bold">&bull;</span> {skill}
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
  <Section id="experience" title="Experience" className="delay-200">
    <div className="space-y-8">
      {data.map((job, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-indigo-500 pb-2 last:pb-0 hover-card-trigger p-4 rounded-r-lg">
          <div className="absolute -left-3 top-4 bg-indigo-500 rounded-full p-1.5 shadow-md">
            <Briefcase size={14} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{job.duration} | {job.location}</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1.5 text-sm">
            {job.description.map((point, i) => (
              <li key={i} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

// Projects Section Component
const Projects = ({ data }) => (
  <Section id="projects" title="Projects & Research" className="delay-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((project, index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-card-trigger flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{project.name}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-3">{project.techStack}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-sm font-medium transition-colors duration-300 mt-2">
              View Repository <ExternalLink size={14} className="ml-1" />
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
        <div key={index} className="relative pl-8 border-l-2 border-indigo-500 pb-2 last:pb-0 hover-card-trigger p-4 rounded-r-lg">
          <div className="absolute -left-3 top-4 bg-indigo-500 rounded-full p-1.5 shadow-md">
            <GraduationCap size={14} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{edu.duration} {edu.status && `(${edu.status})`} | {edu.location}</p>
          {edu.details && <p className="text-gray-700 dark:text-gray-300 text-sm font-medium bg-indigo-50 dark:bg-indigo-950/40 inline-block px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900">{edu.details}</p>}
        </div>
      ))}
    </div>
  </Section>
);

// Honors & Leadership Section Component (Includes State-Level Award)
const HonorsLeadership = ({ data }) => (
  <Section id="honors-leadership" title="Honors & Leadership">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {data.map((item, index) => (
        <div key={index} className="flex items-start bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover-card-trigger border-l-4 border-indigo-500">
          <Award size={22} className="mr-3 text-indigo-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{item.role}</h4>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">{item.organization}</p>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// Certifications & Coursework Section Component
const CertificationsCoursework = ({ data }) => (
  <Section id="certifications-coursework" title="Certifications & Coursework">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg hover-card-trigger">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Award size={18} className="mr-2 text-indigo-500" /> Certifications
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {data.certifications.map((cert, index) => (
            <li key={index} className="flex items-center">
              <span className="text-indigo-500 mr-2 font-bold">&bull;</span> {cert}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg hover-card-trigger">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Code size={18} className="mr-2 text-indigo-500" /> Core Coursework
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.coursework.map((course, index) => (
            <span key={index} className="bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 font-medium hover:scale-105 transition-transform duration-200">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 text-center rounded-xl mt-8 shadow-xl">
    <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} SEGARI SAMUEL RICKSON. All rights reserved.</p>
    <p className="text-xs opacity-60 mt-2">Built with React and Tailwind CSS</p>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl space-y-6">
        <Hero data={resumeData} />
        <Skills data={resumeData.technicalSkills} />
        <Experience data={resumeData.experience} />
        <Projects data={resumeData.projects} />
        <Education data={resumeData.education} />
        <HonorsLeadership data={resumeData.honorsLeadership} />
        <CertificationsCoursework data={resumeData.certificationsCoursework} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
