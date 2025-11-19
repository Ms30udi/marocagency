import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Lightbulb, 
  Handshake, 
  Target,
  Code,
  Bot,
  TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="About Maroc Agency | AI & Web Development Experts in Morocco"
        description="Meet the team behind Maroc Agency. Founded in Marrakech, Morocco, we specialize in AI solutions, web development, and digital marketing."
        keywords="Maroc Agency, Morocco web development, Marrakech digital agency, AI solutions Morocco"
        ogTitle="About Maroc Agency"
        ogDescription="Leading AI and web development agency in Morocco"
        ogImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        canonical="https://marocagency.com/about"
      />

      <article>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="About Maroc Agency Team"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Building the Future of Digital Innovation in Morocco
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A passionate team of experts dedicated to transforming businesses through AI, web development, and digital marketing solutions.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-6">
                  Our Story
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-gray-900">Maroc Agency</strong> is a Moroccan digital agency based in the vibrant city of <strong className="text-[#092f73]">Marrakech, Morocco</strong>. Founded in <strong className="text-gray-900">October 2025</strong>, our journey began with a shared vision among three friends who are passionate about technology and innovation.
                  </p>
                  
                  <p className="text-lg">
                    Our founding team brings together expertise in <strong className="text-[#092f73]">web development</strong>, <strong className="text-[#092f73]">digital marketing</strong>, and <strong className="text-[#092f73]">AI solutions</strong>. We recognized the growing need for businesses in Morocco and beyond to embrace digital transformation and leverage cutting-edge technologies.
                  </p>
                  
                  <p className="text-lg">
                    What started as a small team of three has evolved into a full-service digital agency specializing in:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      'Custom Web Development & Design',
                      'AI Solutions & Automation',
                      'Digital Marketing & SEO',
                      'E-commerce Solutions',
                      'Business Process Automation',
                      'Brand Strategy & Development'
                    ].map((service, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-[#092f73] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-lg">
                    We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that drive real business results. Our approach combines technical excellence with creative innovation to help businesses thrive in the digital age.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#092f73] text-white font-bold rounded-lg hover:bg-[#0a3a8f] transition-all hover:scale-105"
                  >
                    Work With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/works"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#092f73] text-[#092f73] font-bold rounded-lg hover:bg-[#092f73]/10 transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Maroc Agency Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 border-t-4 border-[#092f73]">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-6 h-6 text-[#092f73] mr-2" />
                  </div>
                  <div className="text-4xl font-bold text-[#092f73] mb-1">2025</div>
                  <div className="text-sm text-gray-600 font-semibold">Founded in October</div>
                </div>
                
                {/* Floating Location Card */}
                <div className="absolute -top-8 -right-8 bg-[#092f73] rounded-xl shadow-2xl p-6">
                  <div className="flex items-center text-white">
                    <MapPin className="w-8 h-8 mr-3" />
                    <div>
                      <div className="font-bold">Marrakech</div>
                      <div className="text-sm text-blue-100">Morocco</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-12 h-12 text-[#092f73]" />,
                  title: 'Innovation First',
                  description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.'
                },
                {
                  icon: <Handshake className="w-12 h-12 text-[#092f73]" />,
                  title: 'Client Partnership',
                  description: 'We build lasting relationships with our clients, understanding their goals and working together to achieve exceptional results.'
                },
                {
                  icon: <Target className="w-12 h-12 text-[#092f73]" />,
                  title: 'Quality Excellence',
                  description: 'We never compromise on quality. Every project receives our full attention and commitment to deliver the best possible outcome.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#092f73]"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three core pillars of excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Web Development',
                  icon: <Code className="w-12 h-12 text-[#092f73]" />,
                  skills: ['React & Next.js', 'Node.js & APIs', 'E-commerce Platforms', 'Progressive Web Apps', 'Responsive Design']
                },
                {
                  title: 'AI Solutions',
                  icon: <Bot className="w-12 h-12 text-[#092f73]" />,
                  skills: ['Machine Learning', 'Chatbot Development', 'Process Automation', 'Predictive Analytics', 'Natural Language Processing']
                },
                {
                  title: 'Digital Marketing',
                  icon: <TrendingUp className="w-12 h-12 text-[#092f73]" />,
                  skills: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics & Reporting']
                }
              ].map((expertise, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-[#092f73] transition-all"
                >
                  <div className="mb-4">{expertise.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{expertise.title}</h3>
                  <ul className="space-y-3">
                    {expertise.skills.map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#092f73] rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#092f73] to-[#0a3a8f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '3', label: 'Core Team Members' },
                { number: '2025', label: 'Year Founded' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our expertise in web development, AI solutions, and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#092f73] text-white font-bold rounded-lg hover:bg-[#0a3a8f] transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#092f73] text-[#092f73] font-bold rounded-lg hover:bg-[#092f73]/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
