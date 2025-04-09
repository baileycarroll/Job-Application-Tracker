import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { FC } from "react";

interface StatsProps {
  status: string;
  count: number;
}

const AppStatsTable: FC<{
  groupedStatuses: StatsProps[];
  totalApplications: number;
}> = ({ groupedStatuses, totalApplications }) => {
  return (
    <div className="outline outline-zinc-400 shadow-md shadow-zinc-500 rounded p-3">
      <h2 className="mb-4 flex justify-center font-bold text-lg">
        <span>Application Stats</span>
      </h2>
      {totalApplications > 0 &&
      totalApplications !== null &&
      totalApplications !== undefined ? (
        <>
          <Table striped>
            <TableHead>
              <TableRow>
                <TableHeader>Status</TableHeader>
                <TableHeader>Amount</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {groupedStatuses.map((stat) => (
                <TableRow key={stat.status}>
                  <TableCell className="text-zinc-200">{stat.status}</TableCell>
                  <TableCell className="text-zinc-200">
                    {stat.count} / {totalApplications}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h3 className="mt-4 flex justify-center font-semibold">
            <span>{totalApplications} Total Applications</span>
          </h3>
        </>
      ) : (
        <div className="flex justify-center">No Applications Yet!</div>
      )}
    </div>
  );
};

export default AppStatsTable;
