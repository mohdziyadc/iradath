import CountCard from "./CountCard";
import Carousel from "react-elastic-carousel";
import TestimonialCard from "./TestimonialCard";
import { width } from "@mui/system";

export default function Testimonial() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  const testimonials = [
    {
      title: "Iradath Investments has been a great experience",
      desc: "Iradath Investments has been a great experience: courteous staff, precise and correct advice, and ever willing to support in allassociated aspects.",
      avatar:
        "https://media.istockphoto.com/id/470685204/photo/arab-businessman-portrait-outside-office-building.jpg?s=612x612&w=0&k=20&c=-DIAeIqKFg8_aADaHXVwRPh8e1SNBZ3wR3Z5fwau9kM=",
      name: "Dr. Abdul Salam Omar",
      desig: "Founder & Managing Director",
    },
    {
      title: "Iradath Investments is a good platform",
      desc: "Iradath Investments is a good platform to make investment for financial matters as it guides us at every step in attaining our financial goals. They make full efforts in terms of client satisfaction.",
      avatar:
        "https://images.squarespace-cdn.com/content/v1/56799419df40f3a52654773e/1517445224026-ZFZFOPXYPZRT6EEXKWVP/public+speaker+social+profile+photo+executive+photos+nyc.JPG",
      name: "Noushad Yousef",
      desig: "Sector Head, Mobily",
    },
    {
      title: "Great platform for financial planning.",
      desc: "Iradath Investments gives you a good platform for financial planning. They help us in achieving our financial goals from education toretirement. They provide full & continuous support to their investors till their financial goal are achieved.",
      avatar:
        "https://image1.masterfile.com/getImage/NjkzLTA2MDE5NjIxZW4uMDAwMDAwMDA=AGjF27/693-06019621en_Masterfile.jpg",
      name: "Sheikh Salim",
      desig: "Executive Director, Techproxima",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-screen">
        <div className="flex-[0.5] flex items-center w-screen justify-center bg-[#72E485]">
          <div className="hidden md:grid grid-cols-4 gap-6">
            <CountCard icon={1} value={500} tagline={"Orders Fulfilled"} />
            <CountCard icon={2} value={250} tagline={"Happy Clients"} />
            <CountCard icon={3} value={35} tagline={"Years of experience"} />
            <CountCard icon={4} value={40} tagline={"Countries Covered"} />
          </div>
          <div className="md:hidden grid grid-cols-2 ">
            <CountCard icon={1} value={500} tagline={"Orders Fulfilled"} />
            <CountCard icon={2} value={250} tagline={"Happy Clients"} />
            <CountCard icon={3} value={35} tagline={"Years of experience"} />
            <CountCard icon={4} value={40} tagline={"Countries Covered"} />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center w-screen">
          <div className="flex-[0.2] flex justify-center items-center text-[#12164d] md:text-4xl text-2xl  font-semibold">
            Our Customers Says
          </div>
          <div className="flex-1 flex justify-center items-center h-full w-full">
            <Carousel breakPoints={breakPoints}>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  title={testimonial.title}
                  description={testimonial.desc}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  designation={testimonial.desig}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
