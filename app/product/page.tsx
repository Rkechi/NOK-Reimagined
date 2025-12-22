"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* ------------------------- Product Card ------------------------- */
const ProductCard = ({ title, image, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center p-1">
          {title}
        </h3>

        <div className="space-y-3 p-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>

              <span className="text-gray-700 text-sm leading-relaxed">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------- Page ------------------------- */
const NOKEnergyWebsite = () => {
  const { scrollYProgress } = useScroll();

  /* Parallax instead of opacity */
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);

  /* Scroll-based blur */
  const heroBlur = useTransform(scrollYProgress, [0, 0.35], ["blur(0px)", "blur(6px)"]);

  const products = [
    {
      title: "Battery & Inverter Systems",
      image: "/pexels-elite-power-group-661996115-33751638.jpg",
      features: [
        "High- and low-voltage lithium packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Solar Power Systems",
      image: "/pexels-cristian-rojas-8853500.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Electric Tricycles",
      image: "/pexels-denniz-futalan-339724-7100690.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Software Solutions",
      image: "/pexels-markus-winkler-1430818-19825349.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "EV & LFP Chargers",
      image: "/chuttersnap-p8pqOtmgwco-unsplash.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Solar & Security Lights",
      image: "/pexels-pluyar-1135453.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Industrial & Agricultural Equipment",
      image: "/pexels-nc-farm-bureau-mark-2255801.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
    {
      title: "Solar-Powered Cooling",
      image: "/pexels-airamdphoto-16592625.jpg",
      features: [
        "High- and low-voltage packs",
        "Hybrid-ready with solar, grid, or generator",
        "Remote monitoring via web and mobile",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ------------------------- Hero ------------------------- */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background */}
        <motion.div
          style={{ y: heroTranslateY, filter: heroBlur }}
          className="absolute inset-0"
        >
          <Image
            src="/shinichiro-ichimura-MkKK8fH3dpA-unsplash.jpg"
            alt="Wind turbine"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              About Us.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Powering progress. Building trust. Driving change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------- Product Grid ------------------------- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const isLastRowCentered =
              index >= products.length - 2 && products.length % 3 === 2;

            return (
              <div
                key={index}
                className={isLastRowCentered ? "lg:justify-self-center" : ""}
              >
                <ProductCard {...product} index={index} />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NOKEnergyWebsite;
