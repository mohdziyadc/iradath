import Image from "next/image";
import HeroImage from "../../public/heroImage.png";

export default function Hero() {
  return (
    <>
      <div className="text-white flex md:flex-row absolute mt-[20%] sm:mt-0 flex-col sm:h-[100vh]  items-center justify-center ">
        <div className=" flex-1 md:flex-[1.5] items-center justify-center md:p-12 p-6 ">
          <div className="font-roboto sm:text-7xl text-4xl font-bold">
            Invest with us
          </div>
          <div className="font-robot sm:text-5xl text-3xl font-light">
            {" "}
            in the Shariah way.
          </div>
          <div className="md:text-xl  font-extralight text-base py-4 w-5/6">
            With Iradath you can create wealth in an ethical manner through the
            shariah way. We are a team of professionals with 35 years of
            experience and excellence in this field. We help in wealth creation
            through professionally managed Shariah.
          </div>
          <div className="bg-[#72E485] mt-2 md:px-3 md:py-3 px-1 py-2 md:w-[35%] lg:w-[30%] w-[40%] text-center text-black rounded-lg">
            <button className="w-full">Learn More →</button>
          </div>
        </div>
        <div className="flex-1 justify-center items-center">
          <Image src={HeroImage}></Image>
        </div>
      </div>
    </>
  );
}
