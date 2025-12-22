'use client';

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    Zap,
    Settings,
    MonitorCheck,
    Headphones,
    Award,
    Shield,
    Clock,
    Users,
    ArrowRight,
    Check
} from "lucide-react";
import { motion } from "framer-motion";


export default function ServicePage() {
    const services = [
        {
            title: "installation",
            icon: Zap,
            description: 'Professional installation services ensuring your energy systems are set up correctly and safely from day one.',
            features: [
                'Certified installation technicians',
                'Safety-first approach',
                'Quality assurance testing',
                'Mininmal downtime',
            ],
        },
        {
            title: "Maintenance",
            icon: Settings,
            description: "Preventive maintenance programs designed to keep your systems running at peak performance year-round",
            features: [
                "Regular preventive checks",
                "Priority service scheduling",
                "Performance optimization",
            ],
        },
        {
            title: "Monitoring",
            icon: MonitorCheck,
            description: "Real-time monitoring and analytics to track system performance, energy production, and potential issues",
            features: [
                "24/7 remote monitoring",
                "Real-time alerts",
                "Performance analytics",
                "Mobile app access",
            ],
        },
        {
            title: "Support",
            icon: Headphones,
            description: "Dedicated customer support with expert technicians available to resolve issues quickly and efficiently",
            features: [
                "Dedicated help desk",
                "Emergency response team",
                "Spare parts availablility",
                "Clear SLAs",
            ],
        },
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: "Industry Expertise",
            description: "Over a decade of experience in clean energy systems",
        },
        {
            icon: Shield,
            title: "Quality Guaranteed",
            description: "All services backed by comprehensive warranites",
        },
        {
            icon: Clock,
            title: "Fast Response",
            description: "Emergency support available within hours",
        },
        {
            icon: Users,
            title: "Certified Team",
            description: "Highly trained and continuously upskilled technicians",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f3faf6] text-slate-900">
            <Navbar />

            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden bg-[url('/florida-solar-fix-XZP59dwklV4-unsplash.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-slate-900/60" />

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                 className="relative z-10 flex mib-h-[calc(100vh-6rem)] items-center pt-30">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                            Our Services
                        </p>

                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                            Comprehensive Energy
                            <br />
                            Solutions That Work
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
                            From installation to lifetime support, NOK delivers clean energy systems designed for reliability, performance, and scale.
                        </p>

                        <div className="mt-8 flex justify-center gap-4">
                            <a href="#services" className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500">
                                Explore Services →
                            </a>    
                            <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white/70 backdrop-blur transition hover:bg-white hover:text-emerald-500">
                                Contact Us →
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
            {/* MAIN */}
            <main className="mx-auto max-w-6xl space-t-24 px-6 py-20">
                {/* SERVICES */}
                <section className="space-y-12" id="services">
                    <div className="text-center space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                            What We Do
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semi-bold">
                            Our Service Offerings
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {services.map((service, i) => (
                            <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            key={i}
                            className="rounded-3xl bg-white p-8 shadow-md shadow-emerald-900/5"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                                        <service.icon size={22} />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li
                                        key={idx}
                                        className="flex items-start gap-3 text-sm text-slate-700"
                                        >
                                            <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                                                <Check size={12} className="text-emerald-700" />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="space-y-12 py-20">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6}}
                    className="text-center space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                            Why NOK?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Trusted Clean Energy Partner
                        </h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                            whileHover={{ scale: 1.09 }}
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            key={i}
                            className="rounded-3xl bg-white p-6 shadow-md shadow-emerald-900/5"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                    <item.icon size={22} />
                                </div>
                                <h3 className="font-semibold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                id="contact" 
                className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="mx-auto max-w-xl text-slate-300 mb-8">
                        Talk to our experts and discover how NOK can support your energy journey.
                    </p>

                    <motion.a 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.09 }}
                    href="#" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold shadow-lg transition hover:bg-emerald-500">
                        Request a Quote <ArrowRight size={16} />
                    </motion.a>
                </motion.section>
            </main>

            <Footer />
        </div>
    )
}