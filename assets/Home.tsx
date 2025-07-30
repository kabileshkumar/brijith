import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from '../components/ParticleBackground';
import { useRef, useMemo } from 'react';
import { useSearch } from '@/context/SearchContext';

export default function Home() {
  // Get search query from context
  const { searchQuery } = useSearch();
  
  // Blog and project data with filtering
  const contributionItems = [
    { 
      title: "Uncomplicated Firewall", 
      description: "A guide to understanding and configuring the Uncomplicated Firewall (UFW) for Linux systems.",
      image: "/assets/firewall.jpg" 
    },
    { 
      title: "Dark Web", 
      description: "Understanding the dark web, its infrastructure, and security considerations.",
      image: "/assets/darkweb.jpg" 
    },
    { 
      title: "Docker", 
      description: "Introduction to Docker containerization and its security implications.",
      image: "/assets/docker.webp" 
    }
  ];
  
  // Filter content based on search query
  const filteredContributions = useMemo(() => {
    if (!searchQuery.trim()) return contributionItems;
    return contributionItems.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, contributionItems]);
  return (
    <div>
      {/* Main Intro Section */}
      <main className="intro-main index h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url('/assets/bg1.webp')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
        
        <div className="intro text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Brijith K Biju</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Cybersecurity Analyst | Red Teamer | CTF Player
          </p>
          
          <div className="flex justify-center gap-4 mt-10">
            <Link href="/about">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-purple-500/50 font-medium transform hover:-translate-y-1">
                Learn More
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-purple-500/50 hover:border-purple-400 px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      {/* Global Background Animation Wrapper */}
      <div className="relative bg-[#0a0915]">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        
        <div className="relative z-10">
          {/* About Section */}
          <section className="py-16 bg-transparent relative" id="about">
            <div className="intro-container mx-auto px-4 md:px-8 lg:px-20 py-8 md:py-12 max-w-6xl flex flex-col md:flex-row gap-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="profile-picture flex flex-col items-center"
              >
                <div className="relative group flex justify-center items-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                    <img 
                      src="/assets/profilepic.jpeg" 
                      alt="Brijith K Biju"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="name text-xl font-semibold mt-4 text-white">./brijith-sec</h3>
                <p className="name text-gray-400">aka gr4y</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aboutme md:pl-6 lg:pl-10"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-6 text-white"
                >
                  About Me
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-300 mb-4"
                >
                  I am Brijith K Biju, a dedicated Computer Science Engineer from Kerala, India, with a fervent passion for cybersecurity that began five years ago. My journey has led me to publish research papers, organize engaging Capture The Flag (CTF) competitions, and host impactful cybersecurity events, including a SIEM project Cloud funded by KTU University.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 mb-4"
                >
                  Honored as the best outgoing student at MBCCET, I have conducted workshops at various colleges, empowering countless students within the cybersecurity community.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-gray-300"
                >
                  As a co-founder of the Cyber Arc Community, a non-profit community, I am committed to nurturing aspiring cybersecurity professionals. My expertise encompasses Vulnerability Assessment and Penetration Testing (VAPT), network security, and digital forensics. Beyond my technical pursuits, I am also a proud Kung Fu black belt, reflecting my dedication to discipline and perseverance.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Blogs/Contributions Section */}
          <section className="py-16 bg-transparent relative" id="blogs">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Contributions
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {filteredContributions.length > 0 ? (
                  filteredContributions.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ 
                        x: index === 0 ? -100 : index === 1 ? 0 : 100, 
                        y: index === 1 ? 100 : 0, 
                        opacity: 0 
                      }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15, 
                        delay: index * 0.1 + 0.1 
                      }}
                      className="bg-[#151320] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400 mb-4">
                          {item.description}
                        </p>
                        <Link href="/blogs">
                          <button className="text-blue-400 hover:text-blue-300 cursor-pointer hover:underline">Read more →</button>
                        </Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-20">
                    <p className="text-xl text-gray-400">No contributions found matching "{searchQuery}"</p>
                  </div>
                )}
              </motion.div>
              
              {/* Show More Button */}
              <div className="mt-12 text-center">
                <Link href="/blogs">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-lg font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  >
                    Show More Contributions
                  </motion.button>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section className="py-16 bg-transparent relative" id="projects">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Key Projects
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15, 
                    delay: 0.1
                  }}
                  className="bg-[#151320] rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <i className="fas fa-wifi text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Wifi Hacking Software</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Custom-built tools for WiFi network vulnerability assessment and penetration testing. Developed to identify security weaknesses in wireless networks.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Learn more →</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15, 
                    delay: 0.2
                  }}
                  className="bg-[#151320] rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <i className="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">SIEM in MS Azure</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Implementation of a Security Information and Event Management system in Microsoft Azure cloud platform, providing real-time analysis of security alerts.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Learn more →</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15, 
                    delay: 0.3
                  }}
                  className="bg-[#151320] rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <i className="fas fa-robot text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Pen-test Automation with ML</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Automated penetration testing and vulnerability analysis using machine learning techniques to identify patterns and predict potential security breaches.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Learn more →</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15, 
                    delay: 0.4
                  }}
                  className="bg-[#151320] rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <i className="fas fa-flag text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Hash CTF</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    A Capture the Flag (CTF) platform specifically designed for hash-based challenges, providing educational cybersecurity competitions.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Learn more →</a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-16 bg-transparent relative" id="contact">
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6 text-white"
              >
                Get In Touch
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Interested in cybersecurity consulting, speaking engagements, or collaboration? 
                Feel free to reach out!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/contact">
                  <button className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-lg font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}