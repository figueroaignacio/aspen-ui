import { Button } from "../components/button/button";

export function ButtonsShowcase() {
  const variants = [
    "primary",
    "secondary",
    "outline",
    "destructive",
    "ghost",
    "link",
  ] as const;
  const sizes = ["icon", "lg", "default", "sm"] as const;

  return (
    <>
      <h2>Variants</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>
      <h2>Sizes</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {sizes.map((size) => (
          <Button key={size} size={size}>
            {size === "icon" ? "I" : "Click me"}
          </Button>
        ))}
      </div>
    </>
  );
}
