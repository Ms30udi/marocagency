import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import { GlowingEffect } from '../components/ui/GlowingEffect';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Initialize EmailJS with your public key
        emailjs.init('yFBOK5klkp7xWkrUc');
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Get current timestamp
            const now = new Date();
            const formattedTime = now.toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });

            // Send email using EmailJS with matching variable names
            const result = await emailjs.send(
                'service_c5corbd', // Your Service ID
                'template_4pncmup', // Your Template ID
                {
                    name: formData.name,           // Changed from from_name
                    email: formData.email,         // Changed from from_email
                    phone: formData.phone || 'Not provided',
                    subject: formData.subject,
                    message: formData.message,
                    time: formattedTime            // Added timestamp
                }
            );

            console.log('Email sent successfully:', result);

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setTimeout(() => setSubmitStatus(''), 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            content: 'hagroupweb@gmail.com',
            link: 'mailto:hagroupweb@gmail.com'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            content: '+212-666657381',
            link: 'tel:+212-666657381'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            content: 'Marrakech, Morocco',
            link: null
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Working Hours',
            content: '7d/7d 24h/24h',
            link: null
        }
    ];

    return (
        <>
            <SEO
                title="Contact Us | Get in Touch with Maroc Agency"
                description="Contact Maroc Agency for web development, AI solutions, and digital marketing services in Morocco. Located in Marrakech. Free consultation available."
                keywords="contact Maroc Agency, web development Morocco, AI solutions Marrakech, digital agency contact"
                ogTitle="Contact Us - Maroc Agency"
                ogDescription="Get in touch with our expert team in Marrakech"
                ogImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
                canonical="https://marocagency.com/contact"
            />

            <article>
                {/* Hero Section */}
                <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
                        alt="Contact Us"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 pt-24">
                        <div className="mb-4">
                            <span className="px-4 py-2 bg-[#092f73] text-white text-sm font-bold rounded-full">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            Have a project in mind? We'd love to hear from you. Let's discuss how we can help transform your business.
                        </p>
                    </div>
                </section>

                {/* Contact Information Cards */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
                            {contactInfo.map((info, index) => (
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

                                        <div className="relative h-full bg-white rounded-lg p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all border-t-4 border-t-[#092f73]">
                                            <div className="w-12 h-12 bg-[#092f73] rounded-lg flex items-center justify-center text-white mb-4">
                                                {info.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                {info.title}
                                            </h3>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-600 hover:text-[#092f73] transition-colors"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Column - Info */}
                            <div>
                                <h2 className="text-4xl font-bold text-[#092f73] mb-6">
                                    Let's Work Together
                                </h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Whether you need AI development, web solutions, or digital marketing services, our team is ready to help transform your vision into reality.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Sparkles className="w-6 h-6 text-[#092f73]" />,
                                            title: 'Fast Response',
                                            description: 'We typically respond within 24 hours'
                                        },
                                        {
                                            icon: <CheckCircle2 className="w-6 h-6 text-[#092f73]" />,
                                            title: 'Free Consultation',
                                            description: 'Initial consultation is always free'
                                        },
                                        {
                                            icon: <Send className="w-6 h-6 text-[#092f73]" />,
                                            title: 'Expert Team',
                                            description: 'Work directly with experienced professionals'
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-12 h-12 bg-[#092f73]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Trust Indicators */}
                                <div className="mt-12 p-6 bg-gradient-to-br from-[#092f73] to-blue-600 rounded-xl">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        {[
                                            { number: '50+', label: 'Projects' },
                                            { number: '30+', label: 'Clients' },
                                            { number: '98%', label: 'Success' }
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-white">{stat.number}</div>
                                                <div className="text-xs text-blue-100">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Form */}
                            <div className="relative">
                                <div className="relative rounded-2xl border border-gray-200 p-2">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                        borderWidth={2}
                                    />

                                    <div className="relative bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Name Field */}
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092f73] transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Youssef Alaoui"
                                                />
                                                {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                                )}
                                            </div>

                                            {/* Email Field */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092f73] transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Youssef@example.com"
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                                )}
                                            </div>

                                            {/* Phone Field */}
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092f73] transition-colors"
                                                    placeholder="+212-616237485"
                                                />
                                            </div>

                                            {/* Subject Field */}
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Subject *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092f73] transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="How can we help you?"
                                                />
                                                {errors.subject && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                                )}
                                            </div>

                                            {/* Message Field */}
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="5"
                                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092f73] transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Tell us more about your project..."
                                                />
                                                {errors.message && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                                )}
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#092f73] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#0a3a8f] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center justify-center cursor-pointer"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-5 w-5 " />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>

                                            {/* Success/Error Messages */}
                                            {submitStatus === 'success' && (
                                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="font-semibold">Message sent successfully!</p>
                                                        <p className="text-sm">We'll get back to you within 24 hours.</p>
                                                    </div>
                                                </div>
                                            )}

                                            {submitStatus === 'error' && (
                                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                                    <p className="font-semibold">✗ Something went wrong</p>
                                                    <p className="text-sm">Please try again or email us directly at contact@marocagency.com</p>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
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
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Prefer to Explore First?
                                </h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Check out our services and portfolio to see how we can help your business grow.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#092f73] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                                    >
                                        View Services
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>

                                    <Link
                                        to="/works"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl transition-all hover:bg-white/20"
                                    >
                                        See Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
