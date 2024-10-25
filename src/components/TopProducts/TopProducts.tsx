import {  FaStar } from "react-icons/fa6";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { TopProductsProps } from "./TopProducts.types";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Formal Wear",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    img: Img3,
    title: "Sports Wear",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
export const TopProducts = ({handleOrderPopup}: TopProductsProps ) => {
  return (
    <div className=" ">
      <div className="container">
        {/* Header section  */}

        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-primary text-sm ">Top Rated Products for you</p>

          <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>

          <p data-aos="fade-up" className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit rerum atque qui ducimus ipsum vel magni saepe labore
            quaerat.
          </p>
        </div>
        {/* Body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 gap-20 place-items-center">
          {ProductsData.map((item) => (
            <div
            data-aos="zoom-in"
              key={item.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section  */}
              <div className="h-[100px] ">
                <img
                  src={item.img}
                  alt="Image"
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section  */}
              <div className="p-4 text-center">
                {/* Start rating  */}
                <div className="w-full flex items-center justify-center gap-1 ">
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                </div>

                <h1 className="font-bold text-xl">{item.title} </h1>
                <p className=" text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2 ">
                  {item.description}{" "}
                </p>

                <button className="text-white border-2 border-primary bg-primary py-2 px-4 rounded-full transition-all duration-200 hover:bg-secondary"
                onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
