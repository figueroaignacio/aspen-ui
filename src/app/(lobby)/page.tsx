export default function page() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-5">
      <div>
        <h1 className="text-5xl font-bold gradient-text">
          Copy and Paste componenents into your project
        </h1>
        <p className="text-foreground">
          Modern, customizable, and simple components to build your system
          design and easy-to-use
        </p>
      </div>
      <div className="flex gap-3 ">
        <button className="border-[.0625rem] px-4 py-2 border-border rounded-lg">
          Get started
        </button>
        <button className="border-[.0625rem] px-4 py-2 border-border rounded-lg">
          Github
        </button>
      </div>
    </section>
  );
}
