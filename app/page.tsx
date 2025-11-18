import React from 'react'
import Hero from './components/Hero'
import { About } from './components/About'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import { Contact } from './components/Contact'
import { FloatingNav } from './components/ui/floating-navbar'
import { navItems } from './Data/navItems'
export const metadata = {
  title: "Sasank Kukalakunta - Full Stack Developer",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sasank Kukalakunta",
      url: "https://sasankkukalakunta.com",
      jobTitle: "Full Stack Developer",
    }),
  },
};

const page = () => {
  return (
    <>
      {/* NAV ALWAYS ON TOP */}
      <FloatingNav navItems={navItems}  />

      {/* FULL SCREEN HERO SECTION (background effects work here) */}
      <Hero />

      {/* MAIN CONTENT SECTION WITH DARK BACKGROUND */}
      <main className="dark:bg-black flex justify-center mx-auto px-5 sm:px-10">
        <div className="max-w-7xl w-full">
          <About />
          <RecentProjects />
          <Testimonials />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default page
