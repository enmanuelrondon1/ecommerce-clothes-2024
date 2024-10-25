import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.webp";
import Img6 from "../../assets/women/women6.jpg";
import Img7 from "../../assets/women/women7.jpg";
import Img8 from "../../assets/women/women8.jpg";
import Img9 from '../../assets/women/women9.jpg';
import Img10 from '../../assets/women/women10.webp';
import { useState } from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Men's Casual",
    rating: 4.5,
    color: "blue",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "Kids Playwear",
    rating: 4.8,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "Sportswear",
    rating: 4.2,
    color: "green",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img5,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img6,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Img7,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img8,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Img9,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 10,
    img: Img10,
    title: "Formal Attire",
    rating: 4.9,
    color: "black",
    aosDelay: "400",
  },
];

export const Products = () => {
  const [counter, setCounter] = useState(5);

  const morePoducts = () => {
    if (counter < ProductsData.length) {
      setCounter(counter + 5);
    }
  };
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">
        {/* header station  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary ">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia.
          </p>
        </div>
        {/* Body section  */}
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
          {ProductsData.slice(0, counter).map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="space-y-3"
            >
              <img
                src={item.img}
                alt="Image"
                className="h-[220px] w-[150px] object-cover rounded-md "
              />

              <div>
                <h3 className="font-semibold ">{item.title} </h3>
                <p className="text-sm text-gray-600 ">{item.color} </p>
                <div className="flex items-center gap-1 ">
                  <FaStar className="text-yellow-400 " />
                  <span>{item.rating} </span>
                </div>
              </div>
            </div>
          ))}
          </div>


         
            {/* Card section  */}

         
          {/* view all button  */}
          <div className="flex justify-center">
            <button
              onClick={morePoducts}
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md "
            >
              View all button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
