'use client';

import { useState, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView
} from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ContactDetail {
    text: string;
    link: string;
}

interface ContactMethod {
    icon: string;
    title: string;
    description: string;
    details: ContactDetail[];
}

interface ContactCardProps {
    contact: ContactMethod;
    index: number;
}

const ContactCard = ({ contact, index }: ContactCardProps) => {
    const ref = useRef(null);
    const IsInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={IsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
        >
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                {contact.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {contact.title}
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {contact.description}
            </p>
            <div className="space-y-2">
                {contact.details.map((detail, idx) => (
                    <a
                        key={idx}
                        href={detail.link}
                        className="block text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
                    >
                        {detail.text}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

interface Location {
    icon: string;
    city: string;
    country: string;
    address: string;
    phone: string;
}

interface LocationCardProps {
    location: Location;
    index: number;
}

const LocationCard = ({ location, index }: LocationCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer"
        >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
                <div className="text-3xl mb-4">
                    {location.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                    {location.city}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                    {location.country}
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                    <p>
                        {location.address}
                    </p>
                    <p className="text-emerald-400 font-semibold">
                        {location.phone}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

interface FAQ {
    question: string;
    answer: string;
}

interface FAQItemProps {
    faq: FAQ;
    index: number;
}

const FAQItem = ({ faq, index }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-slate-200 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-emerald-600 transition-colors"
            >
                <span className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {faq.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-emerald-600 flex-shrink-0"
                >
                    ↓
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default function ContactPage() {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const [formData, setFormData] =
        useState({
            name: '',
            email: '',
            phone: '',
            interest: '',
            message: '',
        });

    const [formState, setFormState] = useState<{
        isSubmitting: boolean;
        isSuccess: boolean;
        error: string | null;
    }>({
        isSubmitting: false,
        isSuccess: false,
        error: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormState({ isSubmitting: true, isSuccess: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setFormState({ isSubmitting: false, isSuccess: true, error: null });
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                interest: '',
                message: '',
            });

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setFormState(prev => ({ ...prev, isSuccess: false }));
            }, 5000);
        } catch (error) {
            setFormState({
                isSubmitting: false,
                isSuccess: false,
                error: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
            });
        }
    };


    const contactMethods = [
        {
            icon: '📞',
            title: 'Call Us',
            description: 'Speak directly with our team for immediate assistance',
            details: [
                {
                    text: '+1 800 123 456 789',
                    link: 'tel:+18001234567',
                },
                {
                    text: "+1 800 987 654 321",
                    link: "tel:+18009876543"
                }
            ],
        },
        {
            icon: "✉️",
            title: "Email Us",
            description: "Send us a message and we'll respond within 24 hours",
            details: [
                {
                    text: "info@nokinc.com",
                    link: "mailto:info@nokinc.com"
                },
                {
                    text: "support@nokinc.com",
                    link: "mailto:support@nokinc.com"
                }
            ]
        },
        {
            icon: "💬",
            title: "Live Chat",
            description: "Chat with our support team in real-time",
            details: [
                {
                    text: "Start Chat →",
                    link: "https://nokinc.com/chat"
                }
            ]
        },
        {
            icon: "🏢",
            title: "Visit Us in-Person",
            description: "Schedule an in-person meeting at our headoffice",
            details: [
                {
                    text: "Book Appointment →",
                    link: "/appointment"
                }
            ]
        }
    ];

    const locations = [
        {
            icon: "🇺🇸",
            city: "New York",
            country: "United States",
            address: "27 Division St, NY 10002",
            phone: "+1 800 123 456 789"
        },
        {
            icon: "🇬🇧",
            city: "London",
            country: "United Kingdom",
            address: "123 Oxford Street, W1D 2HG",
            phone: "+44 20 1234 5678"
        },
        {
            icon: "🇳🇬",
            city: "Lagos",
            country: "Nigeria",
            address: "456 Victoria Island, Lagos",
            phone: "+234 1 234 5678"
        }
    ];

    const faqs = [
        {
            question: "What areas do you serve?",
            answer: "We serve residential, commercial, and industrial clients across multiple countries. Our primary markets include the United States, the United Kingdom, Nigeria, and several other African countries. Contact us to confirm availability on your specific location."
        },
        {
            question: "How quickly can you respond to inquiries?",
            answer: "We aim to respond to all inquiries within a 24-hours period during business days. For urgent matters, please call our hotline directly for immediate assistance from our on-call team."
        },
        {
            question: "Do you offer emergency support?",
            answer: "Yes! We provide 24/7 emergency support for all installed systems. Our rapid response team is available to address critical issues and ensure minimal downtime for your energy systems."
        },
        {
            question: "Can I schedule a site visit?",
            answer: "Absolutely! We offer free site assessments for all potential projects. Simply fill out the contact form or call us to schedule a convenient time for our technical team to visit your location."
        },
        {
            question: "What information should I prepare before contacting you?",
            answer: "Having your location, approximate project size, timeline, and budget range ready will help us provide more accurate information. However, don't worry of you don't have all details - we're here to help guide you through the process."
        }
    ];

    return (
        <div className="min-h-screen bg-[#f3faf6] text-slate-900">
            <Navbar />
            {/* Hero section */}
            <section className="relative min-h-screen overflow-hidden bg-slate-900">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/miles-burke-idhx-MOCDSk-unsplash.jpg"
                            alt="Contact NOK Inc."
                            fill
                            className="object-cover opacity-44"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-slate-900/90 to-slate-900/70" />

                        {/* Animated Background Orbs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                                x: [0, 100, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity }}
                            className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.15, 0.3, 0.15],
                                x: [0, -80, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex min-h-screen items-center">
                        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 pb-16 pt-32 text-center sm:px-6 md:pb-24">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
                            >
                                <span className="tex-xl">📞</span>
                                <span className="text-white font-semi-bold text-sm uppercase tracking-[0.25em]">
                                    Get In Touch
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-4xl text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
                            >
                                Let's Start Your
                                <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
                                    Clean Energy Journey
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mt-2 max-w-3xl text-balance text-base text-slate-200/90 md:text-lg leading-relaxed"
                            >
                                Our team of experts is ready to help you power your home, businesses, or communities with sustainable energy solutions. Reach out today and let's make it happen.
                            </motion.p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <motion.a
                                    href="#form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-500"
                                >
                                    Send Us a Message
                                    <span className="text-lg">→</span>
                                </motion.a>
                                <motion.a
                                    href="tel:+18001234567"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm tranistion hover:bg-white/20"
                                >
                                    Call Now
                                    <span className="text-lg">📞</span>
                                </motion.a>
                            </div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full"
                            >
                                {[
                                    {
                                        value: "24/7",
                                        label: "Support Available",
                                        icon: "⚡"
                                    },
                                    {
                                        value: "<24hr",
                                        label: "Response Time",
                                        icon: "⏱️"
                                    },
                                    {
                                        value: "3",
                                        label: "Global Offices",
                                        icon: "🌍"
                                    }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
                                    >
                                        <div className="text-3xl mb-3">
                                            {stat.icon}
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-300 text-sm">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2"
                    >
                        <div className="text-3xl text-white/60">↓</div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl space-y-24 px-6 py-20">
                {/* Contact Methods */}
                <section className="space-y-12">
                    <div className="space-y-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Image
                                src='/Nok-logo-standalone-2.png'
                                width={20}
                                height={20}
                                alt="logo"
                            />
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                                Contact Methods
                            </p>
                        </div>
                        <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                            How Can We Help You?
                        </h2>
                        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Choose your preferred way to connect with our team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <ContactCard
                                key={index}
                                contact={method}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Contact Form */}
                <section className="grid gap-12 rounded-3xl bg-white px-6 py-16 shadow-xl shadow-emerald-900/5 md:grid-cols-[minmax(0, 1fr)_minmax(0, 1.2fr)] md:gap-16 md:px-10 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600"
                        >
                            Send a Message
                        </p>
                        <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                            Let's Power Your Next Project
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                            Tell us a bit about home, business, or community. Our team will follow up with tailored proposal and clear next steps.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-700">
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-600 text-lg">✓</span>
                                <span>Solar + battery systems for homes and businesses</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-600 text-lg">✓</span>
                                <span>Electric mobility fleets and charging infrastructure</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-600 text-">✓</span>
                                <span>Custom financing and flexible payment plans</span>
                            </li>
                        </ul>

                        {/* Trust Badges */}
                        <div className="pt-6 border-t border-slate-200">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
                                Trusted By
                            </p>
                            <div className="flex flex-wrap gap-4 items-center opacity-60">
                                <div className="text-2xl">🏆</div>
                                <div className="text-2xl">⭐</div>
                                <div className="text-2xl">🌟</div>
                                <div className="text-2xl">✨</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        action=""
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <label
                                    htmlFor=""
                                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                                >
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:bg-white focus:ring-2"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                                >
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:bg-white focus:ring-2"
                                    placeholder="jane.doe@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}

                                    onChange={handleInputChange}
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:bg-white focuse:ring-2"
                                    placeholder="+1 800 123 456 789"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="interest"
                                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                                >
                                    Interest Area *
                                </label>
                                <select
                                    name="interest"
                                    id="interest"
                                    required
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:bg-white focuse:ring-2"
                                >
                                    <option value="">Select an interest area</option>
                                    <option value="home-solar">Home solar & battery</option>
                                    <option value="real-estate">Real Estate</option>
                                    <option value="business">Business / industrial energy</option>
                                    <option value="mobility">Mobility & charging</option>
                                    <option value="community">Community projects</option>
                                    <option value="financing">Financing options</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                            >
                                Message *
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:bg-white focus:ring-2"
                                placeholder="Share your location, timeline, and what you want to achieve..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={formState.isSubmitting}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formState.isSubmitting ? (
                                <>
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="text-lg"
                                    >
                                        ⏳
                                    </motion.span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Submit Request
                                    <span className="text-lg">→</span>
                                </>
                            )}
                        </motion.button>

                        {/* Success Message */}
                        {formState.isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-700"
                            >
                                <span className="text-2xl">✓</span>
                                <p className="text-sm font-medium">
                                    Thank you! We've received your message and will get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}

                        {/* Error Message */}
                        {formState.error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700"
                            >
                                <span className="text-2xl">⚠️</span>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{formState.error}</p>
                                    <p className="text-xs mt-1 text-red-600">
                                        Please try again or contact us directly at info@nokinc.com
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        <p className="text-xs text-slate-500 leading-relaxed">
                            <span className="pr-2">*</span>
                            By submitting this form, you agree that we may contact you about NOK products and services. We respect your privacy and never share your details without permission.
                        </p>
                    </motion.form>
                </section>

                {/* Locations */}
                <section className="space-y-12">
                    <div className="space-y-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                            Our Locations
                        </p>
                        <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                            Visit Us Worldwide
                        </h2>
                        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            With offices across three continents, we're here to serve you wherever you are.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {locations.map((location, index) => (
                            <LocationCard
                                key={index}
                                location={location}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-12 rounded-3xl bg-white px-6 py-16 shadow-xl shadow-emerald-900/50 md:px-10 md:py-20">
                    <div className="space-y-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                            FAQs
                        </p>
                        <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Quick answers to common questions about getting in touch with us
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Emergency Contact CTA */}
                <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-xl">
                    <div className="relative px-6 py-16 md:px-10 md:py-20">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
                        />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="text-6xl mb-6">🚨</div>
                            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
                                Need Emergency Support?
                            </h2>
                            <p className="text-lg text-white/90 mb-10 leading-relaxed">
                                Our 24/7 emergency response team is standing by to help with critical system issues.
                                Don't wait-get immediate assistance now.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="tel:+18001234567"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-full bg-white text-red-600 px-10 py-5 text-base font-semibold shadow-2xl hover:shadow-white/50 transition-all"
                                >
                                    <span className="text-3xl sm:text-xl">📞</span>
                                    <span>Call Emergency Line</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}