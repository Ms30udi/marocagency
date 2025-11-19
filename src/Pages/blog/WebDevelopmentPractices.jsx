import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function WebDevelopmentPractices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="10 Essential Web Development Practices for 2025 | Maroc Agency"
        description="Stay ahead of the curve with these modern web development techniques that improve performance, security, and user experience for your applications."
        keywords="web development, best practices, React, performance optimization, security, modern web development"
        ogTitle="10 Essential Web Development Practices for 2025"
        ogDescription="Modern web development techniques for better performance and security."
        ogImage="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80"
        canonical="https://marocagency.com/blog/web-development-practices-2025"
      />

      <article>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80"
            alt="Web Development Practices"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                Web Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              10 Essential Web Development Practices for 2025
            </h1>
            <div className="flex items-center text-gray-300 text-sm space-x-4">
              <span>November 5, 2025</span>
              <span>•</span>
              <span>6 min read</span>
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
                The web development landscape is constantly evolving. Here are the essential practices every developer should follow in 2025 to build fast, secure, and user-friendly applications.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">1. Performance-First Development</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimize for Core Web Vitals from the start. Use lazy loading, code splitting, and modern image formats like WebP. Every millisecond counts in user experience and SEO rankings.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">2. Mobile-First Responsive Design</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over 60% of web traffic coming from mobile devices, designing for mobile first is no longer optional. Use responsive frameworks and test on real devices regularly.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">3. Security Best Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Implement HTTPS, use Content Security Policy headers, sanitize user inputs, and keep dependencies updated. Security should be baked into your development process, not an afterthought.
              </p>

              <div className="bg-gray-50 border-l-4 border-[#092f73] p-6 my-8">
                <p className="text-gray-800 italic">
                  "A fast, secure website isn't just good practice—it's a competitive advantage that directly impacts your bottom line."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">4. Accessibility (a11y) Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Follow WCAG 2.1 guidelines to make your site usable for everyone. Use semantic HTML, proper ARIA labels, and test with screen readers. Accessibility improves UX for all users.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">5. Modern JavaScript Frameworks</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Leverage frameworks like React, Vue, or Svelte for component-based architecture. Use server-side rendering (SSR) or static site generation (SSG) for better performance and SEO.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">6. API-First Architecture</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Design your backend as a RESTful or GraphQL API that can serve multiple frontends. This approach improves scalability and enables easier mobile app development.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">7. Version Control & CI/CD</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Use Git for version control and implement continuous integration/deployment pipelines. Automated testing and deployment reduce errors and speed up development cycles.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">8. Progressive Web Apps (PWAs)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Make your web apps installable and work offline with service workers. PWAs provide app-like experiences without the need for app store distribution.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">9. Testing & Quality Assurance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Implement unit tests, integration tests, and end-to-end tests. Use tools like Jest, Cypress, or Playwright to catch bugs before they reach production.
              </p>

              <h2 className="text-3xl font-bold text-[#092f73] mt-12 mb-6">10. Documentation & Code Quality</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Write clean, maintainable code with proper documentation. Use TypeScript for type safety, ESLint for code quality, and Prettier for consistent formatting. Your future self will thank you.
              </p>
            </div>

            {/* Creative CTA */}
            <div className="relative mt-16 overflow-hidden rounded-3xl">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-[#092f73] to-cyan-600">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
                </div>
              </div>

              {/* Code Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="font-mono text-xs leading-relaxed p-8 text-white">
                  {`function buildAmazingWebsite() {
  const design = useCreativeDesign();
  const performance = optimizeForSpeed();
  const security = implementBestPractices();
  
  return <Website 
    modern={true}
    responsive={true}
    accessible={true}
  />;
}`}
                </div>
              </div>

              <div className="relative p-12 md:p-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="text-left">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Expert Development
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Need Expert Web Development?
                    </h3>
                    
                    <p className="text-blue-100 text-lg mb-6">
                      Let's build something amazing together with modern technologies and industry best practices.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        'Lightning Fast Performance',
                        'Responsive & Mobile-First',
                        'SEO Optimized',
                        'Secure & Scalable'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-white">
                          <svg className="w-5 h-5 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#092f73] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                      >
                        Start Your Project
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      
                      <Link
                        to="/works"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl transition-all hover:bg-white/20"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>

                  {/* Right Side - Tech Stack Cards */}
                  <div className="hidden md:block">
                    <div className="space-y-4">
                      {[
                        { name: 'React / Next.js', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
                        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-400' },
                        { name: 'Node.js / API', icon: '🚀', color: 'from-green-400 to-emerald-400' }
                      ].map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <span className="text-4xl mr-4">{tech.icon}</span>
                          <div>
                            <div className="text-white font-bold">{tech.name}</div>
                            <div className={`h-2 w-32 bg-gradient-to-r ${tech.color} rounded-full mt-2`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 pt-8 border-t border-white/20 flex items-center justify-center gap-8 text-white text-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast Delivery
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Clean Code
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </div>
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
                  title: 'The Future of AI in Business', 
                  slug: 'future-of-ai-in-business-2025',
                  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
                  category: 'AI Trends'
                },
                { 
                  title: 'Machine Learning for Marketing', 
                  slug: 'machine-learning-marketing-roi',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                  category: 'Digital Marketing'
                },
                { 
                  title: 'AI-Powered Chatbots', 
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
