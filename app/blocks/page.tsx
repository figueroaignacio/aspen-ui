// Components
import { BgBlur } from "@/components/bg-blur";

// Icons
import { CodeIcon } from "@radix-ui/react-icons";

export default function BlocksPage() {
  return (
    <section className="relative flex min-h-[80dvh] items-center justify-center p-4">
      <BgBlur />
      <div className="w-full max-w-md overflow-hidden rounded-xl">
        <div className="p-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CodeIcon className="h-8 w-8" />
            </div>
          </div>
          <h1 className="mb-4 text-center text-2xl font-bold text-foreground">
            {/* {t("title")} */}
          </h1>
          <div className="rounded-lg border-[1px] border-dashed border-border p-6">
            <p className="text-center text-sm text-foreground">
              {/* {t("description")} */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
