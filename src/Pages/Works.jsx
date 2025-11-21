import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Filter,
    ExternalLink,
    Calendar,
    Users,
    TrendingUp,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import { GlowingEffect } from '../components/ui/GlowingEffect';

export default function Works() {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'ai', name: 'AI Solutions' },
        { id: 'web', name: 'Web Development' },
        { id: 'marketing', name: 'Digital Marketing' }
    ];

    const projects = [
        {
            id: 1,
            title: 'E-Commerce AI Platform',
            category: 'ai',
            description: 'AI-powered recommendation engine for a major retail platform, increasing sales by 45%',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
            tags: ['Machine Learning', 'Python', 'React'],
            stats: { duration: '6 months', team: '5 members', result: '+45% Sales' },
            client: 'Retail Corp'
        },
        {
            id: 2,
            title: 'Healthcare Analytics Dashboard',
            category: 'web',
            description: 'Real-time analytics platform for healthcare providers to monitor patient data and metrics',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
            tags: ['React', 'Node.js', 'MongoDB'],
            stats: { duration: '4 months', team: '4 members', result: '10k+ Users' },
            client: 'Healthcare Inc'
        },
        {
            id: 3,
            title: 'Social Media Management Tool',
            category: 'marketing',
            description: 'Automated social media scheduling and analytics platform for marketing agencies',
            image: 'https://images.unsplash.com/photo-1636516214833-3377b36bdcb5?q=80&w=1060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tags: ['Next.js', 'AI', 'Analytics'],
            stats: { duration: '5 months', team: '6 members', result: '5k+ Brands' },
            client: 'Marketing Agency'
        },
        {
            id: 4,
            title: 'Smart Automation System',
            category: 'ai',
            description: 'Business process automation platform using AI to streamline workflows',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
            tags: ['AI', 'Automation', 'Cloud'],
            stats: { duration: '7 months', team: '5 members', result: '70% Efficiency' },
            client: 'Tech Company'
        },
        {
            id: 5,
            title: 'Financial Forecasting AI',
            category: 'ai',
            description: 'Predictive analytics system for financial institutions to forecast market trends',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            tags: ['TensorFlow', 'Python', 'API'],
            stats: { duration: '8 months', team: '7 members', result: '92% Accuracy' },
            client: 'Finance Group'
        },
        {
            id: 6,
            title: 'E-commerce Platform',
            category: 'web',
            description: 'Full-stack e-commerce solution with real-time inventory and payment integration',
            image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tags: ['Next.js', 'Stripe', 'PostgreSQL'],
            stats: { duration: '5 months', team: '4 members', result: '1M+ Orders' },
            client: 'Retail Brand'
        },
        {
            id: 7,
            title: 'SEO Automation Suite',
            category: 'marketing',
            description: 'Comprehensive SEO tools for keyword research, competitor analysis, and tracking',
            image: 'https://images.unsplash.com/photo-1758626052247-79003b45f802?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tags: ['React', 'Python', 'AI'],
            stats: { duration: '6 months', team: '5 members', result: '1k+ Companies' },
            client: 'SEO Agency'
        },
        {
            id: 9,
            title: 'Customer Support Chatbot',
            category: 'ai',
            description: 'Intelligent chatbot handling 80% of customer inquiries automatically',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
            tags: ['NLP', 'Python', 'TensorFlow'],
            stats: { duration: '3 months', team: '3 members', result: '80% Automation' },
            client: 'Tech Company'
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <>
            <SEO
                title="Our Portfolio | Web Development & AI Projects | Maroc Agency"
                description="Explore our portfolio of successful web development, AI solutions, and digital marketing projects. See how we've helped businesses transform digitally."
                keywords="portfolio, web development projects, AI solutions, digital marketing case studies, Morocco"
                ogTitle="Our Portfolio - Maroc Agency"
                ogDescription="Successful digital transformation projects"
                ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                canonical="https://marocagency.com/works"
            />

            <article>
                {/* Hero Section */}
                <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
                        alt="Our Portfolio"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
                        <div className="mb-4">
                            <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                                Our Work
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Showcasing Success Stories Across Industries
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            Explore our portfolio of successful AI implementations, web development projects, and digital marketing campaigns.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gradient-to-br from-[#092f73] to-[#0a3a8f]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: '50+', label: 'Projects Completed' },
                                { number: '20+', label: 'Happy Clients' },
                                { number: '5+', label: 'Industries Served' },
                                { number: '98%', label: 'Success Rate' }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-blue-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-8 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <Filter className="w-5 h-5 text-[#092f73] mr-2" />
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === category.id
                                        ? 'bg-[#092f73] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <article key={project.id} className="relative h-full">
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
                                            {/* Project Image */}
                                            <div className="aspect-video overflow-hidden relative group">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <span className="px-3 py-1 bg-[#092f73] text-white text-xs font-bold rounded-full">
                                                            {categories.find(c => c.id === project.category)?.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#092f73] transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-[#092f73]/10 text-[#092f73] text-xs font-medium rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                                                    <div>
                                                        <div className="flex items-center text-xs text-gray-500 mb-1">
                                                            <Calendar className="w-3 h-3 mr-1" />
                                                            Duration
                                                        </div>
                                                        <div className="text-sm font-semibold text-gray-900">{project.stats.duration}</div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center text-xs text-gray-500 mb-1">
                                                            <Users className="w-3 h-3 mr-1" />
                                                            Team
                                                        </div>
                                                        <div className="text-sm font-semibold text-gray-900">{project.stats.team}</div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center text-xs text-gray-500 mb-1">
                                                            <TrendingUp className="w-3 h-3 mr-1" />
                                                            Result
                                                        </div>
                                                        <div className="text-sm font-semibold text-[#092f73]">{project.stats.result}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-gray-400 mb-4">
                                    <Filter className="w-24 h-24 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
                                <p className="text-gray-600">Try selecting a different category</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-white"> {/* Changed from py-20 to py-32 */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#092f73] via-blue-600 to-cyan-600">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                            </div>

                            <div className="relative p-12 md:p-16 text-center">
                                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Start Your Success Story
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Ready to Create Your Own Success Story?
                                </h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Let's collaborate to bring your vision to life with innovative solutions that deliver real results.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#092f73] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                                    >
                                        Start a Project
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl transition-all hover:bg-white/20"
                                    >
                                        View Services
                                    </Link>
                                </div>

                                {/* Bottom Stats - FIX TEXT OVERFLOW */}
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white text-sm px-4">
                                    <div className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                        <span className="whitespace-nowrap">Free Consultation</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                        <span className="whitespace-nowrap">Expert Team</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                        <span className="whitespace-nowrap">Proven Results</span>
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
