import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

export default function AppStatsTable() {
  const AppStats = [
    {
      status: "Interviewing",
      number: 12,
    },
    {
      status: "Rejected",
      number: 60,
    },
    {
      status: "No Response",
      number: 27,
    },
    {
      status: "Offer Received",
      number: 1,
    },
  ];
  return (
    <div className="outline outline-zinc-400 shadow-md shadow-zinc-500 rounded p-3">
      <Table striped>
        <TableHead>
          <TableRow>
            <TableHeader>Status</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {AppStats.map((stat) => (
            <TableRow key={stat.status}>
              <TableCell className="text-zinc-200">{stat.status}</TableCell>
              <TableCell className="text-zinc-200">
                {stat.number} / 100
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
