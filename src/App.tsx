import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart,
  ChevronUp,
  ExternalLink,
  Calendar,
  Building,
  Zap,
  Code,
  Brain,
  Cpu,
  Shield,
  Target,
  Download,
  Hexagon,
  Triangle,
  Circle
} from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'leadership', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 50;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });

        // Draw node
        ctx.fillStyle = 'rgba(0, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jahid Dewan Resume.pdf';
    link.download = 'Jahid_Dewan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'Selenium WebDriver', icon: Code, level: 90 },
    { name: 'Test Case Design & Execution', icon: Target, level: 95 },
    { name: 'Jira (Bug Tracking & Test Management)', icon: Shield, level: 88 },
    { name: 'Regression & Cross-browser Testing', icon: Zap, level: 92 },
    { name: 'Basic SQL & JavaScript', icon: Brain, level: 85 },
    { name: 'Postman API', icon: Cpu, level: 87 },
    { name: 'Requirement & System Analysis', icon: User, level: 90 },
    { name: 'Agile/Scrum Collaboration', icon: Award, level: 93 }
  ];

  const interests = [
    'Writing',
    'Art', 
    'Travel',
    'Environmental Awareness',
    'Sports'
  ];

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Neural Network Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      />

      {/* Futuristic Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Hexagon className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                JAHID.DEV
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <Triangle className="absolute top-20 left-10 w-6 h-6 text-cyan-400/30 animate-float" />
          <Circle className="absolute top-40 right-20 w-8 h-8 text-blue-400/30 animate-float-delayed" />
          <Hexagon className="absolute bottom-40 left-20 w-10 h-10 text-purple-400/30 animate-float" />
          <Triangle className="absolute bottom-20 right-10 w-4 h-4 text-cyan-400/30 animate-float-delayed" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Glitch Effect Title */}
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight text-white glitch-text">
                    MD JAHID
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      DEWAN
                    </span>
                  </h1>
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-3xl -z-10 animate-pulse" />
                </div>
                
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl text-cyan-300 font-light tracking-wider">
                    <span className="typing-animation">SOFTWARE QA ENGINEER</span>
                    <br />
                    <span className="typing-animation-delayed">& SYSTEM ANALYST</span>
                  </h2>
                </div>
                
                <div className="relative p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
                  <p className="text-xl text-blue-200 italic">
                    "Ensuring Software Quality with Precision and Passion"
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-lg animate-pulse" />
                </div>
              </div>
              
              {/* Contact Info with Holographic Cards */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Nikunjo-2, Dhaka, Bangladesh", color: "cyan" },
                  { icon: Phone, text: "(+880) 1866448054", color: "purple" },
                  { icon: Mail, text: "jahiddewan555@gmail.com", color: "emerald" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-4 group">
                    <div className={`p-3 bg-gradient-to-r from-${item.color}-400/20 to-${item.color}-600/20 rounded-full border border-${item.color}-400/30 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Futuristic Download Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={downloadResume}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-black shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 transform overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">DOWNLOAD NEURAL PROFILE</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 pt-6">
                {[
                  { icon: Github, href: "https://github.com/Jahid-dewan", color: "cyan" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mdjahiddewan/", color: "blue" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-${social.color}-400/30 hover:border-${social.color}-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${social.color}-400/25`}
                  >
                    <social.icon className={`w-6 h-6 text-${social.color}-400 group-hover:text-white transition-colors duration-300`} />
                    <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}-400/0 to-${social.color}-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Holographic Avatar */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50 group-hover:shadow-cyan-400/75 transition-all duration-500 group-hover:scale-105 relative">
                  <img 
                    src="https://i.ibb.co/ynHtFzcq/Chat-GPT-Image-Jun-27-2025-04-33-20-PM.png" 
                    alt="Md Jahid Dewan"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Orbital Rings */}
                <div className="absolute -inset-8 border-2 border-cyan-400/30 rounded-full animate-spin-slow" />
                <div className="absolute -inset-12 border-2 border-purple-400/20 rounded-full animate-spin-reverse" />
                <div className="absolute -inset-16 border border-blue-400/10 rounded-full animate-pulse" />
                
                {/* Floating Data Points */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce flex items-center justify-center">
                  <Code className="w-4 h-4 text-black" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce-delayed flex items-center justify-center">
                  <Target className="w-3 h-3 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full mr-4 border border-cyan-400/30">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NEURAL PROFILE
              </h2>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative bg-gradient-to-br from-gray-800/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-cyan-400/20">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center">
                Results-driven Software Quality Assurance Engineer and System Analyst with over 1 year of experience 
                ensuring the quality, performance, and reliability of web and mobile applications. Proficient in manual 
                and automated testing, Agile collaboration, and system analysis. Passionate about delivering 
                high-quality software solutions that exceed user expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mr-4 border border-purple-400/30">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MISSION LOG
              </h2>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Software Quality Assurance & System Analyst</h3>
                  <div className="flex items-center text-purple-300 mb-3">
                    <Building className="w-5 h-5 mr-2" />
                    <span className="text-lg font-semibold">ConnectAuz PTY LTD</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 bg-gradient-to-r from-purple-400/20 to-pink-400/20 px-4 py-2 rounded-full border border-purple-400/30">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">Oct 2024 – Present</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    "Performed manual & automated testing on web/mobile apps",
                    "Reported bugs in Jira, automated test cases with Selenium"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-gray-200 group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    "Regression, UI/UX, and cross-platform testing",
                    "Agile team collaboration and requirement analysis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-gray-200 group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              NEURAL CAPABILITIES
            </h2>
            <p className="text-xl text-gray-300">Advanced technological proficiencies</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2">
                    <div className="inline-flex p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <p className="font-semibold text-gray-200 group-hover:text-white transition-colors mb-3">
                      {skill.name}
                    </p>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full mr-4 border border-emerald-400/30">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                KNOWLEDGE MATRIX
              </h2>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative bg-gradient-to-br from-gray-800/80 to-emerald-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-emerald-400/20 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Bachelor in Computer Science & Engineering
              </h3>
              <p className="text-xl text-emerald-300 font-semibold mb-4">Primeasia University, Dhaka</p>
              <div className="flex items-center justify-center gap-6 text-gray-300">
                <span className="font-medium text-lg">2023</span>
                <span className="text-2xl">•</span>
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-4 py-2 rounded-full font-bold text-lg">
                  GPA 3.38
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full mr-4 border border-yellow-400/30">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                COMMAND PROTOCOLS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-gradient-to-br from-gray-800/80 to-blue-900/80 backdrop-blur-sm rounded-xl p-8 border border-blue-400/20 group-hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Leadership Protocols
                </h3>
                <div className="space-y-4">
                  {[
                    "Vice President, Computer Club – Primeasia University",
                    "University football team captain"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-gray-200 group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-gradient-to-br from-gray-800/80 to-emerald-900/80 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/20 group-hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mr-3">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  Mission Achievements
                </h3>
                <div className="space-y-4">
                  {[
                    "Organizer of tech & cultural events",
                    "Inter-University coding competition participant"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-gray-200 group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full mr-4 border border-pink-400/30">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                PERSONAL DRIVES
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-gray-800/80 to-pink-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-400/20 group-hover:border-pink-400/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {interest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
              ESTABLISH CONNECTION
            </h2>
            <p className="text-xl text-blue-200 mb-16">
              Ready to collaborate or discuss opportunities? Initialize communication protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Neural Link", value: "jahiddewan555@gmail.com", href: "mailto:jahiddewan555@gmail.com", color: "cyan" },
              { icon: Phone, title: "Voice Channel", value: "(+880) 1866448054", href: "tel:+8801866448054", color: "purple" },
              { icon: MapPin, title: "Physical Node", value: "Nikunjo-2, Dhaka", href: "#", color: "emerald" }
            ].map((contact, index) => (
              <div key={index} className="group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-${contact.color}-400 to-${contact.color}-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`} />
                <div className={`relative bg-gradient-to-br from-gray-800/80 to-${contact.color}-900/80 backdrop-blur-sm p-8 rounded-2xl border border-${contact.color}-400/20 group-hover:border-${contact.color}-400/50 transition-all duration-500 hover:-translate-y-2`}>
                  <div className={`bg-gradient-to-r from-${contact.color}-400 to-${contact.color}-600 p-4 rounded-full mb-4 mx-auto w-fit group-hover:scale-110 transition-transform`}>
                    <contact.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white text-lg">{contact.title}</h3>
                  <a href={contact.href} className={`text-${contact.color}-300 hover:text-white transition-colors`}>
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8">
            {[
              { icon: Github, href: "https://github.com/Jahid-dewan", color: "cyan" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mdjahiddewan/", color: "blue" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-${social.color}-400/30 hover:border-${social.color}-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${social.color}-400/25`}
              >
                <social.icon className={`w-8 h-8 text-${social.color}-400 group-hover:text-white transition-colors duration-300`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}-400/0 to-${social.color}-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 to-black py-12 border-t border-cyan-400/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-gray-300 text-lg">© 2025 Md Jahid Dewan. All neural pathways reserved.</p>
          <p className="text-sm text-gray-400">
            Engineered with quantum precision for optimal user experience.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group relative p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-black" />
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-delayed {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
          90% { transform: translateY(-4px); }
        }
        
        .glitch-text {
          position: relative;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -1;
        }
        
        .glitch-text::after {
          animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
          color: #ff00ff;
          z-index: -2;
        }
        
        @keyframes glitch-anim-1 {
          0% { clip: rect(42px, 9999px, 44px, 0); }
          5% { clip: rect(12px, 9999px, 59px, 0); }
          10% { clip: rect(48px, 9999px, 29px, 0); }
          15% { clip: rect(42px, 9999px, 73px, 0); }
          20% { clip: rect(63px, 9999px, 27px, 0); }
          25% { clip: rect(34px, 9999px, 55px, 0); }
          30% { clip: rect(86px, 9999px, 73px, 0); }
          35% { clip: rect(20px, 9999px, 20px, 0); }
          40% { clip: rect(26px, 9999px, 60px, 0); }
          45% { clip: rect(25px, 9999px, 66px, 0); }
          50% { clip: rect(57px, 9999px, 98px, 0); }
          55% { clip: rect(5px, 9999px, 46px, 0); }
          60% { clip: rect(82px, 9999px, 31px, 0); }
          65% { clip: rect(54px, 9999px, 27px, 0); }
          70% { clip: rect(28px, 9999px, 99px, 0); }
          75% { clip: rect(45px, 9999px, 69px, 0); }
          80% { clip: rect(23px, 9999px, 85px, 0); }
          85% { clip: rect(54px, 9999px, 84px, 0); }
          90% { clip: rect(45px, 9999px, 47px, 0); }
          95% { clip: rect(37px, 9999px, 20px, 0); }
          100% { clip: rect(4px, 9999px, 91px, 0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          5% { clip: rect(52px, 9999px, 74px, 0); }
          10% { clip: rect(79px, 9999px, 85px, 0); }
          15% { clip: rect(75px, 9999px, 5px, 0); }
          20% { clip: rect(67px, 9999px, 61px, 0); }
          25% { clip: rect(14px, 9999px, 79px, 0); }
          30% { clip: rect(1px, 9999px, 66px, 0); }
          35% { clip: rect(86px, 9999px, 30px, 0); }
          40% { clip: rect(23px, 9999px, 98px, 0); }
          45% { clip: rect(85px, 9999px, 72px, 0); }
          50% { clip: rect(71px, 9999px, 75px, 0); }
          55% { clip: rect(2px, 9999px, 48px, 0); }
          60% { clip: rect(30px, 9999px, 16px, 0); }
          65% { clip: rect(59px, 9999px, 50px, 0); }
          70% { clip: rect(41px, 9999px, 62px, 0); }
          75% { clip: rect(2px, 9999px, 82px, 0); }
          80% { clip: rect(47px, 9999px, 73px, 0); }
          85% { clip: rect(3px, 9999px, 27px, 0); }
          90% { clip: rect(26px, 9999px, 55px, 0); }
          95% { clip: rect(42px, 9999px, 97px, 0); }
          100% { clip: rect(38px, 9999px, 49px, 0); }
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 0.15em solid #00ffff;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        .typing-animation-delayed {
          overflow: hidden;
          border-right: 0.15em solid #00ffff;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(40, end) 1s, blink-caret 0.75s step-end infinite 1s;
          animation-fill-mode: both;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #00ffff; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-delayed {
          animation: bounce-delayed 2s infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default App;