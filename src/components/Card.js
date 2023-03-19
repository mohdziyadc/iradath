import {
  BriefcaseIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function Card({ icon, title, desc }) {
  return (
    <div className="bg-white flex flex-col  hover:bg-[#72E485] text-[#808080] hover:text-black   p-6 rounded-lg ">
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
      <div className="text-[#12164d] font-roboto text-xl   mt-[20%] mb-2 font-semibold">
        {title}
      </div>
      <div className="  font-roboto text-base  font-light">{desc}</div>
    </div>
  );
}
