"use client";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import { Field, Label } from "@/components/fieldset";
import Form from "next/form";
import { Input } from "@/components/input";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { useState, FC } from "react";
interface AppProps {
  id: number;
  name: string;
  company: string;
  link: string;
  applied: Date;
  status: string;
}
const ApplicationTable: FC<{
  applications: AppProps[];
  currentPage: number;
  totalPages: number;
}> = ({ applications, currentPage, totalPages }) => {
  let [addAppOpen, setAddAppOpen] = useState(false);
  return (
    <div className="flex flex-col *:mb-4 outline outline-zinc-400 shadow-md shadow-zinc-500 rounded p-3">
      <div className="ml-auto">
        <Button type="button" onClick={() => setAddAppOpen(true)}>
          Add Application
        </Button>
        <Dialog open={addAppOpen} onClose={setAddAppOpen}>
          <Form action="/applications">
            <DialogTitle>Add Job Application</DialogTitle>
            <DialogBody className="*:mb-2">
              <div className="flex flex-row *:w-full gap-4">
                <Field>
                  <Label>Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Position Name"
                    required
                  />
                </Field>
                <Field>
                  <Label>Company</Label>
                  <Input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    required
                  />
                </Field>
              </div>
              <Field>
                <Label>Job Listing</Label>
                <Input
                  name="link"
                  type="url"
                  placeholder="https://somecompany.com/careers/5gu76786"
                />
              </Field>
              <div className="flex flex-row *:w-full gap-4">
                <Field>
                  <Label>Date Applied</Label>
                  <Input name="applied" type="date" required />
                </Field>
                <Field>
                  <Label>Status</Label>
                  <Input
                    name="status"
                    placeholder="Application Status"
                    required
                  />
                </Field>
              </div>
            </DialogBody>
            <DialogActions>
              <Button plain onClick={() => setAddAppOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" onClick={() => setAddAppOpen(false)}>
                Add Job
              </Button>
            </DialogActions>
          </Form>
        </Dialog>
      </div>
      {applications.length > 0 &&
      applications !== null &&
      applications !== undefined ? (
        <>
          <Table striped className="min-w-full">
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Company</TableHeader>
                <TableHeader>Job Listing</TableHeader>
                <TableHeader>Applied</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell className="text-zinc-200">{app.company}</TableCell>
                  <TableCell className="text-zinc-200 flex items-center gap-2 max-w-md overflow-scroll">
                    {app.link ? (
                      <>
                        <Link
                          href={app.link}
                          className="underline"
                          target="_blank"
                        >
                          {app.link}
                        </Link>
                        <ArrowTopRightOnSquareIcon className="size-4" />
                      </>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                  <TableCell className="text-zinc-200">
                    {new Date(app.applied).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-zinc-200">{app.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            {currentPage > 1 ? (
              <PaginationPrevious href={`?page=${currentPage - 1}`} />
            ) : (
              <PaginationPrevious />
            )}
            <PaginationList>
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationPage
                    key={pageNumber}
                    href={`?page=${pageNumber}`}
                    current={pageNumber === currentPage}
                  >
                    {pageNumber}
                  </PaginationPage>
                );
              })}
            </PaginationList>
            {currentPage < totalPages ? (
              <PaginationNext href={`?page=${currentPage + 1}`} />
            ) : (
              <PaginationNext />
            )}
          </Pagination>
        </>
      ) : (
        <div className="flex justify-center text-2xl font-bold">
          No Applications Yet!
        </div>
      )}
    </div>
  );
};
export default ApplicationTable;
