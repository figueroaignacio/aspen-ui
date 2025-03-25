import { Link } from "@/i18n/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";

export function GitHubLink() {
  return (
    <Link
      href="google.com"
      target="_blank"
      className={`${buttonVariants({
        variant: "ghost",
        size: "icon",
      })}`}
    >
      <GitHubLogoIcon />
    </Link>
  );
}
