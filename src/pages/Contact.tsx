import React from 'react';
import GradientText from '../components/GradientText';
import { Mail, Linkedin, Github, Instagram, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen relative z-10 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <GradientText className="text-6xl font-bold mb-6">
              Contact Me
            </GradientText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's connect and explore the possibilities of space and technology together
            </p>
          </div>

          <div className="space-y-12">
            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm always excited to discuss aerospace engineering, AI innovations, space exploration, 
                or any collaborative opportunities. Whether you're interested in my projects, 
                want to share ideas about the future of technology, or discuss potential partnerships, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-stellar-400 to-nebula-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">raunak003@e.ntu.edu.sg</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-stellar-400 to-nebula-400 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Singapore</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Connect on Social Media</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="https://linkedin.com/in/raunak-saxena-283a85213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-gray-400 text-sm">Professional Network</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Raunak1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">GitHub</h4>
                    <p className="text-gray-400 text-sm">Code Repository</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/_.raunak04._?igsh=MTNxdmJnNnAzZzVxaA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">Instagram</h4>
                    <p className="text-gray-400 text-sm">Personal Updates</p>
                  </div>
                </a>

                <a
                  href="mailto:raunak003@e.ntu.edu.sg"
                  className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-stellar-400 to-nebula-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400 text-sm">Direct Contact</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Whether you're working on aerospace innovations, AI projects, or anything in between, 
                I'm always open to discussing new opportunities and exciting challenges.
              </p>
              <a
                href="mailto:raunak003@e.ntu.edu.sg"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-stellar-400 to-nebula-400 rounded-xl text-white font-medium hover:from-stellar-500 hover:to-nebula-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}