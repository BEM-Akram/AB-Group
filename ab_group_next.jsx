// Project: AB Group - AB Digital (Next.js static export)
// Description: Light-minimal agency website (Home, About, Services, Case Studies, Pricing, Contact)
// Tech: Next.js (pages), TailwindCSS, simple animations. Exportable with `next export` for GitHub Pages.

// FILE: package.json
{
  "name": "ab-digital-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "start": "next start",
    "deploy:gh": "npm run build && npm run export && touch out/.nojekyll && gh-pages -d out"
  },
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "gh-pages": "5.0.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.5.4"
  }
}

// FILE: tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#111111',
        accent: '#1f2937'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};

// FILE: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// FILE: pages/_app.js
import '../styles/globals.css'
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// FILE: pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PortfolioGrid from '../components/PortfolioGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>AB Digital — Strategic Digital & Growth</title>
        <meta name="description" content="AB Digital — premium digital agency. Performance marketing, creative strategy, web & branding." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Services />
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-8">Selected Work</h2>
          <PortfolioGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}

// FILE: pages/about.js
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function About(){
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header/>
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif mb-6">About AB Group</h1>
        <p className="text-lg leading-relaxed">AB Group is a collective of projects and ventures. AB Digital is our agency — focused on growth marketing, paid ads, and branding for ambitious businesses. We combine data-driven strategy with premium creative to push results and build memorable brands.</p>
      </main>
      <Footer/>
    </div>
  )
}

// FILE: pages/services.js
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Services(){
  const items = [
    {title:'Paid Social (Facebook & Instagram)', desc:'High ROI campaigns, creative testing, retargeting funnels.'},
    {title:'Brand & Identity', desc:'Logo systems, positioning, visual language that feels premium.'},
    {title:'Web & Landing Pages', desc:'Fast-converting, responsive sites optimized for performance.'},
    {title:'Growth Strategy', desc:'Cohesive roadmap from acquisition to retention.'}
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header/>
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif mb-8">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it)=> (
            <div key={it.title} className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

// FILE: pages/case-studies.js
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function CaseStudies(){
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header/>
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif mb-8">Case Studies</h1>
        <p className="text-gray-700">Placeholder case studies — replace with real client stories, metrics, and visuals.</p>
      </main>
      <Footer/>
    </div>
  )
}

// FILE: pages/pricing.js
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Pricing(){
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header/>
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif mb-8">Pricing</h1>
        <p className="text-gray-700">Transparent, project-based pricing. Contact for a tailored quote.</p>
      </main>
      <Footer/>
    </div>
  )
}

// FILE: pages/contact.js
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Contact(){
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header/>
      <main className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif mb-6">Contact</h1>
        <p className="mb-6">Interested in working together? Send a short message — we’ll reply within 48 hours.</p>
        <form className="space-y-4" action="https://formspree.io/f/your-id" method="POST">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input name="name" required className="w-full p-3 border rounded" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="sr-only">Email</span>
            <input name="email" type="email" required className="w-full p-3 border rounded" placeholder="Email" />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea name="message" required className="w-full p-3 border rounded" rows="6" placeholder="Brief project description"></textarea>
          </label>
          <button type="submit" className="px-6 py-3 bg-black text-white rounded">Send</button>
        </form>
      </main>
      <Footer/>
    </div>
  )
}

// FILE: components/Header.js
export default function Header(){
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif">AB<span className="text-sm ml-2 font-sans">Digital</span></div>
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/case-studies" className="hover:underline">Case Studies</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}

// FILE: components/Hero.js
export default function Hero(){
  return (
    <section className="py-24 flex items-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-serif leading-tight mb-6">AB Digital — premium growth for ambitious brands</h1>
        <p className="text-lg text-gray-600 mb-8">We run measurable paid social, design brand systems, and build high-converting websites that scale. Serious results, refined aesthetic.</p>
        <div className="flex gap-4">
          <a href="/contact" className="px-6 py-3 border rounded">Start a project</a>
          <a href="/case-studies" className="px-6 py-3">See case studies</a>
        </div>
      </div>
    </section>
  )
}

// FILE: components/Services.js
export default function Services(){
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-6">What we do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Paid Social</h3>
          <p className="text-gray-600">Creative-led ad funnels focused on ROI and scaling.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Branding</h3>
          <p className="text-gray-600">Identity systems that position your brand as premium.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Web Design</h3>
          <p className="text-gray-600">Fast, accessible, conversion-optimized landing pages.</p>
        </div>
      </div>
    </section>
  )
}

// FILE: components/PortfolioGrid.js
export default function PortfolioGrid(){
  const items = [1,2,3,4]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map(i=> (
        <div key={i} className="h-56 bg-gray-100 flex items-end p-6 rounded">
          <div>
            <h4 className="font-semibold">Project {i}</h4>
            <p className="text-sm text-gray-600">Short description — metrics when available.</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// FILE: components/Footer.js
export default function Footer(){
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <div className="font-serif">AB Digital</div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} AB Group — All rights reserved</div>
      </div>
    </footer>
  )
}

// FILE: styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  @apply bg-white text-gray-900;
}

.font-sans { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.font-serif { font-family: 'Playfair Display', serif; }

// FILE: public/favicon.ico
// (placeholder) - replace with your favicon

// FILE: README.md
# AB Digital — Next.js static site

This project is a minimal, premium-looking agency site built for AB Group / AB Digital. It's configured to be exported statically (next export) so you can host it for free on GitHub Pages.

## Quick start
1. Install deps: `npm install`
2. Run dev: `npm run dev`
3. Build & export: `npm run build && npm run export`
4. The static export will be in `out/`.

## Deploy to GitHub Pages (simple)
1. Create a GitHub repo named `yourusername.github.io` or any repo.
2. Add this project, commit, push.
3. Install `gh-pages` if not included: `npm i -D gh-pages` (already in package.json dev deps).
4. Run: `npm run deploy:gh` (this builds, exports, and pushes `out/` to `gh-pages` branch)
5. In GitHub repo settings → Pages, set source to `gh-pages` branch.
6. Add a `CNAME` file in `public/` with your custom domain (e.g. `abgroup.com`) before exporting, or set domain in GitHub Pages settings.

## Custom domain / DNS
- For root/apex domain (example.com), add A records pointing to GitHub Pages IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- For `www.example.com`, add a CNAME to `yourusername.github.io`.
- After DNS updates, set the custom domain in the repo Pages settings and GitHub will provision HTTPS.

## Editability
All pages are regular React components under `pages/`. Edit text, replace images in `public/`, and push changes.

