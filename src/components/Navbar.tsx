function Navbar() {
  return (
    <nav className="fixed px-6 py-6 transparent w-full">
      <div className="max-w-screen-md shadow-lg mx-auto flex px-3 py-1 rounded-full flex-row justify-between bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-pink-500/90">
        <a href="" className="">
          Sunny Poon
        </a>
        <ul className="flex flex-row gap-4">
          <li>
            <a href="" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
