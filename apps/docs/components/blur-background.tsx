export function BlurBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="from-primary/30 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r to-purple-500/20 opacity-70 blur-3xl"></div>

      <div className="absolute top-[30%] left-[20%] h-[400px] w-[400px] animate-pulse rounded-full bg-blue-500/10 opacity-60 blur-3xl delay-300"></div>
      <div className="bg-primary/10 absolute top-[60%] right-[20%] h-[500px] w-[500px] animate-pulse rounded-full opacity-50 blur-3xl delay-700"></div>

      <div className="absolute top-[20%] right-[30%] h-[200px] w-[200px] animate-pulse rounded-full bg-pink-500/20 opacity-40 blur-3xl delay-1000"></div>
      <div className="absolute bottom-[15%] left-[35%] h-[250px] w-[250px] animate-pulse rounded-full bg-yellow-500/10 opacity-30 blur-3xl delay-500"></div>

      <div className="absolute top-[45%] right-[45%] h-[350px] w-[350px] animate-pulse rounded-full bg-green-500/10 opacity-30 blur-3xl delay-300"></div>
      <div className="absolute right-[25%] bottom-[30%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/15 opacity-40 blur-3xl delay-1000"></div>
    </div>
  );
}
