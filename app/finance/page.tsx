"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    TrendingUp,
    DollarSign,
    PiggyBank,
    CreditCard,
    FileText,
    Calculator,
    Shield,
    Clock,
    Percent,
    ArrowRight,
    Check,
    ChevronDown,
    Sparkles,
    Zap,
    Target,
    BarChart3
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LucideIcon } from 'lucide-react';

interface FinancingPlan {
    name: string;
    description: string;
    rate: string;
    term: string;
    icon: LucideIcon;
    featured: boolean;
    features: string[];
}

interface FinancingCardProps {
    plan: FinancingPlan;
    index: number;
}

const FinancingCard = ({ plan, index }: FinancingCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative group ${plan.featured ? 'lg:-mt-8' : ''}`}
        >
            {plan.featured && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-10"
                >
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Most Popular
                </motion.div>
            )}

            <div className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${plan.featured
                    ? 'shadow-2xl border-2 border-teal-500 lg:scale-105'
                    : 'shadow-lg hover:shadow-2xl border border-gray-200'
                }`}>
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Corner Accent */}
                <motion.div
                    animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl ${plan.featured ? 'bg-teal-400' : 'bg-gray-300'
                        }`}
                />

                <div className="relative p-8">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${plan.featured
                                ? 'bg-gradient-to-br from-teal-600 to-teal-700'
                                : 'bg-gradient-to-br from-gray-700 to-gray-800'
                            }`}
                    >
                        <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    {/* Pricing */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-bold text-gray-900">{plan.rate}%</span>
                            <span className="text-gray-600">APR</span>
                        </div>
                        <p className="text-sm text-gray-500">{plan.term}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? 'bg-teal-100' : 'bg-gray-100'
                                    }`}>
                                    <Check className={`w-3 h-3 ${plan.featured ? 'text-teal-700' : 'text-gray-700'}`} />
                                </div>
                                <span className="text-sm text-gray-700">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group/btn transition-all ${plan.featured
                                ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg hover:shadow-xl'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                            }`}
                    >
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
        </motion.div>
    );
};

interface ProcessStepData {
    title: string;
    description: string;
}

interface ProcessStepProps {
    step: ProcessStepData;
    index: number;
    total: number;
}

const ProcessStep = ({ step, index, total }: ProcessStepProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
            >
                {/* Connecting Line */}
                {index < total - 1 && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                        className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 origin-left"
                    />
                )}

                {/* Step Number Circle */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-xl mb-6 relative z-10"
                >
                    <span className="text-4xl font-bold text-white">{index + 1}</span>
                </motion.div>

                {/* Step Content */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                </div>
            </motion.div>
        </div>
    );
};

