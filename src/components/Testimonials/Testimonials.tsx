import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ana",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Luis",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Maria",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "John",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    img: "https://picsum.photos/105/105",
  },
];

export const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
  
    <div className="py-10 mb-10 ">
      <div className="container">
        {/* Header section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying about us
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            It is very important for the customer to pay attention to the
            adipiscing process. Rejected We can do by rejecting what we have
            chosen for the exercise birth pain? Easy, engineer.
          </p>
        </div>
        {/* Testimonials cards  */}
        <div data-aos="zoom-in" className="">
          <Slider {...settings}>

            {TestimonialsData.map((item) => (
              <div key={item.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">

                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt="image"
                      className="rounded-full  w-20 h-20"
                    />
                  </div>

                  <div className="flex flex-col items-center gap4 ">
                    <div className="space-y-3 ">
                      <p className="text-xs text-gray-500 ">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light ">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">''</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>






  );
};
