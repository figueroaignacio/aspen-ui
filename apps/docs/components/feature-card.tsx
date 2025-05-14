import { JSX } from 'react';

// Components
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function FeatureCard({ description, icon, title }: FeatureCardProps) {
  return (
    <Card className="relative h-full overflow-hidden p-6">
      <div className="bg-highlighted-gradient" />
      <CardHeader className="relative gap-3">
        {icon}
        <h2 className="font-semibold">{title}</h2>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
