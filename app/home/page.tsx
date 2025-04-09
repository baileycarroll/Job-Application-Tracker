import ApplicationTable from "@/components/pageComponents/ApplicationTable";
import AppStatsTable from "@/components/pageComponents/AppStatsTable";
export default function HomePage() {
  return (
    <div className="grid grid-cols-1 *:mb-4 lg:*:mb-0 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4">
      <div className="col-span-1 lg:col-start-1">
        <AppStatsTable />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-5 lg:col-start-2">
        <ApplicationTable />
      </div>
    </div>
  );
}
