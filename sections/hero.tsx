// Components
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { heroLinks, technologies } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              UI Components for your web projects
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              A collection of customizable, open-source components that work
              seamlessly with your workflow.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Perfect for projects built with 👇
            </h3>
            <ul className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-card bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm rounded-md py-2 px-4 text-sm"
                >
                  {tech.icon}
                  {tech.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          {/* <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div> */}
          {/* <div className="relative z-10">
          <img
          src="/placeholder.svg?height=400&width=400"
          alt="Hero Illustration"
          className="w-full h-auto rounded-lg shadow-2xl"
          />
          </div> */}
        </div>
      </div>
    </section>
  );
}
