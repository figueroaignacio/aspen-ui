// Components
import { FeatureCard } from "@/components/feature-card";

// Constants
import { features } from "@/lib/constants";

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
