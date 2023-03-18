import Card from "./Card";
import {
  BriefcaseIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:h-full">
        <div className=" flex-1 flex flex-col justify-center items-center">
          <div className="md:text-5xl text-4xl mt-2 text-[#12164d] text-center font-roboto font-semibold">
            Safe & Convenient Investing
          </div>
          <div className="md:text-2xl font-roboto font-light text-lg md:py-4 py-2 text-[#808080] md:w-[70%] w-[90%] text-center">
            Invest in quality stocks through Iradath. We only invest in
            fundamentally strong companies.
          </div>
        </div>
        <div className="flex-1 hidden md:grid  md:grid-cols-4  gap-6 m-10 ">
          <Card
            icon={1}
            title={"Portfolio Management"}
            desc={
              "We provide world class portfolio management services. Our team of professionals can manage your equities and create wealth for you. "
            }
          />
          <Card
            icon={2}
            title={"Stock Advisory"}
            desc={
              "We advise our clients on quality stocks. We only advise clients on fundamentally strong equities. We also choose only companies that are shariah compliant."
            }
          />
          <Card
            icon={3}
            title={"Mutual Fund Advisory"}
            desc={
              "Mutual funds provides a highly cost effective way to make the most of the stock markets. Iradath helps you to choose the right Ethical Mutual Fund suited to your requirements"
            }
          />
          <Card
            icon={4}
            title={"Stock Screening Tool"}
            desc={
              "Shariah compliant screening tool for equities. In order to promote Islamic finance and investments, investors are encouraged to purge (donate) impure income (primarily interest income)."
            }
          />
        </div>
        <div>
          <div className="flex-1 md:hidden grid grid-cols-2  gap-3 p-2">
            <Card
              icon={1}
              title={"Portfolio Management"}
              desc={"We provide world class portfolio management services. "}
            />
            <Card
              icon={2}
              title={"Stock Advisory"}
              desc={"We advise our clients on quality stocks."}
            />
            <Card
              icon={3}
              title={"Mutual Fund Advisory"}
              desc={
                "Iradath helps you to choose the right Ethical Mutual Fund."
              }
            />
            <Card
              icon={4}
              title={"Stock Screening Tool"}
              desc={"Shariah compliant screening tool for equities."}
            />
          </div>
        </div>
      </div>
    </>
  );
}
