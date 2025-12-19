"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ProductCard = ({ title, image, features, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="relative h-64 overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                >
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                {title}
            </h3>
            <div className="space-y-3 p-6">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3"
                    >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center mt-0 5">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const NOKEnergyWebsite = () => {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

    const products = [
        {
            title: "Battery & Inverter Systems",
            image: "/pexels-elite-power-group-661996115-33751638.jpg",
            features: [
                'High- and low-voltage lithium packs',
                "Hybrid-ready with solar, grid, or generator",
                'Remote monitioring via web and mobile'
            ]
        },
        {
            title: "Solar Power Systems",
            image: "/pexels-cristian-rojas-8853500.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "Electric Tricycles",
            image: "/pexels-denniz-futalan-339724-7100690.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "Software Solutions",
            image: "/pexels-markus-winkler-1430818-19825349.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "EV & LFP Chargers",
            image: "/chuttersnap-p8pqOtmgwco-unsplash.jpg",
            features: [
                "High- and low-volatage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "Solar & Security Lights",
            image: "/pexels-pluyar-1135453.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "Industrial & Agricultural Equipment",
            image: "/pexels-nc-farm-bureau-mark-2255801.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
        {
            title: "Solar-Powered Cooling",
            image: "/pexels-airamdphoto-16592625.jpg",
            features: [
                "High- and low-voltage packs",
                "Hybrid-ready with solar, grid, or generator",
                "Remote monitoring via web and mobile"
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <motion.div
                style={{ opacity: headerOpacity }}
                className="relative h-[70vh] overflow-hidden"
            >
                <div className="absolute inset-0">
                    <img src="/shinichiro-ichimura-MkKK8fH3dpA-unsplash.jpg" alt="image of a wind turbine" className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                            About Us.
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
                        >
                            Powering progress. Building trust. Driving change.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const isLastRowCentered =
                            index >= products.length - 2 && products.length % 3 === 2;

                        return (
                            <div
                                key={index}
                                className={
                                    isLastRowCentered
                                        ? "lg:col-span-1 lg:justify-self-center"
                                        : ""
                                }
                            >
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    features={product.features}
                                    index={index}
                                />
                            </div>
                        );
                    })}

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default NOKEnergyWebsite;