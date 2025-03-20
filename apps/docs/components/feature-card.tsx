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
      <div className="bg-highlighted-gradient" />
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
