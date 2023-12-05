function Header() {
  return (
    <div className="flex flex-row items-center w-full justify-evenly">
      <img
        className="rounded-full w-28 h-28"
        src="/src/assets/headshot.jpg"
        alt=""
      />
      <h1 className="text-3xl font-bold">Ryan Peterson</h1>
    </div>
  );
}
export default Header;
