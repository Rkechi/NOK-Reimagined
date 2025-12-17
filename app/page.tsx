import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3faf6] text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[url('/haythem-gataa-P6kIGVeys-0-unsplash.jpg')] bg-cover bg-center bg-h-full bg-no-repeat">
        <div className="absolute inset-0 bg-slate-900/50" />

        {/* Top navigation */}
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-0">
          <div className="flex items-center gap-3">
            <Image
              src="/NOK-Inc-Company-LogoFinal-02-1.webp"
              alt="NOK Inc logo"
              width={170}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex">
            <a href="#product" className="hover:text-emerald-300">
              Product
            </a>
            <a href="#services" className="hover:text-emerald-300">
              Services
            </a>
            <a href="#financing" className="hover:text-emerald-300">
              Financing
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              Contact
            </a>
            <a href="#about" className="hover:text-emerald-300">
              About
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-100 md:inline-flex md:items-center md:gap-2"
          >
            Get in Touch
            <span className="text-lg">↗</span>
          </a>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[calc(80vh-5rem)] items-center">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-10 text-center md:px-0 md:pb-32 md:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Clean-energy and mobility solutions
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Clean Energy.
              <br />
              Smarter Mobility.
              <br />
              Practical Solutions.
            </h1>
            <div className="mt-2 max-w-xl text-balance text-sm text-slate-200/80 md:text-base">
              Power your home, business, and community with flexible solar,
              smart batteries, and electric mobility that just works.
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-500"
              >
                Get in Touch
                <span className="text-lg">→</span>
              </a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Explore Products
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 lg:px-0">
        {/* Intro */}
        <section
          id="about"
          className="flex items-center gap-5 rounded-3xl px-1 py-10 shadow-xl shadow-emerald-900/5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:px-5 md:py-12 outline outline-slate-200"
        >
          <div className="h-64 rounded-3xl md:h-80 flex items-center justify-center align-center h-full object-cover" />
          <Image src="/chuttersnap-p8pqOtmgwco-unsplash.jpg" alt="About NOK Inc" width={500} height={500} className="rounded-3xl w-full h-full object-cover mr-10" />
          <div className="space-y-4 text-left h-full">
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
          </div>
        </section>

        {/* Why choose us - bento grid */}
        <section id="product" className="space-y-8">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Why Nox Rocks Your World
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4 auto-rows-[minmax(140px,1fr)]">
            {/* Reliable - large tile */}
            <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-white px-6 py-6 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  🌱
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Reliable
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                High-quality components, certified installers, and 24/7 support
                keep your power and mobility online when it matters most.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-emerald-600">
                Homes • Businesses • Communities
              </p>
            </div>

            {/* Affordable */}
            <div className="col-span-2 flex flex-col rounded-3xl bg-emerald-600 px-6 py-6 text-slate-50 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                  💸
                </div>
                <h3 className="text-lg font-semibold">Affordable</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-emerald-50/90">
                Lower running costs than diesel with flexible financing and
                pay-as-you-save options.
              </p>
            </div>

            {/* Simple */}
            <div className="flex flex-col rounded-3xl bg-white px-6 py-6 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✅
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Simple</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Easy to buy, install, and use with clear guides and mobile apps.
              </p>
            </div>

            {/* Scalable */}
            <div className="flex flex-col rounded-3xl bg-white px-6 py-6 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  📈
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Scalable
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Start small and expand as your needs grow, from single sites to
                full fleets.
              </p>
            </div>

            {/* Sustainable - wide bottom tile */}
            <div className="col-span-2 flex flex-col rounded-3xl bg-slate-900 px-6 py-6 text-slate-50 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                  🌍
                </div>
                <h3 className="text-lg font-semibold">Sustainable</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-100">
                Cleaner, quieter, and better for communities and the planet with
                every kilowatt-hour.
              </p>
            </div>

            {/* Backed by experts */}
            <div className="flex flex-col rounded-3xl bg-white px-6 py-6 shadow-md shadow-emerald-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  🧠
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Backed by Experts
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Decades of engineering and on-the-ground deployment experience
                across emerging markets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section
          id="services"
          className="overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-xl shadow-emerald-900/40"
        >
          <div className="relative grid items-stretch gap-10 px-6 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:px-12 md:py-12 bg-[url('/waldemar-brandt-rHfTdK9YU2Q-unsplash.jpg')] bg-cover bg-center md:h-auto">

            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold md:text-4xl text-white">
                  Join the Nox Revolution
                </h2>
                <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                  Thousands of happy folks are already powering their lives with
                  Nox&apos;s clean energy and mobility solutions. Discover how we
                  can help you electrify your home, fleet, or community.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-400"
                >
                  Get in Touch
                  <span className="text-lg">→</span>
                </a>

                <a
                  href="#product"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-transparent px-7 py-3 text-sm font-semibold text-slate-50 transition hover:bg-slate-800"
                >
                  Explore Products
                  <span className="text-lg">→</span>
                </a>
              </div>


            </div>
          </div>

        </section>

        {/* Contact form */}
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12">
          <section
            id="contact"
            className="grid gap-10 rounded-3xl py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:py-12"
          >
            <div className="space-y-10 space-x-10">
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
                <li>• Solar + battery systems for homes and businesses</li>
                <li>• Electric mobility fleets and charging infrastructure</li>
                <li>• Cooling and backup power solutions</li>
              </ul>
            </div>

            <form className="space-y-4 rounded-2xl bg-slate-50 px-5 py-6 md:px-6 shadow-md shadow-emerald-900/10 border border-slate-200">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                    placeholder="+1 800 123 456 789"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="interest"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="home-solar">Home solar &amp; battery</option>
                    <option value="business-energy">
                      Business / industrial energy
                    </option>
                    <option value="mobility">Mobility &amp; charging</option>
                    <option value="community">Community projects</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/20 transition focus:ring-2"
                  placeholder="Share your location, timeline, and what you want to achieve."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500 md:w-auto"
              >
                Submit Request
                <span className="text-lg">→</span>
              </button>

              <p className="pt-1 text-xs text-slate-500">
                By submitting this form, you agree that we may contact you about
                Nox products and services. We respect your privacy and never share
                your details without permission.
              </p>
            </form>
          </section>
        </div>
      </main>

        <footer className="mx-auto w-full max-w-full space-y-14 px-6 py-5 lg:px-0 text-center items-center bg-black/10 rounded-t-3xl border border-white/10" >
        <div className="mt-4 grid gap-6 border-t border-white/10 pt-6 text-md md:grid-cols-4 max-w-7xl mx-auto items-center text-center justify-between">
          <div className="md:col-span-1">
            <Image src="/NOK-Inc-Company-LogoFinal-02-2.webp" alt="NOK Inc logo" width={170} height={40} className="h-8 w-auto" />
          </div>

          <div className="">
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

        

        <div className="flex items-center gap-10 justify-between max-w-7xl mx-auto border-t-1 py-5">
          <div className="items-center gap-2 justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
              Follow us
            </p>
            <p className="mt-2 text-xs text-slate-500 flex items-center gap-10">
              <a href="https://www.facebook.com/NOKInc" className="hover:text-emerald-500 flex items-center gap-2 text-lg font-medium"><FaFacebook className="text-2xl" /> Facebook</a>
              <a href="https://www.instagram.com/NOKInc" className="hover:text-emerald-500 flex items-center gap-2 text-lg font-medium"><FaInstagram className="text-2xl" /> Instagram</a>
              <a href="https://www.twitter.com/NOKInc" className="hover:text-emerald-500 flex items-center gap-2 text-lg font-medium"><FaTwitter className="text-2xl" /> Twitter</a>
            </p>
          </div>
          <div className="flex items-center gap-12 justify-center text-black/50 text-lg font-medium">
            <a href="" className="hover:text-emerald-500"><p>Product</p></a>
            <a href="" className="hover:text-emerald-500"><p>Services</p></a>
            <a href="" className="hover:text-emerald-500"><p>Financing</p></a>
            <a href="" className="hover:text-emerald-500"><p>Contact</p></a>
            <a href="" className="hover:text-emerald-500"><p>About</p></a>
          </div>
        </div>

      </footer>
    </div>
  );
}
