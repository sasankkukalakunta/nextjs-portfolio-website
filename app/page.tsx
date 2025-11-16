import React from 'react'
import Hero from './components/Hero'
import { SpotlightNewDemo } from './components/SpotlightNewDemo'
import { About } from './components/About'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import { Contact } from './components/Contact'
import { FloatingNav } from './components/ui/floating-navbar'
import { navItems } from './Data/navItems'
const page = () => {
  return (
<main className=" dark:bg-black flex justify-center mx-auto px-5 sm:px-10">
     <div className='w-full max-w-7xl'>
      <FloatingNav navItems={navItems}/>
       <Hero/>
       <About />
       <RecentProjects />
       <Testimonials />
       <Contact />
     </div>
   </main>
  )
}

export default page