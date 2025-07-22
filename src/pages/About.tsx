import React from 'react';
import GradientText from '../components/GradientText';
import PhotoOrb from '../components/PhotoOrb';
import { Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen relative z-10 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <GradientText className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </GradientText>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Exploring the cosmos through aerospace engineering and technological innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Photo with Orb Animation - Centered Vertically */}
            <div className="lg:col-span-2 relative group flex justify-center">
              <PhotoOrb 
                imageUrl="/IMG_1816.JPG"
                alt="Raunak Saxena"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
              />
            </div>

            {/* About Content - Takes up more space with gradient border only */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-stellar-400" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">My Journey</h2>
                </div>
                
                {/* Gradient Border Only Container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-1 bg-gradient-to-br from-stellar-400/50 via-nebula-400/50 to-cosmic-400/50 shadow-xl sm:shadow-2xl animate-gradient bg-[length:200%_200%]">
                  {/* Inner content with solid dark background */}
                  <div className="relative bg-black/90 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 backdrop-blur-md border border-white/10">
                    <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                      <p>
                        Hey there! I'm <span className="text-stellar-400 font-semibold">Raunak Saxena</span>, a sophomore at Nanyang Technological University in Singapore, where I'm pursuing a degree in Aerospace Engineering. My interest in technology and innovation led me to explore aerospace, where I saw endless possibilities for combining cutting-edge tech with the world of flight. What really excites me is how this field allows me to push boundaries and create new possibilities for aviation.
                      </p>
                      
                      <p>
                        Now, here's a twist – while Aerospace has been my passion, I've also been captivated by the tech world, especially the cool combo of <span className="text-nebula-400 font-semibold">Aerospace and Computer Science</span>. I believe this fusion holds massive potential to revolutionize the aviation industry. So, instead of choosing one, I'm diving into both – exploring how AI and Aerospace can work together to create cutting-edge tech that could shape the future of aviation and even the cosmos!
                      </p>
                      
                      <p>
                        A little about my background: I'm from <span className="text-cosmic-400 font-semibold">Prayagraj, Uttar Pradesh</span>, and I did my schooling at St Joseph's College in Prayagraj. Fun fact – part of my schooling was in Goa, right by the beach (pretty awesome, right?).
                      </p>
                      
                      <p>
                        Funny story – I always dreamed of being a computer science student and even applied to NTU and NUS for it. But fate had other plans, and I ended up in Aerospace Engineering. At first, I thought, "Well, maybe this isn't what I imagined," but now, I'm totally excited. I've realized there's so much to be done when you combine Aerospace with CS and AI. This is my mission: <span className="text-stellar-400 font-semibold">to push the boundaries of what's possible and make a meaningful impact in the world of aviation and beyond</span>.
                      </p>
                    </div>
                    
                    {/* Decorative elements - Responsive positioning */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 sm:w-3 h-2 sm:h-3 bg-stellar-400 rounded-full animate-pulse shadow-lg shadow-stellar-400/50"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-2 sm:w-3 h-2 sm:h-3 bg-nebula-400 rounded-full animate-pulse shadow-lg shadow-nebula-400/50"></div>
                    <div className="absolute top-1/3 right-4 sm:right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cosmic-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 left-4 sm:left-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-stellar-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Aspirations with Gradient Border Only */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="text-center mb-8 sm:mb-12">
              <GradientText className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
                Future Aspirations
              </GradientText>
            </div>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-1 bg-gradient-to-br from-stellar-400/40 via-nebula-400/40 to-cosmic-400/40 shadow-xl animate-gradient bg-[length:200%_200%]">
              <div className="relative bg-black/85 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 backdrop-blur-md border border-white/10">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-6xl mx-auto">
                  My ultimate goal is to bridge the gap between aerospace engineering and artificial intelligence, creating intelligent systems that will revolutionize how we design, operate, and navigate aircraft and spacecraft. I envision developing AI-powered flight control systems, autonomous aerospace vehicles, and smart mission planning algorithms that will make space exploration more efficient and accessible. The intersection of these fields holds the key to unlocking humanity's next giant leap into the cosmos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}