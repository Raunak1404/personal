import React from 'react';
import { Download, Award, Briefcase, GraduationCap, Code, Mail, Users, Heart } from 'lucide-react';

// GradientText component
const GradientText = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export default function Resume() {
  const handleDownload = () => {
    // Create a sample PDF download
    const link = document.createElement('a');
    link.href = '/personal/Resume_Update.pdf'; // Replace with actual PDF URL
    link.download = 'raunak_saxena_resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen relative z-10 pt-12 sm:pt-16 md:pt-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <GradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Resume
            </GradientText>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Aerospace Engineer & AI Innovator
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download PDF
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Raunak Saxena</h1>
              <p className="text-lg sm:text-xl text-blue-400 mb-4">Aerospace Engineer & AI Innovator</p>
              <div className="flex justify-center items-center gap-4 sm:gap-6 text-gray-300 flex-wrap text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="break-all">raunak003@e.ntu.edu.sg</span>
                </div>
                <div>Singapore</div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Education</h2>
                <div className="h-1 bg-blue-400 flex-1 rounded"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Bachelor of Engineering in Aerospace Engineering</h3>
                    <span className="text-blue-400 font-medium text-sm sm:text-base flex-shrink-0">Aug 2023 - May 2027</span>
                  </div>
                  <p className="text-gray-300 mb-3 font-medium">Nanyang Technological University, Singapore</p>
                  <p className="text-gray-400 mb-3 text-sm sm:text-base"><span className="text-purple-400 font-medium">Minor:</span> Computer Science and Data Analytics</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Relevant Coursework:</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Thermodynamics, Dynamics, Mechanics of Materials, Aircraft Structures, Flight Performance, 
                      Engineering Graphics, Control Theory, Software Engineering, Object Oriented Programming, 
                      Data Structures and Algorithms, Data Science and Artificial Intelligence
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Indian Society', 'Google Developer Student Clubs', 'Mechanical and Aerospace Club', 'Welfare Services Club'].map((activity) => (
                        <span key={activity} className="px-2 sm:px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs sm:text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Experience</h2>
                <div className="h-1 bg-blue-400 flex-1 rounded"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">AI Engineer Intern</h3>
                    <span className="text-blue-400 font-medium text-sm sm:text-base flex-shrink-0">May 2025 - July 2025</span>
                  </div>
                  <p className="text-gray-300 mb-3">Asiatel - Singapore</p>
                  <div className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    <p>
                      Working on the development of a first-of-its-kind AI system for Changi Airport that translates ICAO aviation codes—such as METAR, TAF, and SIGMET—into phonetic English for automated broadcasting over aviation radio channels. This involves applying Transformer-based models to decode and semantically interpret structured aviation weather reports, while also integrating the system into air traffic control management workflows. The project aims to enhance clarity and accessibility in real-time communication between air traffic services and flight crews, contributing to operational efficiency and aviation safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Key Projects</h2>
                <div className="h-1 bg-blue-400 flex-1 rounded"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">OrbitWise</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Sept 2024 - Nov 2024</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">Personal Project</p>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Developed machine learning-powered tool for predicting exoplanetary orbital periods using Linear Regression, Decision Trees, Random Forests, Gradient Boosting, and Stacking Ensemble</li>
                    <li>• Designed for astronomical research, offering scalable and efficient approach to analyzing exoplanet orbits</li>
                    <li>• Aids in identification of Earth-like planets for space research applications</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">MediMap+</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Sept 2024 - Dec 2024</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">Personal Project</p>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Developed all-in-one healthcare platform to improve accessibility and support health and wellness in Singapore</li>
                    <li>• Integrated smart hospital locator with customizable filters, educational resources on First Aid</li>
                    <li>• Built appointment booking system for seamless online and offline scheduling</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">WaryPotter</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Jan 2025 - May 2025</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">Team Leader - 9-member group</p>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Led development of revolutionary real-time road safety ecosystem for pothole detection and cyclist alerts</li>
                    <li>• Oversaw integration of Raspberry Pi, Pi Camera, LiDAR, GPS, and vibration motor for comprehensive solution</li>
                    <li>• Trained custom YOLO model for pothole detection with team learning neural networks from scratch</li>
                    <li>• Combined hardware, AI, and user safety to deliver smart, scalable solution for urban mobility</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">CodoSphere</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">May 2025 - Aug 2025</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">Personal Project</p>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Developed innovative coding platform to revolutionize technical interview preparation and job placement in FAANG companies</li>
                    <li>• Created comprehensive collection of coding problems, study modules, and interactive learning features</li>
                    <li>• Implemented 1v1 live coding battles with real-time competitive programming environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership & Volunteering */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Leadership & Volunteering</h2>
                <div className="h-1 bg-blue-400 flex-1 rounded"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">Treasurer, Indian Society</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Sept 2023 - May 2024</span>
                  </div>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Managed financial records ensuring transparency and accountability by tracking incoming and outgoing funds</li>
                    <li>• Secured sponsorships and partnerships with businesses to support club initiatives and events</li>
                    <li>• Collaborated with executive team to develop budgets and plan community-focused activities</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">Financial Controller, NTU Welfare Services Club</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Sept 2024 - Present</span>
                  </div>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Managed club finances maintaining accurate records, overseeing fund management, and ensuring financial accountability</li>
                    <li>• Collaborated with executive team to plan and execute events aligning with club's mission and objectives</li>
                    <li>• Actively participated in volunteer sessions, engaging with physically challenged individuals</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">Subcommittee Member, Mechanical and Aerospace Engineering Club</h3>
                    <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0">Sept 2024 - Present</span>
                  </div>
                  <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <li>• Managed backend operations as Logistics Subcommittee member ensuring smooth execution of school events</li>
                    <li>• Coordinated logistics and event operations, addressing challenges during planning and execution</li>
                    <li>• Collaborated with team to facilitate seamless event management and contribute to successful initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Technical Skills & Certifications</h2>
                <div className="h-1 bg-blue-400 flex-1 rounded"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Programming & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React JS', 'Node JS', 'Python', 'Java', 'C++', 'C', 'Web Development'].map((skill) => (
                      <span key={skill} className="px-2 sm:px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Design & Modeling</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs sm:text-sm">
                      SolidWorks (3D Modelling)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Certifications</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                    <h4 className="text-white font-medium text-sm sm:text-base">Google Prompting Essentials</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Certified by Google</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                    <h4 className="text-white font-medium text-sm sm:text-base">Google Foundations of User Experience Design</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Certified by Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}