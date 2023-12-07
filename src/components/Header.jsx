function Header() {
  return (
    <div className="mt-6 grid grid-cols-[1fr_2fr] grid-rows-2 place-items-center">
      <img
        className="w-32 h-32 row-span-2 rounded-lg"
        src="/src/assets/headshot.jpg"
        alt=""
      />
      <h1 className="text-3xl font-bold text-slate-300">Ryan Peterson</h1>
      <h2 className="text-xl font-bold text-slate-300">Software Engineer</h2>
    </div>
  );
}
export default Header;
