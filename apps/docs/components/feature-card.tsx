import { JSX } from "react";

// Components
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function FeatureCard({ description, icon, title }: FeatureCardProps) {
  return (
    <Card className="p-6 relative overflow-hidden h-full">
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_center_0%,theme(colors.gray.100/40)_5%,theme(colors.gray.100/0)_60%)] dark:bg-[radial-gradient(60%_30%_at_center_0%,theme(colors.gray.800/70)_1%,theme(colors.gray.900/0)_70%)] blur-lg" />
      <CardHeader className="gap-3 relative">
        {icon}
        <h2 className=" font-semibold">{title}</h2>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
