import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Bot, 
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Search,
  BarChart,
  MessageSquare,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import SEO from '../components/SEO';
import { GlowingEffect } from '../components/ui/GlowingEffect';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      icon: <Code className="w-12 h-12 text-white" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
        'Responsive Design',
        'Performance Optimization'
      ],
      color: 'from-[#092f73] to-blue-600'
    },
    {
      icon: <Bot className="w-12 h-12 text-white" />,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered tools for your business',
      features: [
        'Chatbot Development',
        'Machine Learning Models',
        'Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that deliver measurable results',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'PPC Campaigns',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      color: 'from-cyan-600 to-blue-500'
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8 text-[#092f73]" />,
      title: 'Brand Strategy',
      description: 'Complete brand identity and positioning strategy'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#092f73]" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: <Search className="w-8 h-8 text-[#092f73]" />,
      title: 'SEO Audits',
      description: 'Comprehensive website SEO analysis and optimization'
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#092f73]" />,
      title: 'Analytics Setup',
      description: 'Data tracking and business intelligence solutions'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#092f73]" />,
      title: 'Consulting',
      description: 'Technology and digital strategy consulting services'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#092f73]" />,
      title: 'Security Audits',
      description: 'Web application security testing and hardening'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and target audience.',
      icon: <Sparkles className="w-8 h-8 text-[#092f73]" />
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Creating a comprehensive plan with clear milestones and deliverables.',
      icon: <Zap className="w-8 h-8 text-[#092f73]" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with cutting-edge technologies and best practices.',
      icon: <Code className="w-8 h-8 text-[#092f73]" />
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploying to production with ongoing support and optimization.',
      icon: <Rocket className="w-8 h-8 text-[#092f73]" />
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services | Web Development, AI Solutions & Digital Marketing"
        description="Maroc Agency offers comprehensive digital services including web development, AI solutions, automation, and digital marketing in Morocco."
        keywords="web development Morocco, AI solutions, digital marketing, SEO, chatbot development, Marrakech"
        ogTitle="Our Services - Maroc Agency"
        ogDescription="Comprehensive digital services for modern businesses"
        ogImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
        canonical="https://marocagency.com/services"
      />

      <article>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
            alt="Our Services"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                What We Do
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Comprehensive Digital Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              From web development to AI automation and digital marketing, we provide end-to-end services to help your business thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Main Services Section with Glowing Effect */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three pillars of expertise to transform your business
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="relative h-full">
                  <div className="relative h-full rounded-2xl border border-gray-200 p-2">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    
                    <div className="relative h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Gradient Header */}
                      <div className={`bg-gradient-to-br ${service.color} p-8`}>
                        <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/90">
                          {service.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="p-8">
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-[#092f73] mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to="/contact"
                          className="mt-6 inline-flex items-center text-[#092f73] font-semibold hover:gap-2 transition-all"
                        >
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section with Glowing Effect */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complementary services to complete your digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="relative h-full">
                  <div className="relative h-full rounded-xl border border-gray-200 p-2">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    
                    <div className="relative h-full bg-white rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="bg-[#092f73]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#092f73] transition-all">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section with Glowing Effect */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers results every time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((phase, index) => (
                <div key={index} className="relative h-full">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#092f73] to-gray-300 z-0"></div>
                  )}
                  
                  <div className="relative h-full rounded-xl border border-gray-200 p-2">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    
                    <div className="relative h-full bg-white rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="bg-[#092f73] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {phase.step}
                      </div>
                      
                      <div className="mb-4">
                        {phase.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-[#092f73] to-[#0a3a8f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Maroc Agency?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-white" />,
                  title: 'Fast Delivery',
                  description: 'We prioritize speed without compromising quality'
                },
                {
                  icon: <Shield className="w-10 h-10 text-white" />,
                  title: 'Proven Expertise',
                  description: 'Years of experience delivering successful projects'
                },
                {
                  icon: <Rocket className="w-10 h-10 text-white" />,
                  title: 'Results-Driven',
                  description: 'Focused on delivering measurable business outcomes'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#092f73] via-blue-600 to-cyan-600">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
              </div>
              
              <div className="relative p-12 md:p-16 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Get Started?
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Let's Build Something Amazing
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your project and see how we can help transform your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#092f73] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  
                  <Link
                    to="/works"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl transition-all hover:bg-white/20"
                  >
                    View Our Work
                  </Link>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Free Consultation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Fast Response
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Expert Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
