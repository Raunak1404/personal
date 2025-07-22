import React, { useEffect, useRef } from 'react';
import GradientText from '../components/GradientText';
import { Calendar, ExternalLink, Package, Satellite, Heart, Cpu, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Food Delivery System",
    date: "Jan 2024 - Apr 2024",
    description: "This was my first-ever project when I joined NTU, and I was super pumped to dive into it – especially since it was in Java! I had all sorts of cool ideas in mind, ready to build an awesome food delivery app with a smooth, user-friendly experience. But, as with all great stories, fate had other plans. Somehow, I ended up with the best teammates (yes only I worked) and pushed through this project. Classic way to kick off my journey at NTU, right? This project revolves around JAVA and is strictly designed to obey all the OOP Principles.",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Java", "OOP Design", "Software Architecture", "Backend Development"],
    icon: <Package className="w-6 h-6" />,
    hasLiveDemo: false
  },
  {
    id: 2,
    title: "OrbitWise",
    date: "Sept 2024 - Nov 2024",
    description: "OrbitWise was the project where I really saw the magic happen when you combine Computer Science, AI, and Aerospace. I developed this machine learning-powered tool to predict exoplanetary orbital periods, using models like Linear Regression, Decision Trees, Random Forests, Gradient Boosting, and a Stacking Ensemble. The goal was to provide a scalable and efficient way to analyze exoplanet orbits, helping researchers identify Earth-like planets. This project wasn't just about the tech – it was my first real dive into how AI could push the boundaries of space research, and I had a blast working with my teammates.",
    image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Machine Learning", "Data Science", "Aerospace", "AI"],
    icon: <Satellite className="w-6 h-6" />,
    hasLiveDemo: false,
    imageClass: "object-cover object-center"
  },
  {
    id: 3,
    title: "MediMap+",
    date: "Sept 2024 - Dec 2024",
    description: "MediMap+ has been one of the best experiences so far at NTU. It's a healthcare platform that I along with my team developed to improve accessibility and support health and wellness in Singapore. The project was my first full-stack, fully functional professional project. The website has some pretty cool features, like a smart hospital locator with customizable filters, a resource hub for First Aid education, and an appointment booking system that makes scheduling both online and offline a breeze. Beyond the technical side, I learned a ton about teamwork, managing pressure, and most importantly, how to build a fully functional app from scratch.",
    image: "/Portfolio/MediMap+.png",
    technologies: ["Full-Stack Development", "React", "Node.js", "Healthcare Tech", "Team Collaboration"],
    icon: <Heart className="w-6 h-6" />,
    hasLiveDemo: true,
    liveUrl: "https://subset-of-medimap.vercel.app"
  },
  {
    id: 4,
    title: "WaryPotter",
    date: "Jan 2025 - May 2025",
    description: "WaryPotter has definitely been one of my favorite projects to date – mostly because it's the first time I ventured into building a hardware prototype! But it's not just your average pothole detector; it's part of a revolutionary safety ecosystem. WaryPotter is a small, portable device that can be mounted on your bike. It detects potholes and alerts the cyclist about their presence 15-20 meters in advance, giving them enough time to slow down and avoid accidents. The heart of the device is a Raspberry Pi, which runs a neural network model to identify potholes, confirmed by a LiDAR that measures sudden dips in the road. Leading the team on this was an unforgettable experience.",
    image: "/Portfolio/WaryPotter.jpeg",
    technologies: ["Raspberry Pi", "Neural Networks", "LiDAR", "Hardware Prototyping", "IoT"],
    icon: <Cpu className="w-6 h-6" />,
    hasLiveDemo: false
  },
  {
    id: 5,
    title: "CodoSphere",
    date: "May 2025 - Aug 2025",
    description: "Ever spent hours grinding through coding problems on platforms like LeetCode or Codeforces? CodoSphere is here to change that. Introducing CodoSphere, your one-stop platform for everything you need to crack those tough tech interviews and land your dream job in the big leagues. CodoSphere is packed with features including a vast collection of famous coding problems, study modules to strengthen your weak spots, and most importantly – a fun and interactive way to learn! Our 1v1 live coding battles are the real highlight, where two users are matched up and given 10 minutes to solve a problem. It's fast-paced, competitive, and actually fun to code!",
    image: "/Portfolio/CodoSphere.png",
    technologies: ["React", "Node.js", "Real-time Systems", "WebSockets", "Competitive Programming"],
    icon: <Code className="w-6 h-6" />,
    hasLiveDemo: true,
    liveUrl: "https://coding-7b4b3.web.app"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = containerRef.current?.querySelectorAll('.project-card');
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative z-10 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <GradientText className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Projects
            </GradientText>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              My journey through software development, AI, aerospace, and hardware innovation
            </p>
          </div>

          <div className="relative" ref={containerRef}>
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-stellar-400 via-nebula-400 to-cosmic-400 opacity-60"></div>
            
            {/* Mobile Timeline Line - Left aligned */}
            <div className="lg:hidden absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-stellar-400 via-nebula-400 to-cosmic-400 opacity-60"></div>

            {/* Projects */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-card opacity-0 transform transition-all duration-700 ${
                    index % 2 === 0 ? 'lg:translate-x-8' : 'lg:-translate-x-8'
                  } translate-y-8 lg:translate-y-0 relative`}
                >
                  {/* Desktop Timeline Node - Center positioned */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-stellar-400 rounded-full border-4 border-gray-900 z-20">
                    <div className="absolute inset-0 bg-stellar-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Mobile Timeline Node - Left aligned */}
                  <div className="lg:hidden absolute left-6 top-8 transform -translate-x-1/2 w-4 h-4 bg-stellar-400 rounded-full border-2 border-gray-900 z-20">
                    <div className="absolute inset-0 bg-stellar-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Mobile Layout - Single Column */}
                  <div className="lg:hidden ml-16 space-y-6">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-stellar-400 to-nebula-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          {project.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-stellar-400 text-sm font-medium mb-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{project.date}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-nebula-600 to-cosmic-600 p-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-48 sm:h-64 rounded-lg sm:rounded-xl transition-transform duration-500 group-hover:scale-105 ${
                            project.imageClass || 'object-cover'
                          }`}
                          onError={(e) => {
                            console.log(`Failed to load image: ${project.image}`);
                            (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800`;
                          }}
                        />
                        <div className="absolute inset-0 bg-stellar-gradient opacity-0 group-hover:opacity-20 rounded-lg sm:rounded-xl transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.hasLiveDemo && (
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-stellar-400 to-nebula-400 rounded-xl text-white text-sm sm:text-base font-medium hover:from-stellar-500 hover:to-nebula-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          View Project
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Desktop Layout - Two Column Grid */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Project Image */}
                    <div className={`relative group ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-nebula-600 to-cosmic-600 p-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-80 rounded-xl transition-transform duration-500 group-hover:scale-105 ${
                            project.imageClass || 'object-cover'
                          }`}
                          onError={(e) => {
                            console.log(`Failed to load image: ${project.image}`);
                            (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800`;
                          }}
                        />
                        <div className="absolute inset-0 bg-stellar-gradient opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-stellar-400 to-nebula-400 rounded-xl flex items-center justify-center">
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-stellar-400 text-sm font-medium">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </div>
                          <h3 className="text-3xl font-bold text-white mt-1">{project.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {project.hasLiveDemo && (
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stellar-400 to-nebula-400 rounded-xl text-white font-medium hover:from-stellar-500 hover:to-nebula-500 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Project
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card.animate-in {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
      `}</style>
    </div>
  );
}