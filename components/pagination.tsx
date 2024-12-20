// Icons
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

// Components
import Link from "next/link";
// Utils
import { buttonVariants } from "@/components/ui/button";

interface PostPagePaginationProps {
  previousDoc: { slugAsParams: string; title: string } | null;
  nextDoc: { slugAsParams: string; title: string } | null;
}

export function Pagination({ previousDoc, nextDoc }: PostPagePaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between md:items-center mt-12 space-y-4 sm:space-y-0">
      {previousDoc ? (
        <Link
          href={`/docs/${previousDoc.slugAsParams}`}
          className={`group flex items-center justify-end gap-2 ${buttonVariants(
            "outline",
            "sm"
          )} rounded-md`}
        >
          <ArrowLeftIcon className="size-2 transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1" />
          <div className="text-left">
            <span className="block font-bold text-sm sm:text-md">
              {previousDoc.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}
      {nextDoc ? (
        <Link
          href={`/docs/${nextDoc.slugAsParams}`}
          className={`group flex items-center justify-end gap-2 ${buttonVariants(
            "outline",
            "sm"
          )} rounded-md`}
        >
          <div className="text-right">
            <span className="block font-bold text-sm sm:text-md">
              {nextDoc.title}
            </span>
          </div>
          <ArrowRightIcon className="size-2 transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1" />
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}
    </div>
  );
}
