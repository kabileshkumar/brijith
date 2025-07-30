import { useMemo } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { useSearch } from '@/context/SearchContext';

// Blog post type
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Blogs() {
  // Get search query from context
  const { searchQuery } = useSearch();
  
  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Uncomplicated Firewall",
      description: "A guide to understanding and configuring the Uncomplicated Firewall (UFW) for Linux systems.",
      image: "/assets/firewall.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Path Traversal Demo",
      description: "A practical demonstration of path traversal vulnerabilities and how to prevent them.",
      image: "/assets/pathtraversal.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Docker",
      description: "Introduction to Docker containerization and its security implications.",
      image: "/assets/resources.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Dark Web",
      description: "Understanding the dark web, its infrastructure, and security considerations.",
      image: "/assets/pentestml.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Cryptocurrency",
      description: "A deep dive into cryptocurrency security, blockchain technology, and potential vulnerabilities.",
      image: "/assets/cryptocurrency.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "Malware Analysis",
      description: "Techniques and tools for analyzing malware and understanding their behavior.",
      image: "/assets/malware.jpg",
      link: "#"
    }
  ];
  
  // Filter blog posts based on search query
  const filteredBlogPosts = useMemo(() => {
    if (!searchQuery.trim()) return blogPosts;
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, blogPosts]);

  // Dummy project data
  const projects = [
    {
      id: 1,
      title: "Wifi Hacking Software",
      description: "Custom-built tools for WiFi network vulnerability assessment and penetration testing.",
      link: "#"
    },
    {
      id: 2,
      title: "SIEM in MS Azure",
      description: "Implementation of a Security Information and Event Management system in Microsoft Azure cloud platform.",
      link: "#"
    },
    {
      id: 3,
      title: "Pen-test Automation with ML",
      description: "Automated penetration testing and vulnerability analysis using machine learning techniques.",
      link: "#"
    },
    {
      id: 4,
      title: "Hash CTF",
      description: "A Capture the Flag (CTF) platform specifically designed for hash-based challenges.",
      link: "#"
    }
  ];
  
  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, projects]);

  return (
    <div className="relative min-h-screen bg-[#0a0915]">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Contributions</h1>
          <p className="text-gray-400 mt-2">My blog posts and articles about cybersecurity topics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogPosts.length > 0 ? (
            filteredBlogPosts.map((post) => (
              <div key={post.id} className="bg-[#151320] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <a 
                    href={post.link} 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded hover:shadow-xl transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-xl text-gray-400">No blog posts found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        {searchQuery.trim() === '' || filteredProjects.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-[#151320] rounded-lg overflow-hidden shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-end">
                    <a href={project.link} className="text-purple-400 hover:text-indigo-300 hover:underline">Learn more →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}