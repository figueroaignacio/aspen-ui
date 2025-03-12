import { Button } from "@/components/ui/button";
import { heroLinks, technologies } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 min-h-[80dvh] flex flex-col justify-center">
      <div className="mx-auto lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 w-full">
            <div className="inline-block rounded-full bg-primary px-3 py-1 text-sm rounded-sm">
              Open-source UI components
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-pink-600 text-transparent bg-clip-text">
              UI Components for your web projects
            </h1>

            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
              A collection of customizable, open-source components that work
              seamlessly with your workflow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {heroLinks.map((item, index) => (
              <Button key={index} variant={item.variant}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center justify-center`}
                >
                  {item.label}
                  <span className="ml-2 inline-block">{item.icon}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="w-full max-w-2xl mx-auto mt-12 pt-8 border-t border-border">
            <h3 className="text-base font-medium text-muted-foreground mb-4">
              Perfect for projects built with
            </h3>

            <ul className="flex justify-center flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm"
                >
                  {tech.icon}
                  {tech.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 w-full max-w-md mx-auto">
            <div className="p-4 rounded-lg text-sm text-center ">
              <p>
                Over <span className="font-bold text-foreground">5,000+</span>{" "}
                developers already using our components
              </p>
              <p>
                Over{" "}
                <span className="font-bold text-foreground">20 components</span>{" "}
                ready to use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
}
