import React from "react";
import { Header } from "./resuablecomponets/Header";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const testimonials = [
  {
    quote:
      "Sasank completely elevated the look and feel of our product. The new React + Next.js front-end is faster, cleaner, and our customers noticed the difference immediately.",
    name: "Sarah Chen",
    designation: "Product Manager, Northbridge Retail Systems",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The implementation was seamless. He quickly understood our requirements and shipped a pixel-perfect UI with excellent performance and responsiveness across devices.",
    name: "Michael Rodriguez",
    designation: "CTO, Skyline Analytics",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Our internal tools went from clunky to delightful. The new dashboard reduced manual work for the ops team and made complex workflows feel intuitive.",
    name: "Emily Watson",
    designation: "Operations Director, CloudScale Logistics",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "From code quality to communication, everything was top-notch. Sasank shipped features reliably, wrote clean TypeScript, and was proactive about edge cases.",
    name: "James Kim",
    designation: "Engineering Lead, DataPro Systems",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The performance improvements on our Next.js app were huge. Lighthouse scores went up, and page interactions feel instantly responsive for our users.",
    name: "Lisa Thompson",
    designation: "VP of Technology, FutureNet Digital",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-16 scroll-mt-24"
      aria-label="Client testimonials"
    >
      {/* Text block with nice, even wrapping */}
      <div className="max-w-2xl mx-auto text-center px-4">
        <Header title="Testimonials" />
        <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          A few words from people I&apos;ve collaborated with on real-world
          projects—covering dashboards, internal tools, and modern web
          experiences.
        </p>
      </div>

      <div className="mt-10">
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
};

export default Testimonials;
