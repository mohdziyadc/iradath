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
          <div className="flex-1 flex justify-center items-center w-screen">
            <Carousel breakPoints={breakPoints}>
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
