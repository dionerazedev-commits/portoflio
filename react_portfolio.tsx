import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Download, ChevronRight, Calendar, MessageSquare, FileText, Users, Database, Search, Folder, TrendingUp } from 'lucide-react';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Services', 'Skills', 'Experience', 'Certifications', 'Portfolio', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DRO
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            Dione Raze Oro
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="text-cyan-400 text-lg md:text-xl font-medium">Virtual Assistant</span>
            <span className="text-gray-400">•</span>
            <span className="text-cyan-400 text-lg md:text-xl font-medium">Administrative Support</span>
            <span className="text-gray-400">•</span>
            <span className="text-cyan-400 text-lg md:text-xl font-medium">Customer Service</span>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Helping businesses stay organized, efficient, and digitally empowered.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Download size={20} />
            Download Resume
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a detail-oriented Virtual Assistant with proven experience supporting US-based clients through efficient scheduling, inbox management, customer communication, and data organization. With a strong foundation in Computer Science and hands-on customer service excellence, I bring a unique blend of technical expertise and exceptional communication skills to every project.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My technical proficiency spans across Google Workspace, Microsoft Office, Excel, CRM tools, and modern productivity platforms including Trello and Slack. I consistently maintain a 90%+ customer satisfaction rating, demonstrating my commitment to delivering exceptional service and value.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Currently pursuing a Bachelor of Science in Computer Science, I combine academic knowledge with practical experience to streamline workflows, complete tasks with precision, and drive operational efficiency for clients and organizations I partner with.
          </p>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    { icon: <Users size={32} />, title: 'Administrative Support', desc: 'Comprehensive admin assistance for seamless operations' },
    { icon: <Calendar size={32} />, title: 'Email & Calendar Management', desc: 'Expert scheduling and inbox organization' },
    { icon: <FileText size={32} />, title: 'Data Entry & Documentation', desc: 'Accurate data management and record keeping' },
    { icon: <MessageSquare size={32} />, title: 'Customer Support', desc: 'Professional client communication and assistance' },
    { icon: <Database size={32} />, title: 'Google Workspace Assistance', desc: 'Full suite productivity optimization' },
    { icon: <Search size={32} />, title: 'Research & Reporting', desc: 'Thorough research and detailed summaries' },
    { icon: <Folder size={32} />, title: 'File Organization', desc: 'Systematic digital file management' },
    { icon: <TrendingUp size={32} />, title: 'Digital Marketing Tasks', desc: 'Basic marketing support and content assistance' },
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Administrative Skills',
      skills: ['Calendar Management', 'Email Management', 'Documentation', 'Research', 'Data Entry']
    },
    {
      title: 'Technical Skills',
      skills: ['Google Workspace', 'Microsoft Office', 'Excel', 'CRM Tools', 'Trello', 'Slack', 'Zoom']
    },
    {
      title: 'Core Strengths',
      skills: ['Communication', 'Problem-Solving', 'Time Management', 'Accuracy', 'Customer Support']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: 'General Virtual Assistant',
      company: 'Upwork (US Client)',
      period: 'August 2025 – December 2025',
      points: [
        'Managed 20–30 weekly calendar events with 100% accuracy',
        'Handled 150+ emails weekly, reducing backlog by 40%',
        'Delivered data-based research summaries for business planning',
        'Maintained digital files with consistent formatting',
        '95% on-time task completion rate'
      ]
    },
    {
      title: 'Customer Service Representative',
      company: 'Teleperformance (Comcast)',
      period: 'March 2025 – November 2025',
      points: [
        'Managed 60–80 inbound calls daily',
        'Maintained 90%+ Customer Satisfaction (CSAT) rating',
        'Achieved 85% First Call Resolution (FCR)',
        'Maintained 6-minute Average Handling Time (AHT)',
        'Documented 100% of interactions in CRM systems'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section
const Certifications = () => {
  const certs = [
    { title: 'Microsoft Office Specialist: Excel Associate', issuer: 'Microsoft', year: '2025', icon: '📊' },
    { title: 'Google Data Analytics Professional', issuer: 'Google', year: '2025', icon: '📈' },
    { title: 'Digital Marketing Certification', issuer: 'HubSpot Academy', year: '2025', icon: '📢' },
    { title: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2025', icon: '🔒' },
    { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild', year: '2025', icon: '🤖' }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-cyan-400 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const projects = [
    { title: 'Email Workflow System', desc: 'Streamlined email management process' },
    { title: 'Calendar Organization', desc: 'Executive scheduling system' },
    { title: 'Spreadsheet Analysis', desc: 'Data organization and reporting' },
    { title: 'Research Summary', desc: 'Comprehensive market research' },
    { title: 'Digital Content', desc: 'Marketing materials and assets' },
    { title: 'CRM Documentation', desc: 'Customer interaction tracking' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Portfolio Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <FileText size={48} className="text-cyan-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:dioneoro11@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} className="text-cyan-400" />
                dioneoro11@gmail.com
              </a>
              <a href="tel:+639774414516" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone size={20} className="text-cyan-400" />
                +63 977 441 4516
              </a>
              <a href="https://linkedin.com/in/dione-raze-oro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} className="text-cyan-400" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2025 Dione Raze Oro. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}