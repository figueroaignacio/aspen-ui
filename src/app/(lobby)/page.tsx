export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-5 py-56">
      <div className="text-pretty">
        <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
          Simple components to copy and paste
        </h1>
        <p className="text-foreground text-sm">
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
