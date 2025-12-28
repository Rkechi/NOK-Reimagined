'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f3faf6] text-slate-900">
      {/* Top navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[url('/haythem-gataa-P6kIGVeys-0-unsplash.jpg')] bg-cover bg-center bg-no-repeat py-10">
        <div className="absolute inset-0 bg-slate-900/50" />

        {/* Animated background orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl"
        />

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 pb-16 pt-16 text-center sm:px-6 md:pb-24 md:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300"
            >
              Clean-energy and mobility solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Clean Energy.
              <br />
              Smarter Mobility.
              <br />
              Practical Solutions.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-2 max-w-xl text-balance text-sm text-slate-200/80 md:text-base"
            >
              Power your home, business, and community with flexible solar,
              smart batteries, and electric mobility that just works.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-500"
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="#product"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Explore Products
                <span className="text-lg">→</span>
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="text-3xl text-white/60">↓</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 lg:px-0">
        {/* Intro */}
        <IntroSection />

        {/* Why choose us - bento grid */}
        <BentoGrid />

        {/* CTA banner */}
        <CTABanner />

        {/* Contact form */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// Intro Section Component
function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid items-center gap-8 rounded-3xl bg-white px-4 py-10 shadow-xl shadow-emerald-900/5 sm:px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:px-10 md:py-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-56 w-full overflow-hidden rounded-3xl md:h-80"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src="/chuttersnap-p8pqOtmgwco-unsplash.jpg"
            alt="About NOK Inc"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4 text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          About NOK Inc
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          At NOK Inc, we help homes, businesses, and communities
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          Take control of their energy and transport. From reliable solar
          power and smart batteries to electric tricycles and cooling
          systems, our portfolio is designed to reduce costs, cut emissions,
          and keep life moving.
        </p>
      </motion.div>
    </motion.section>
  );
}

// Bento Grid Component
function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const tiles = [
    {
      title: "Reliable",
      icon: "🌱",
      description: "High-quality components, certified installers, and 24/7 support keep your power and mobility online when it matters most.",
      tag: "Homes • Businesses • Communities",
      className: "md:col-span-2 md:row-span-2",
      bgColor: "bg-white",
      textColor: "text-slate-900",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Affordable",
      icon: "💸",
      description: "Lower running costs than diesel with flexible financing and pay-as-you-save options.",
      className: "md:col-span-2",
      bgColor: "bg-emerald-600",
      textColor: "text-slate-50",
      iconBg: "bg-emerald-500 text-white",
    },
    {
      title: "Simple",
      icon: "✅",
      description: "Easy to buy, install, and use with clear guides and mobile apps.",
      className: "",
      bgColor: "bg-white",
      textColor: "text-slate-900",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Scalable",
      icon: "📈",
      description: "Start small and expand as your needs grow, from single sites to full fleets.",
      className: "",
      bgColor: "bg-white",
      textColor: "text-slate-900",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Sustainable",
      icon: "🌍",
      description: "Cleaner, quieter, and better for communities and the planet with every kilowatt-hour.",
      className: "col-span-2",
      bgColor: "bg-slate-900",
      textColor: "text-slate-50",
      iconBg: "bg-emerald-500 text-white",
    },
    {
      title: "Backed by Experts",
      icon: "🧠",
      description: "Decades of engineering and on-the-ground deployment experience across emerging markets.",
      className: "",
      bgColor: "bg-white",
      textColor: "text-slate-900",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <section ref={ref} id="product" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 text-center"
      >
        <div className="flex text-center align-center justify-center">
          <Image src="/Nok-logo-standalone-2.png" width={20} height={20} alt="logo" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Why Choose Us
          </p>
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Why Nok Rocks Your World
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4 sm:gap-6 md:grid md:grid-cols-4 md:auto-rows-[minmax(160px,1fr)]">
        {tiles.map((tile, index) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className={`flex flex-col justify-between rounded-3xl ${tile.bgColor} px-5 py-5 sm:px-6 sm:py-6 ${tile.textColor} shadow-md shadow-emerald-900/5 ${tile.className} cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${tile.iconBg}`}
              >
                <span className="text-xl">{tile.icon}</span>
              </motion.div>
              <h3 className="text-lg font-semibold">{tile.title}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${tile.textColor.includes('slate-900') ? 'text-slate-600' : 'text-emerald-50/90'}`}>
              {tile.description}
            </p>
            {tile.tag && (
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-emerald-600">
                {tile.tag}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// CTA Banner Component
function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="services"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-xl shadow-emerald-900/40"
    >
      <div className="relative grid items-stretch gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:px-10 md:py-12 bg-[url('/waldemar-brandt-rHfTdK9YU2Q-unsplash.jpg')] bg-cover bg-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        {/* Animated gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl text-white">
              Join the Nok Revolution
            </h2>
            <p className="text-sm leading-relaxed text-slate-200 md:text-base">
              Thousands of happy folks are already powering their lives with
              Nok&apos;s clean energy and mobility solutions. Discover how we
              can help you electrify your home, fleet, or community.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-400"
            >
              Get in Touch
              <span className="text-lg">→</span>
            </motion.a>

            <motion.a
              href="#product"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-transparent px-7 py-3 text-sm font-semibold text-slate-50 transition hover:bg-slate-800"
            >
              Explore Products
              <span className="text-lg">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Contact Section Component
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-10">
      <motion.section
        ref={ref}
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid gap-8 rounded-3xl py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:gap-10 md:py-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Let&apos;s power your next project
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            Tell us a bit about your home, business, or community. Our team
            will follow up with a tailored proposal and clear next steps.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {["Solar + battery systems for homes and businesses", "Electric mobility fleets and charging infrastructure", "Cooling and backup power solutions"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 rounded-2xl bg-slate-50 px-4 py-6 sm:px-5 md:px-6 shadow-md shadow-emerald-900/10 border border-slate-200"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FocusInput id="name" label="Name" type="text" placeholder="Jane Doe" required />
            <FocusInput id="email" label="Email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FocusInput id="phone" label="Phone" type="tel" placeholder="+1 800 123 456 789" />
            <div className="space-y-1.5">
              <label
                htmlFor="interest"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
              >
                What are you interested in?
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                id="interest"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>Select an option</option>
                <option value="home-solar">Home solar &amp; battery</option>
                <option value="business-energy">Business / industrial energy</option>
                <option value="mobility">Mobility &amp; charging</option>
                <option value="community">Community projects</option>
                <option value="other">Other</option>
              </motion.select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
            >
              Project details
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              required
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
              placeholder="Share your location, timeline, and what you want to achieve."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500 md:w-auto"
          >
            Submit Request
            <span className="text-lg">→</span>
          </motion.button>

          <p className="pt-1 text-xs text-slate-500">
            By submitting this form, you agree that we may contact you about
            Nox products and services. We respect your privacy and never share
            your details without permission.
          </p>
        </motion.form>
      </motion.section>
    </div>
  );
}

// Reusable Focus Input Component
function FocusInput({ id, label, type, placeholder, required = false }: { id: string; label: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
      >
        {label}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        id={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
        placeholder={placeholder}
      />
    </div>
  );
}
