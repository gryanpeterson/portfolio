function Header() {
  return (
    <div className="mt-6 mx-2 grid grid-cols-[1fr_2fr] grid-rows-2 place-items-center">
      <img
        className="row-span-2 rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
        src="/src/assets/headshot.jpg"
        alt=""
      />
      <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-7xl lg:text-9xl text-slate-300">
        Ryan Peterson
      </h1>
      <h2 className="text-lg font-bold text-center sm:text-2xl md:text-4xl lg:text-6xl text-slate-300">
        Front-End Engineer
      </h2>
    </div>
  );
}
export default Header;
