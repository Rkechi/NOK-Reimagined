"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-black/10 border-t border-white/10 mt-16">
      <div className="mt-4 grid gap-8 px-4 pt-6 text-sm max-w-7xl mx-auto items-start text-center sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4 sm:text-left">
        <div className="md:col-span-1">
          <Image
            src="/NOK-Inc-Company-LogoFinal-02-2.webp"
            alt="NOK Inc logo"
            width={170}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
            Working hours
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Mon – Fri: 7.00 – 22.00
            <br />
            Sat – Sun: 9.00 – 20.00
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
            We are here
          </p>
          <p className="mt-2 text-xs text-slate-500">
            27 Division St, New York,
            <br />
            NY 10002, USA
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
            Call us
          </p>
          <p className="mt-2 text-xs text-slate-500">
            +1 800 123 456 789
            <br />
            +1 800 987 654 321
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-white/10 py-5 max-w-7xl mx-auto px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="items-start gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
            Follow us
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:gap-6">
            <a
              href="https://www.facebook.com/NOKInc"
              className="flex items-center gap-2 text-base font-medium hover:text-emerald-500 sm:text-lg"
            >
              <FaFacebook className="text-2xl" /> Facebook
            </a>
            <a
              href="https://www.instagram.com/NOKInc"
              className="flex items-center gap-2 text-base font-medium hover:text-emerald-500 sm:text-lg"
            >
              <FaInstagram className="text-2xl" /> Instagram
            </a>
            <a
              href="https://www.twitter.com/NOKInc"
              className="flex items-center gap-2 text-base font-medium hover:text-emerald-500 sm:text-lg"
            >
              <FaTwitter className="text-2xl" /> Twitter
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-black/50 sm:justify-end sm:text-sm">
          <a href="#product" className="hover:text-emerald-500">
            Product
          </a>
          <a href="#services" className="hover:text-emerald-500">
            Services
          </a>
          <a href="#financing" className="hover:text-emerald-500">
            Financing
          </a>
          <a href="#contact" className="hover:text-emerald-500">
            Contact
          </a>
          <a href="#about" className="hover:text-emerald-500">
            About
          </a>
        </div>
      </div>
    </footer>
  );
}


