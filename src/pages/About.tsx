import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0915] pt-20">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 dark:bg-[#151320] rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
            >
              $~Whoami
            </motion.h1>
            
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:w-1/3"
              >
                <div className="bg-gray-100 dark:bg-[#0d0c14] p-4 rounded-lg shadow-md mb-4">
                  <img 
                    src="/assets/profilepic.jpeg" 
                    alt="Brijith K Biju" 
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-center text-gray-900 dark:text-white">./brijith-sec</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">aka gr4y</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:w-2/3"
              >
                <div className="bg-gray-100 dark:bg-[#0d0c14] p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      I am Brijith K Biju, a dedicated Computer Science Engineer from Kerala, India, with a fervent passion for cybersecurity that began five years ago. My journey has led me to publish research papers, organize engaging Capture The Flag (CTF) competitions, and host impactful cybersecurity events, including a SIEM project Cloud funded by KTU University.
                    </p>
                    <p>
                      Honored as the best outgoing student at MBCCET, I have conducted workshops at various colleges, empowering countless students within the cybersecurity community.
                    </p>
                    <p>
                      As a co-founder of the Cyber Arc Community, a non-profit community, I am committed to nurturing aspiring cybersecurity professionals. My expertise encompasses Vulnerability Assessment and Penetration Testing (VAPT), network security, and digital forensics. Beyond my technical pursuits, I am also a proud Kung Fu black belt, reflecting my dedication to discipline and perseverance. My technical vision fuels my passion for cyber defense and drives my commitment to shaping the future of digital security.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gray-100 dark:bg-[#0d0c14] p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Skills</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Vulnerability Assessment and Penetration Testing (VAPT)</li>
                      <li>Network Security</li>
                      <li>Digital Forensics</li>
                      <li>CTF Competition Development</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-gray-100 dark:bg-[#0d0c14] p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Achievements</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Best outgoing student at MBCCET</li>
                      <li>Published research papers in cybersecurity</li>
                      <li>Co-founder of Cyber Arc Community</li>
                      <li>Kung Fu black belt holder</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
