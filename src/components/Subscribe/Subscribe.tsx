import Img1 from "../../assets/website/orange-pattern.jpg";

export const Subscribe = () => {
  const BannerImg = {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-black "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div className="space-y-6 max-w-xl mx-auto ">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold ">Get Notified About New Products</h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email address"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
