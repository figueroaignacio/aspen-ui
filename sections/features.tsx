// Components
import { FeatureCard } from "@/components/feature-card";

// Icons
import { CssIcon, TailwindIcon, TypescriptIcon } from "@/components/icons";
import {
  CodeIcon,
  ColorWheelIcon,
  MobileIcon,
  MoonIcon,
  Pencil1Icon,
  ReaderIcon,
} from "@radix-ui/react-icons";

const features = [
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
    description: "Intuitive API and detailed documentation.",
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
    description: "Rapidly build designs with utility classes.",
  },
  {
    icon: <CssIcon />,
    title: "CSS Modules",
    description: "Scoped, reusable styles without conflicts.",
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

export function Features() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <h2 className="text-3xl font-bold  mb-12">Main Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <li key={index}>
              <FeatureCard
                description={feature.description}
                icon={feature.icon}
                title={feature.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
