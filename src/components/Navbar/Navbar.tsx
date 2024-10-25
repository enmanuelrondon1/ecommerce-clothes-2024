import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { DarkMode } from "./DarkMode";
import { NavbarProps } from "./Navbar.types";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Services", link: "/services" },
  { id: 5, name: "Blog", link: "/blog" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "New Arrivals", link: "/new-arrivals" },
  { id: 3, name: "Best Sellers", link: "/best-sellers" },
  { id: 4, name: "On Sale", link: "/on-sale" },
  { id: 5, name: "Customer Favorites", link: "/customer-favorites" },
];

export const Navbar = ({ handleOrderPopup }: NavbarProps) => {


  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10 " />
              Shopsy
            </a>
          </div>

          {/* search bar and ooder button  */}

          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="seacrh"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
              />
              <IoMdSearch className="text-gray-400/70 group-hover:text-primary transition-all duration-300  sm:text-2xl absolute top-1/2 -translate-y-1/2 right-3  " />
            </div>

            {/* {order button} */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200 ">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
            </button>

            {/* Darkmode Switch  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower navbar  */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((item) => (
            <li key={item.id} className="flex items-center gap-4 ">
              <a
                href={item.link}
                className="inline-block px-4 hover:text-primary duration-200 "
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* Simple Drowpdown and links  */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 " />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md ">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
