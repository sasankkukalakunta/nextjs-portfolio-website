import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

 export const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }, 
    {
      name: "RecentProjects",
      link: "#recent-projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
     {
      name: "Contact",
      link: "#contact",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  