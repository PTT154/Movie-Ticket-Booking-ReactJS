
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow cho navbar khi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Nếu scrollY > 0 thì scrolled = true (có shadow), ngược lại false
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-neutral-primary w-full z-9999 top-0 start-0 border-default fixed transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <div className="w-full flex flex-wrap items-center justify-between px-8 py-4"> */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/images/Star_Cinema_logo.svg.png"
            className="h-[80px]"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-sm md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-sm bg-neutral-secondary-soft md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink
                to="/"
                // className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0" : "block py-2 px-3 text-black bg rounded-sm md:bg-transparent md:text-black md:p-0"}
                aria-current="page"
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0" : "block py-2 px-3 text-black bg rounded-sm md:bg-transparent md:text-black md:p-0"}
              >
                Phim
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/showtimes"
                className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0" : "block py-2 px-3 text-black bg rounded-sm md:bg-transparent md:text-black md:p-0"}
              >
                Lịch chiếu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0" : "block py-2 px-3 text-black bg rounded-sm md:bg-transparent md:text-black md:p-0"}
              >
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0" : "block py-2 px-3 text-black bg rounded-sm md:bg-transparent md:text-black md:p-0"}
              >
                Liên hệ
              </NavLink>
            </li>
            <li>
              <a>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>

            <li>
              <button
                type="button"
                className="text-white bg-orange-500 box-border border border-transparent hover:bg-orange-600 focus:ring-4 focus:ring-orange-400 shadow-xs font-medium leading-5 rounded-sm text-sm px-4 py-2.5 focus:outline-none"
              >
                Đăng nhập
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
