import Image from "next/image";
import commaImage from "../../public/comma2.png";
import { Avatar } from "@mui/material";
export default function TestimonialCard({
  title,
  description,
  name,
  designation,
  avatar,
}) {
  return (
    <>
      <div className="bg-white flex flex-col  text-[#808080]  shadow-xl my-8 mx-3  p-6 rounded-xl sm:max-w-2xl max-w-xl ">
        <div className="text-[#12164d] font-semibold  flex flex-row justify-between">
          <div className="flex items-center justify-center sm:text-xl text-lg max-w-md ">
            {title}
          </div>
          <div>
            <Image
              src={commaImage}
              width={70}
              height={70}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="max-w-sm  sm:text-lg text line-clamp-4  text-base text-left">
          {description}
        </div>
        <br />
        <hr />
        <div className="flex flex-row mt-2 text-[#12164d]  items-center">
          <Avatar sx={{ width: 56, height: 56 }} src={avatar}></Avatar>
          <div className="px-2">
            <div className="sm:text-lg text-base font-semibold">{name}</div>
            <div className="sm:text-base text-md font-light">{designation}</div>
          </div>
        </div>
      </div>
    </>
  );
}
