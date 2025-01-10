import { Button } from "../components/button/button";

export function ButtonsShowcase() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="link">Click me</Button>
    </div>
  );
}
