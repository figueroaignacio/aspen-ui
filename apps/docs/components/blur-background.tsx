export function BlurBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="from-primary/30 absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-gradient-to-r to-purple-500/20 opacity-30 blur-3xl sm:opacity-70" />

      <div className="absolute top-[30%] left-[20%] h-[400px] w-[400px] animate-pulse rounded-full bg-blue-500/10 opacity-40 blur-3xl delay-300 sm:opacity-80" />
      <div className="bg-primary/10 absolute top-[60%] right-[20%] h-[500px] w-[500px] animate-pulse rounded-full opacity-25 blur-3xl delay-700 sm:opacity-50" />

      <div className="absolute top-[20%] right-[30%] h-[200px] w-[200px] animate-pulse rounded-full bg-pink-500/20 opacity-20 blur-3xl delay-1000 sm:opacity-40" />

      <div className="absolute top-[45%] right-[45%] h-[350px] w-[350px] animate-pulse rounded-full bg-green-500/10 opacity-15 blur-3xl delay-300 sm:opacity-30" />
      <div className="absolute right-[25%] bottom-[30%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/15 opacity-20 blur-3xl delay-1000 sm:opacity-40" />
    </div>
  );
}