const NOKFinancePage = () => {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const financingPlans = [
        {
            name: "Solar Starter",
            description: "Perfect for residential solar installations",
            rate: "4.99",
            term: "Up to 10 years",
            icon: PiggyBank,
            featured: false,
            features: [
                "Zero down payment options",
                "Flexible payment terms",
                "Tax credit assistance",
                "Energy savings guarantee",
                "Free system monitoring"
            ]
        },
        {
            name: "Business Power",
            description: "Ideal for commercial energy systems",
            rate: "3.99",
            term: "Up to 15 years",
            icon: TrendingUp,
            featured: true,
            features: [
                "Customized payment plans",
                "Priority approval process",
                "Dedicated account manager",
                "Advanced analytics dashboard",
                "ROI optimization consulting",
                "Fleet financing available"
            ]
        },
        {
            name: "Enterprise Scale",
            description: "Large-scale industrial solutions",
            rate: "3.49",
            term: "Up to 20 years",
            icon: BarChart3,
            featured: false,
            features: [
                "Volume discounts",
                "Custom financing structures",
                "White-glove service",
                "Performance guarantees",
                "Extended warranty options"
            ]
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: "Credit Protection",
            description: "Your credit score won't be affected during pre-qualification"
        },
        {
            icon: Clock,
            title: "Fast Approval",
            description: "Get approved in as little as 24 hours with minimal paperwork"
        },
        {
            icon: Percent,
            title: "Competitive Rates",
            description: "Industry-leading rates with transparent terms and no hidden fees"
        },
        {
            icon: Calculator,
            title: "Payment Flexibility",
            description: "Choose payment schedules that match your cash flow needs"
        },
        {
            icon: FileText,
            title: "Simple Process",
            description: "Streamlined application with digital document management"
        },
        {
            icon: Target,
            title: "ROI Focused",
            description: "Solutions designed to maximize your return on investment"
        }
    ];

    const processSteps = [
        {
            title: "Apply Online",
            description: "Complete our simple online application in just 5 minutes"
        },
        {
            title: "Get Pre-Approved",
            description: "Receive your pre-approval decision within 24 hours"
        },
        {
            title: "Customize Terms",
            description: "Work with our team to finalize your perfect payment plan"
        },
        {
            title: "Start Saving",
            description: "Begin installation and start reducing your energy costs"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <Navbar />
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative min-h-screen flex items-center justify-center pt-20"
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-gray-900 to-gray-800" />

                        {/* Animated Orbs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.5, 0.3],
                                x: [0, 100, 0],
                                y: [0, 50, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute top-20 right-20 w-[600px] h-[600px] bg-teal-500/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2],
                                x: [0, -80, 0],
                                y: [0, 100, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity }}
                            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.25, 0.45, 0.25],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 25, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/20 rounded-full blur-3xl"
                        />

                        {/* Grid Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-5 mt-10"
                            >
                                <Zap className="w-5 h-5 text-teal-400" />
                                <span className="text-white font-semibold">Smart Financing Solutions</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                                Finance Your
                                <span className="block bg-gradient-to-r from-teal-400 via-green-300 to-blue-400 bg-clip-text text-transparent">
                                    Clean Energy Future
                                </span>
                            </h1>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                            >
                                Flexible financing options designed to make renewable energy accessible and affordable.
                                Start saving from day one with competitive rates and customized payment plans.
                            </motion.p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center gap-3 mx-auto sm:mx-0 group"
                                >
                                    <span>Calculate Your Savings</span>
                                    <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-3 mx-auto sm:mx-0"
                                >
                                    <span>View All Plans</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Floating Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15 max-w-4xl mx-auto mb-5"
                        >
                            {[
                                { value: "3.49%", label: "Starting APR", icon: Percent },
                                { value: "24hr", label: "Fast Approval", icon: Clock },
                                { value: "$0", label: "Down Payment", icon: DollarSign }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
                                >
                                    <stat.icon className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-gray-300">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                    >
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Financing Plans Section */}
            <div className="max-w-7xl mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-6 py-2 mb-6"
                    >
                        <CreditCard className="w-5 h-5" />
                        <span className="font-semibold">Financing Options</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect Plan
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored financing solutions for every scale, from residential to enterprise installations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                    {financingPlans.map((plan, index) => (
                        <FinancingCard key={index} plan={plan} index={index} />
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Why Finance With NOK?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience hassle-free financing with benefits designed for your success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} benefit={benefit} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-7xl mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Simple Application Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get started in four easy steps and begin your journey to energy independence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {processSteps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            step={step}
                            index={index}
                            total={processSteps.length}
                        />
                    ))}
                </div>
            </div>

            {/* ROI Calculator Teaser */}
            <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Calculator className="w-20 h-20 text-teal-400 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Calculate Your Energy Savings
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            See how much you could save with our interactive ROI calculator.
                            Get personalized estimates based on your energy needs and location.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-teal-900 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition-all inline-flex items-center gap-3"
                        >
                            <span>Try Calculator</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Power Your Future?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who have made the switch to clean energy with NOK financing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl"
                            >
                                Apply Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                            >
                                Speak with Advisor
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default NOKFinancePage;