import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';

export default function Home() {
  const blogs = [
    {
      title: 'The Future of AI in Business: Trends for 2025',
      excerpt: 'Discover how artificial intelligence is reshaping industries and what it means for your business strategy in the coming years. Learn about the latest AI trends and implementations.',
      date: 'Nov 15, 2025',
      category: 'AI Trends',
      slug: 'future-of-ai-in-business-2025',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      readTime: 5
    },
    {
      title: 'How Machine Learning Can Boost Your Marketing ROI',
      excerpt: 'Learn practical ways to leverage machine learning algorithms to optimize your marketing campaigns and increase conversions with data-driven strategies.',
      date: 'Nov 10, 2025',
      category: 'Digital Marketing',
      slug: 'machine-learning-marketing-roi',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      readTime: 7
    },
    {
      title: '10 Essential Web Development Practices for 2025',
      excerpt: 'Stay ahead of the curve with these modern web development techniques that improve performance, security, and user experience for your applications.',
      date: 'Nov 5, 2025',
      category: 'Web Development',
      slug: 'web-development-practices-2025',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      readTime: 6
    },
    {
      title: 'AI-Powered Chatbots: Transforming Customer Service',
      excerpt: 'Explore how intelligent chatbots are revolutionizing customer support and creating better user experiences across various industries worldwide.',
      date: 'Oct 28, 2025',
      category: 'AI Solutions',
      slug: 'ai-chatbots-customer-service',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      readTime: 5
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Blog Section for SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#092f73] mb-4">
              Latest Insights & Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in AI, web development, and digital marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Creative CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#092f73] to-black">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#092f73] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for New Projects
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-gradient">
                Your Business?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Our team of experts is ready to turn your vision into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto py-8">
              {[
                { number: '100+', label: 'Projects' },
                { number: '50+', label: 'Clients' },
                { number: '98%', label: 'Success Rate' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#092f73] bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">Get Started Today</span>
                <svg className="relative z-10 ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <span>View Our Services</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
