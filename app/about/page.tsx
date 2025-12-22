"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sprout, Users, Globe, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-[#f3faf6] text-slate-900">
            {/* Header */}
            <Navbar />

            {/* Hero */}
            <motion.section
                className="relative overflow-hidden py-10"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0">
                    <motion.p
                        variants={fadeUp}
                        className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600"
                    >
                        About NOK Inc.
                    </motion.p>
                    <motion.h1
                        variants={fadeUp}
                        className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl"
                    >
                        Powering Progress.
                        <br />
                        Building Trust.
                        <br />
                        Driving Change.
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl text-base text-slate-600"
                    >
                        At NOK Inc, our mission is simple: deliver dependable, affordable,
                        and sustainable energy and mobility solutions. We believe clean
                        energy and smarter transport should be practical, accessible, and
                        easy to use for everyone – from households to factories.
                    </motion.p>
                </div>
            </motion.section>

            {/* Image Banner */}
            <motion.section
                className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[520px]">
                    <Image
                        src="/llustration of renewable energy.jpg"
                        alt="Renewable Energy Illustration"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </motion.section>

            {/* Our Story */}
            <motion.section
                className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <motion.div className="space-y-4" variants={fadeUp}>
                        <p className="text-xs font-semibold uppercase bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-[0.35em]">
                            Our Story
                        </p>
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Built for real-world impact
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                            NOK Inc was founded to solve everyday energy and mobility
                            challenges in a smarter way. From unreliable power supply to
                            high fuel costs and emissions, we design systems that work
                            reliably in real-world conditions – not just on paper.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600">
                            Our solutions combine solar power, battery storage, electric
                            mobility, and intelligent software to help homes, businesses,
                            and communities reduce costs while moving towards a cleaner
                            future.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative h-[260px] overflow-hidden rounded-3xl sm:h-[320px] md:h-[380px]"
                        variants={fadeUp}
                    >
                        <Image
                            src="/yokohama-raw-Ir_P6w2CHNo-unsplash.jpg"
                            alt="Clean Energy in Action"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Commitment */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
                    <motion.div
                        className="mb-14 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={staggerContainer}
                    >
                        <div className="flex items-center align-center justify-center">
                            <Image src="/Nok-logo-standalone-2.png" width={20} height={20} alt="logo" />
                            <motion.p
                                variants={fadeUp}
                                className="text-xs font-semibold uppercase bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-[0.35em]"
                            >
                                Commitment
                            </motion.p>
                        </div>
                        <motion.h2
                            variants={fadeUp}
                            className="mt-3 text-3xl font-semibold sm:text-4xl"
                        >
                            Our Commitment
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        {/* Mission driven */}
                        <motion.div
                            variants={fadeUp}
                            className="rounded-3xl bg-[#f3faf6] p-6 text-center shadow-sm"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Sprout className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">Mission Driven</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Cut fuel costs, improve uptime, and empower communities.
                            </p>
                        </motion.div>

                        {/* Team Focused */}
                        <motion.div
                            variants={fadeUp}
                            className="rounded-3xl bg-[#f3faf6] p-6 text-center shadow-sm"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Users className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">Team Focused</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Creating local jobs in installation, service, and software
                                support.
                            </p>
                        </motion.div>

                        {/* Sustainability */}
                        <motion.div
                            variants={fadeUp}
                            className="rounded-3xl bg-[#f3faf6] p-6 text-center shadow-sm"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Globe className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">Sustainability</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Lower emissions, quieter streets, and safer spaces.
                            </p>
                        </motion.div>

                        {/* Partnerships */}
                        <motion.div
                            variants={fadeUp}
                            className="rounded-3xl bg-[#f3faf6] p-6 text-center shadow-sm"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Handshake className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">Partnership</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Long-term collaboration with utilities, municipalities, and
                                OEMs.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <motion.section
                className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="rounded-3xl bg-slate-900 p-8 text-slate-50 shadow-xl sm:p-10 md:flex md:items-center md:justify-between md:gap-10">
                    <div className="space-y-4 md:max-w-xl">
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Let&apos;s build a cleaner future together
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-200 md:text-base">
                            Whether you&apos;re powering a home, scaling a business, or
                            electrifying a community, NOK Inc is ready to partner with you.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}