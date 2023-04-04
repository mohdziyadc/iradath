import {
  UserPlusIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function CountCard({ icon, value, tagline }) {
  return (
    <div className="flex flex-col md:m-2 p-6 rounded-lg text-[#12164d] justify-center items-center">
      <div className="border-2 border-[#12164d] p-1 rounded-lg">
        {icon == 1 ? (
          <ClipboardDocumentCheckIcon width={50} height={50} color="#12164d" />
        ) : icon == 2 ? (
          <UserPlusIcon width={50} height={50} color="#12164d" />
        ) : icon == 3 ? (
          <UsersIcon width={50} height={50} color="#12164d" />
        ) : icon == 4 ? (
          <GlobeAltIcon width={50} height={50} color="#12164d" />
        ) : null}
      </div>
      <div className=" flex flex-row justify-center items-center font-roboto md:text-5xl text-3xl md:mt-4 mt-2 md:mb-2 font-semibold">
        <CountUp end={value} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <span className="md:text-3xl text-xl px-0.5">+</span>
      </div>
      <div className="  font-roboto uppercase md:text-lg text-base text-center  font-semibold">
        {tagline}
      </div>
    </div>
  );
}
