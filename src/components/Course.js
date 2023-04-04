import CourseCard from "./CourseCard";

export default function Course() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-screen">
        <div className="flex-[0.5] flex justify-center  items-center text-5xl  font-semibold font-roboto text-[#12164d]">
          <div className="flex flex-col text-center justify-center items-center">
            <div>We've even got courses for you!</div>
            <div className="md:text-2xl font-roboto font-light text-lg md:py-4 py-2 text-[#808080] md:w-[70%] w-[90%] text-center">
              Come learn from us and achieve financial freedom.
            </div>
          </div>
        </div>
        <div className="flex-1 hidden md:grid py-4 grid-cols-2 gap-6 mx-[20%] ">
          <CourseCard
            title={"1 Crore Formula"}
            desc={
              " Learn how to make Rs. 1 Crore, by investing regularly, also learnstrategies to achieve that rather quickly."
            }
            price={"₹4999/-"}
          />
          <CourseCard
            title={"AAZADI Next"}
            desc={
              "Your pathway to be a pro-investor. Learn amazing passive income strategies in trading. Weekly sessions for practice. "
            }
            price={"₹4999/-"}
          />
        </div>
        <div className="flex-1 md:hidden grid grid-cols-2 gap-2 mx-2">
          <CourseCard
            title={"1 Crore Formula"}
            desc={"Make Rs. 1 Crore by investing regularly."}
            price={"₹4999/-"}
          />
          <CourseCard
            title={"AAZADI Next"}
            desc={"Your pathway to be a pro-investor."}
            price={"₹4999/-"}
          />
        </div>
      </div>
    </>
  );
}
