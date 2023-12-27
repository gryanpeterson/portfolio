import headshot from "/src/assets/headshot.jpg";

function Header() {
  return (
    <div className="flex flex-col items-center justify-between mx-2 mt-8">
      <img
        className="row-span-2 rounded-full w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48"
        src={headshot}
        alt="A headshot of Ryan Peterson"
      />
      <h1 className="my-2 text-3xl font-extrabold text-slate-300">
        Ryan Peterson
      </h1>
      <h2 className="my-2 text-lg font-bold text-slate-300">
        Front-End Engineer
      </h2>
      <h3 className="mx-4 my-2 text-sm italic text-center sm:mx-32 md:mx-48 lg:mx-12 xl:mx-32 2xl:mx-48 text-slate-400">
        Building websites and web applications that are beautiful, responsive,
        and accessible.
      </h3>
    </div>
  );
}
export default Header;
