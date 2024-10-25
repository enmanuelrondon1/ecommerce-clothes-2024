import { GrSecure } from "react-icons/gr";
import Img1 from "../../assets/women/women.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

export const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
          {/* Image section  */}
          <div data-aos="zoom-in">
            <img
              src={Img1}
              alt="Image"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover "
            />
          </div>

          {/* Text details section  */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <h1  data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% off on all Women's Wear</h1>

            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5 ">
              The company itself is a very successful company. I will explain it
              to you Do times or places of refusal occur frequently?
            </p>

            <div className="flex flex-col gap-4 ">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 " />
                <p>Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Fast Delivery</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Easy Pyment method</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400 " />
                <p>Get Offerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
