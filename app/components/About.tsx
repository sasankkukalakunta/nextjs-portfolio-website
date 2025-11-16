import React from 'react'
import { Header } from './resuablecomponets/Header'

export const About = () => {
  return (
    <section id='about' className='my-20 mt-40'>
      <Header title="About Me" />
      <div className='grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr]'>
<div>
            <img src="/images/about-image.jpg" alt="About Me Image" width={500} height={500} className='w-full h-auto rounded-lg shadow-md' />
</div>
<div className='md:text-xl text-neutral-600 dark:text-neutral-300 mb-4'>
    <p className='mb-5'>
        hi I&apos;m Sasank Kukalakunta - a passionate Next.js full-stack developer and designer dedicated to crafting exceptional web applications. With a keen eye for design and a strong foundation in development, I specialize in creating responsive, user-friendly websites that not only look great but also perform seamlessly across all devices.
    </p>
     <p>
        My journey in web development began with a fascination for how technology can transform ideas into interactive experiences. Over the years, I have honed my skills in Next.js, React, and various design tools to deliver projects that exceed client expectations. Whether it&apos;s building a sleek portfolio site or a complex web application, I approach each project with creativity, precision, and a commitment to quality.
    </p>

    
</div>
      </div>
    </section>
  )
}
