import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function FutureOfAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="The Future of AI in Business: Trends for 2025 | Maroc Agency"
        description="Discover how artificial intelligence is reshaping industries and what it means for your business strategy in the coming years. Learn about the latest AI trends."
        keywords="AI, artificial intelligence, business trends, 2025, machine learning, automation"
        ogTitle="The Future of AI in Business: Trends for 2025"
        ogDescription="Discover how artificial intelligence is reshaping industries and what it means for your business strategy."
        ogImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
        canonical="https://marocagency.com/blog/future-of-ai-in-business-2025"
      />

      <article>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
            alt="Future of AI in Business"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                AI Trends
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              The Future of AI in Business: Trends for 2025
            </h1>
            <div className="flex items-center text-gray-300 text-sm space-x-4">
              <span>November 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>By Maroc Agency</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Artificial Intelligence is no longer a futuristic concept—it's transforming businesses across every industry. As we move into 2025, understanding these trends is crucial for staying competitive.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">1. Generative AI Becomes Mainstream</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Generative AI tools like ChatGPT and DALL-E have revolutionized content creation. In 2025, we're seeing these technologies integrate deeper into business workflows, from marketing campaigns to product development. Companies are using AI to generate personalized content at scale, reducing costs while improving quality.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">2. AI-Powered Decision Making</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Business intelligence is getting smarter. AI algorithms now analyze vast amounts of data to provide actionable insights in real-time. This enables executives to make informed decisions faster than ever before, giving companies a significant competitive advantage.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">3. Automation and Workforce Transformation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI-driven automation is reshaping the workforce. Rather than replacing humans, AI is augmenting human capabilities, allowing employees to focus on creative and strategic tasks while AI handles repetitive work. This transformation requires new skills and mindsets.
              </p>

              <div className="bg-gray-50 border-l-4 border-[#092f73] p-6 my-8">
                <p className="text-gray-800 italic">
                  "Companies that embrace AI now will be the leaders of tomorrow. The question isn't whether to adopt AI, but how quickly you can integrate it into your operations."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">4. Ethical AI and Responsible Innovation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As AI becomes more powerful, ethical considerations are taking center stage. Companies are investing in responsible AI practices, ensuring transparency, fairness, and accountability in their AI systems. This isn't just good ethics—it's good business.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">Getting Started with AI</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The best time to start your AI journey is now. Begin by identifying repetitive tasks in your business that could benefit from automation. Partner with AI experts who understand your industry and can guide your transformation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At Maroc Agency, we help businesses navigate the AI landscape with custom solutions tailored to your specific needs. Our team of AI specialists can assess your current operations and develop a roadmap for AI integration.
              </p>
            </div>

            {/* Creative CTA */}
            <div className="relative mt-16 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#092f73] via-blue-600 to-[#092f73]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative p-12 md:p-16 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Let's Work Together
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you leverage AI for growth and innovation
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#092f73] font-bold rounded-xl transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <span>Start Your AI Journey</span>
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl transition-all hover:bg-white/20"
                  >
                    View AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles with Images */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-[#092f73] mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Machine Learning for Marketing ROI', 
                  slug: 'machine-learning-marketing-roi',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                  category: 'Digital Marketing'
                },
                { 
                  title: 'Web Development Best Practices', 
                  slug: 'web-development-practices-2025',
                  image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
                  category: 'Web Development'
                },
                { 
                  title: 'AI-Powered Chatbots Guide', 
                  slug: 'ai-chatbots-customer-service',
                  image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
                  category: 'AI Solutions'
                }
              ].map((article, index) => (
                <Link
                  key={index}
                  to={`/blog/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#092f73] hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold px-3 py-1 bg-[#092f73]/10 text-[#092f73] rounded-full">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#092f73] mt-3 transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
