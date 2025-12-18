import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sprout, Users, Globe, Handshake } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-scree bg-[#f3faf6] text-slate-900">
            {/* Header */}
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden py-10">
                <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
                        About NOK Inc.
                    </p>
                    <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                        Powering Progress.
                        <br />
                        Building Trust.
                        <br />
                        Driving Change.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base text-slate-600">
                        At NOK Inc, our mission is simple: deliver dependable, affordable, and sustainable energy and mobility solutions. We believe clean energy and smarter transport should be practical, accessible, and easy to use for everyone - from households to factories.
                    </p>
                </div>
            </section>

            {/* Image Banner */}
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
                <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[520px]">
                    <Image
                        src="/llustration of renewable energy.jpg"
                        alt="Renewable Energy Illustration"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Our Story */}
            <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0">
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent font-bold tracking-[0.35em]">
                            Our Story
                        </p>
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Built for real-world impact
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                            NOK Inc was founded to solve everyday energy and mobility challenges in a smarter way. From unreliable power supply to high fuel costs and emissions, we design systems that work reliably in real-world conditions - not just on paper.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600">
                            Our solutions combine solar power, battery storage, electric mobility, and intelligent software to help homes, businesses, and communities reduce costs while moving towards a cleaner future.
                        </p>
                    </div>

                    <div className="relative h-[480px] overflow-hidden rounded-3xl md:h-[320px] sm:h-[220px]">
                        <Image src="/yokohama-raw-Ir_P6w2CHNo-unsplash.jpg" alt="Clean Energy in Action" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
                    <div className="mb-14 text-center">
                        <p className="text-xs font-semibold uppercase bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-[0.35em]">
                            Commitment
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                            Our Commitment
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Mission driven */}
                        <div className="rounded-3xl p-6 text-center shadow-sm bg-[#f3faf6] text-center shadow-sm">
                            <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Sprout className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Mission Driven
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Cut fuel costs, improve uptime, and empower communities.
                            </p>
                        </div>

                        {/* Team Focused */}
                        <div className="rounded-3xl p-6 text-center shadow-sm bg-[#f3faf6]">
                            <div className="mx-auto mb-4 flex w-13 h-13 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Team Focused
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Creating local jobs in installation, service, and software support
                            </p>
                        </div>

                        {/* Sustainability */}
                        <div className="rounded-3xl p-6 text-center shadow-sm bg-[#f3faf6]">
                            <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Globe className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Sustainability
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Lower emissions, quieter streets, and safer spaces.
                            </p>
                        </div>

                        {/* Partnerships */}
                        <div className="rounded-3xl p-6 text-center shadow-sm bg-[#f3faf6]">
                            <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-700 text-white">
                                <Handshake className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Partnership
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Long-term collaboration with utilities, municipalities, and OEMs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-0">
                <div className="rounded-3xl bg-slate-900 p-10 text-slate-50 shadow-xl">
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        Let's build a cleaner future together
                    </h2>
                    <p className="mt-4 max-w 2xl text-slate-200">
                        Whether you're powering a home, scaling a business, or electrifying a community, NOK Inc is ready to partner with you.
                    </p>
                    <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                        Get in Touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}