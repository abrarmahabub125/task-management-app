const Header = () => {
  const showMenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("right-0");
  };
  const hideMenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.remove("right-0");
  };
  const showTaskMenu = () => {
    const taskMenu = document.querySelector(".task-menu");
    taskMenu.classList.toggle("left-0");
  };
  return (
    <div className="bg-neutral-950">
      <div className="px-4 py-2 md:py-3 flex justify-between items-center xl:max-w-[1200px] mx-auto">
        <h1 className="text-white font-semibold md:text-lg">
          CS — Ticket System
        </h1>
        <div className="flex gap-2">
          <button
            onClick={showTaskMenu}
            className="size-6 lg:hidden text-white text-sm bg-linear-to-l from-violet-500 to-violet-400 rounded flex items-center justify-center"
          >
            T
          </button>
          <button
            onClick={showMenu}
            className="size-6 lg:hidden flex justify-center items-center rounded bg-linear-to-l from-green-400 to-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <ul className="fixed z-50 -right-96 top-0 h-screen w-64 bg-neutral-950 text-white flex flex-col gap-6 px-5 transition-all duration-300  lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:px-0 lg:transition-none  lg:duration-0">
          <li className="flex justify-between items-center mt-4 lg:hidden">
            <h1 className="text-lg font-semibold">CS — Ticket System</h1>
            <button onClick={hideMenu} className="transition hover:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              Changelog
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              Download
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <button className="px-6 py-2 flex items-center bg-linear-to-l from-violet-500 to-violet-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 inline-block mr-2 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
