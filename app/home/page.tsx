import ApplicationTable from "@/components/pageComponents/ApplicationTable";
import AppStatsTable from "@/components/pageComponents/AppStatsTable";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

const PAGE_SIZE = 10;

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  let page = await searchParams;
  const currentPage = parseInt(page.page || "1", 10) || 1;
  const skip = (currentPage - 1) * PAGE_SIZE;
  const totalApplications = await prisma.application.count();
  const applications = await prisma.application.findMany({
    skip,
    take: PAGE_SIZE,
    orderBy: {
      applied: "desc",
    },
  });
  const totalPages = Math.ceil(totalApplications / PAGE_SIZE);
  const groupedStatuses = await prisma.application.groupBy({
    by: ["status"],
    _count: {
      _all: true,
    },
  });
  const statusCounts = groupedStatuses.map((group) => ({
    status: group.status,
    count: group._count._all,
  }));
  return (
    <div className="grid grid-cols-1 *:mb-4 lg:*:mb-0 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4">
      <div className="col-span-1 lg:col-start-1">
        <AppStatsTable
          groupedStatuses={statusCounts}
          totalApplications={totalApplications}
        />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-5 lg:col-start-2">
        <ApplicationTable
          applications={applications}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
