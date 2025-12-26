"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          fixed inset-x-4 top-4 z-30 mx-auto max-w-7xl
          rounded-2xl border border-white/20
          bg-slate-700/40
          px-3 py-1 sm:px-4
          backdrop-blur-xl
          transition-all duration-300
          ${scrolled ? "bg-slate-900/70 shadow-xl" : "bg-slate-700/40"}
        `}
      >
        <div className="flex items-center justify-between gap-4 px-3 py-3 sm:px-4 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/NOK-Inc-Company-LogoFinal-02-1.webp"
              alt="NOK Inc logo"
              width={170}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex">
            {[
              { label: "Product", href: "/product" },
              { label: "Services", href: "/services" },
              { label: "Finance", href: "/finance" },
              { label: "Contact", href: "/contact" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition ${isActive
                    ? "text-emerald-400 font-semibold underline decoration-2 underline-offset-4"
                    : "hover:text-emerald-300"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/about"
              className={`transition ${pathname === "/about"
                ? "text-emerald-400 font-semibold underline decoration-2 underline-offset-4"
                : "hover:text-emerald-300"
                }`}
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-100 md:inline-flex"
            >
              Get in Touch ↗
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-black/40 p-2 text-slate-100 ring-1 ring-white/20 transition hover:bg-black/60 md:hidden"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? (
                <FaTimes className="h-4 w-4" />
              ) : (
                <FaBars className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed inset-x-4 top-24 z-50
              mx-auto max-w-7xl
              rounded-2xl border border-white/20
              bg-black/80 backdrop-blur-xl
              px-5 py-4 text-sm text-slate-50 md:hidden
            "
          >
            <div className="flex flex-col gap-3">
              {[
                { label: "Product", href: "/product" },
                { label: "Services", href: "/services" },
                { label: "Finance", href: "/finance" },
                { label: "Contact", href: "/contact" },
                { label: "About", href: "/about" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-1 font-medium transition ${isActive
                        ? "text-emerald-400 font-bold underline decoration-2 underline-offset-4"
                        : "hover:text-emerald-300"
                      }`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-900/40 transition hover:bg-emerald-500"
                onClick={() => setMobileNavOpen(false)}
              >
                Get in Touch →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
