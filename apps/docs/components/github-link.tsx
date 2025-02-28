import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function GitHubLink() {
  return (
    <Link
      href="google.com"
      target="_blank"
      className={buttonVariants({ variant: "ghost", size: "icon" })}
    >
      <GitHubLogoIcon />
    </Link>
  );
}
