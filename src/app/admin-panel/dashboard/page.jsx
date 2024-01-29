import VisitsCard from "../../../components/admin-panel/VisitsCard";
import ViewersDetailsCard from "@/components/admin-panel/ViewersDetailsCard";
import PlatformsCard from "@/components/admin-panel/PlatformsCard";
import {
  getVisits,
  getCountryVisits,
  getViewersDetails,
} from "../../../libs/data";
import WorldMapCard from "../../../components/admin-panel/WorldMapCard";

const data = [
  // [...countries],
  { country: "cn", value: 1389618778 }, // china
  { country: "in", value: 1311559204 }, // india
  { country: "us", value: 331883986 }, // united states
  { country: "id", value: 264935824 }, // indonesia
  { country: "pk", value: 210797836 }, // pakistan
  { country: "br", value: 210301591 }, // brazil
  { country: "ng", value: 208679114 }, // nigeria
  { country: "bd", value: 161062905 }, // bangladesh
  { country: "ru", value: 141944641 }, // russia
  { country: "mx", value: 127318112 }, // mexico
];

const page = async () => {
  const dataWithNewKey = data.map((item) => {
    // Replace "country" key with "code"
    const { value, ...rest } = item;
    return { count: value, ...rest };
  });
  // console.log(dataWithNewKey);
  const [visits, countryVisits, viewersDetails] = await Promise.all([
    getVisits().then((data) => JSON.parse(data)),
    getCountryVisits().then((data) => JSON.parse(data)),
    getViewersDetails().then((data) => JSON.parse(data)),
  ]);
  return (
    <section className="wrapper">
      <div className="grid grid-cols-3 gap-4 text-center">
        <VisitsCard visits={visits.total} visitsName={"Total Visits"} />
        <VisitsCard visits={visits.mobile} visitsName={"Mobile Visits"} />
        <VisitsCard visits={visits.desktop} visitsName={"Desktop Visits"} />
      </div>
      <div className="flex gap-2">
        <div className="flex my-4 rounded-lg gap-2">
          <div className=" my-2 p-2 bg-slate-200 rounded-lg shadow-md  gap-2">
            <h2 className="text-lg font-bold text-black rounded-lg bg-slate-400 py-2 px-4 mb-4">
              Recent Viewers Detials
            </h2>
            <ViewersDetailsCard viewersDetails={viewersDetails} />
          </div>
        </div>
        <div className="flex my-4 rounded-lg">
          <div className="my-2 p-2 bg-slate-200 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black rounded-lg bg-slate-400 py-2 px-4 mb-4">
              Platforms
            </h2>
            <PlatformsCard visits={visits} />
            <div className="text-center flex justify-between items-center">
              <h2 className="bg-[#0088fe] text-white p-2 rounded-lg">
                Total: {visits.total}
              </h2>
              <h2 className="bg-[#00C49F] text-white p-2 rounded-lg">
                Mobile: {visits.mobile}
              </h2>
              <h2 className="bg-[#FFBB28] text-white p-2 rounded-lg">
                Desktop: {visits.desktop}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center items-center rounded-lg ">
        <WorldMapCard countries={countryVisits} />
      </div>
    </section>
  );
};

export default page;
