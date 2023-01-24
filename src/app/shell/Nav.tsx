export default function Nav() {
  return (
    <nav className="w-full h-[60px] text-xl text-green-600 font-semibold bg-slate-700 flex items-center justify-center">
      <span className="block w-[45px] h-[45px] mr-8 p-[2px] bg-black text-md flex justify-center items-center">
        <span className="text-white font-extrabold">H</span>
        <span className="block ml-1 mb-2 w-[10px] h-[16px] bg-green-400"></span>
      </span>
      Weather Finder
    </nav>
  );
}
