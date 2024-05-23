const App = () => {
  return (
    <div className="bg-[#161649fb] flex justify-center overflow-hidden items-center h-screen m-0 relative">
      <div className="flex absolute top-1/3 left-[-80px] -translate-y-1/2 -skew-x-12 -skew-y-12 rotate-[25deg] bg-[#28287dfb] w-[300px] h-[700px] opacity-50"></div>
      <div className="flex absolute bottom-1/3 left-[-80px] translate-y-1/2 skew-x-12 skew-y-12 -rotate-[25deg] bg-[#28287dfb] w-[300px] h-[700px] opacity-50"></div>
      <div className="flex absolute top-1/3 right-[-80px] -translate-y-1/2 -rotate-[25deg] skew-y-12 skew-x-12 bg-[#28287dfb] w-[300px] h-[700px] opacity-50"></div>
      <div className="flex absolute bottom-1/3 right-[-80px] translate-y-1/2 rotate-[25deg] -skew-y-12 -skew-x-12 bg-[#28287dfb] w-[300px] h-[700px] opacity-50"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-slate-400 font-bold text-5xl">LOGIN</h1>
        <input
          className="border text-white bg-[#1A2162] border-gray-600 pt-3 pb-3 pl-5 mt-5 w-[400px] text-lg"
          placeholder="Username"
          type="text"
        />
        <input
          className="border text-white bg-[#1A2162] border-gray-600 pt-3 pb-3 pl-5 mt-5 w-[400px] text-lg"
          placeholder="Password"
          type="password"
        />
        <button className="text-slate-200 text-lg border mt-5 pl-12 pr-12 p-2 hover:border-blue-900 hover:text-blue-950 hover:bg-gray-400 w-[200px] font-bold bg-[#28287dfb]">
          Login
        </button>
      </div>
    </div>
  );
};

export default App;
