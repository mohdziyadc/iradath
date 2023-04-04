export default function CourseCard({ title, desc, price }) {
  return (
    <>
      <div className="flex flex-col   bg-white hover:bg-[#72E485] text-[#808080] hover:text-black md:h-full h-[80%] md:p-6 py-6 px-3  text-left rounded-lg ">
        {/* <div className=" border-2 w-[40%] rounded-lg p-1 text-sm text-center">
          Popular choice
        </div> */}
        <div className="text-[#12164d] font-roboto md:text-3xl text-xl font-semibold">
          {title}
        </div>
        <div className="font-roboto md:text-lg text-base py-2 font-light">
          {desc}
        </div>
        <div className="font-bold py-4 text-xl">{price}</div>
        <div>
          <ul className="text-base font-light mb-3">
            <li className="py-1">☑️ 40+ hours</li>
            <li className="py-1">☑️ Instructor Led</li>
            <li className="py-1">☑️ Lifetime Access</li>
            <li className="py-1">☑️ Access from anywhere</li>
            <li className="py-1">☑️ Certificate of completion</li>
          </ul>
        </div>
        <div className="bg-[#12164d] text-white text-center py-2 rounded-lg">
          <button className="w-full">More Details</button>
        </div>
      </div>
    </>
  );
}
