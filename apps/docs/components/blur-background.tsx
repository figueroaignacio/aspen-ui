export function BlurBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/20 blur-3xl opacity-70 animate-pulse"></div>

      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl opacity-60 animate-pulse delay-300"></div>
      <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl opacity-50 animate-pulse delay-700"></div>

      <div className="absolute top-[20%] right-[30%] w-[200px] h-[200px] rounded-full bg-pink-500/20 blur-3xl opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-[15%] left-[35%] w-[250px] h-[250px] rounded-full bg-yellow-500/10 blur-3xl opacity-30 animate-pulse delay-500"></div>

      <div className="absolute top-[45%] right-[45%] w-[350px] h-[350px] rounded-full bg-green-500/10 blur-3xl opacity-30 animate-pulse delay-300"></div>
      <div className="absolute bottom-[30%] right-[25%] w-[300px] h-[300px] rounded-full bg-indigo-500/15 blur-3xl opacity-40 animate-pulse delay-1000"></div>
    </div>
  );
}
