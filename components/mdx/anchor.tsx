import { cn } from "@/lib/utils";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: boolean;
}

export const Anchor = ({ className, icon = false, ...props }: AnchorProps) => (
  <a
    className={cn(
      "font-medium underline-offset-4 hover:underline flex items-center underline",
      className
    )}
    {...props}
    target="_blank"
  >
    <span>{props.children}</span>
    {icon && <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />}
  </a>
);
