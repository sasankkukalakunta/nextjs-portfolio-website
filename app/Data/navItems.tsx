import {
  IconHome,
  IconUser,
  IconCode,
  IconPhone,
  IconMessage,
} from "@tabler/icons-react";

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
    name: "Recent Projects",
    link: "#recent-projects",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
