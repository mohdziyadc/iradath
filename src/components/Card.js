import {
  BriefcaseIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function Card({ icon, title, desc }) {
  return (
    <div className="bg-white flex flex-col  hover:bg-[#72E485] p-6 rounded-lg ">
      <div>
        {icon == 1 ? (
          <BriefcaseIcon width={50} height={50} color="#12164d" />
        ) : icon == 2 ? (
          <PresentationChartLineIcon width={50} height={50} color="#12164d" />
        ) : icon == 3 ? (
          <BuildingLibraryIcon width={50} height={50} color="#12164d" />
        ) : icon == 4 ? (
          <ChartPieIcon width={50} height={50} color="#12164d" />
        ) : null}
      </div>
      <div className="text-[#12164d] font-roboto md:text-xl text-lg  mt-[20%] mb-2 font-semibold">
        {title}
      </div>
      <div className="text-[#808080] font-roboto md:text-base text-sm font-light">
        {desc}
      </div>
    </div>
  );
}
