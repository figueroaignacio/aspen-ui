import {
  CssIcon,
  Github,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";
import {
  ArrowRightIcon,
  CodeIcon,
  ColorWheelIcon,
  MobileIcon,
  MoonIcon,
  Pencil1Icon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export const features = [
  {
    icon: <Pencil1Icon className="size-5" />,
    title: "Customizable",
    description: "Easily adapt UI to match your brand identity.",
  },
  {
    icon: <MobileIcon className="size-5" />,
    title: "Responsive Design",
    description: "Seamless experiences on all devices.",
  },
  {
    icon: <CodeIcon className="size-5" />,
    title: "Developer Experience",
    description: "Intuitive and detailed documentation.",
  },
  {
    icon: <MoonIcon className="size-5" />,
    title: "Dark Mode",
    description: "Built-in dark mode for better low-light UX.",
  },
  {
    icon: <TypescriptIcon />,
    title: "TypeScript",
    description: "Type-safe development with TypeScript.",
  },
  {
    icon: <TailwindIcon />,
    title: "Tailwind CSS",
    description: "Tailwind CSS components supported for quick styling.",
  },
  {
    icon: <CssIcon />,
    title: "CSS Modules",
    description: "CSS Modules components supported for scoped styles.",
  },

  {
    icon: <ColorWheelIcon className="size-5" />,
    title: "Theming",
    description: "Consistent design with robust theming.",
  },
  {
    icon: <ReaderIcon className="size-5" />,
    title: "Documentation",
    description: "Comprehensive, example-rich documentation.",
  },
];

export const technologies = [
  { title: "Typescript", icon: <TypescriptIcon /> },
  { title: "React.js", icon: <ReactIcon /> },
  { title: "Next.js", icon: <NextIcon /> },
  { title: "Tailwind", icon: <TailwindIcon /> },
];

export const heroLinks = [
  {
    label: "Get Started",
    href: "/docs",
    icon: <ArrowRightIcon className="w-5 h-5" />,
    variant: "primary" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/figueroaignacio/aspen-ui",
    icon: <Github />,
    variant: "ghost" as const,
  },
];
