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
import { useState } from "react";
export default function ApplicationTable() {
  const applications = [
    {
      id: 1,
      name: "L3 Advanced Support Engineer", // Name of the Job Posting
      company: "Coupa Software", // Company Being Applied To
      link: "", // Link to the job posting
      resume: "", // Resume used in the application
      coverLetter: "", // Cover Letter sent with application
      applied: "03/10/2025", // Date Applied
      status: "Offer Received",
    },
    {
      id: 2,
      name: "Senior Technical Support Engineer", // Name of the Job Posting
      company: "Carbon Robotics", // Company Being Applied To
      link: "https://carbonrobotics.com", // Link to the job posting
      resume: "", // Resume used in the application
      coverLetter: "", // Cover Letter sent with application
      applied: "10/10/2024", // Date Applied
      status: "Interviewing",
    },
  ];
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
                  <Label>Resume Used</Label>
                  <Input name="resume" type="file" />
                </Field>
                <Field>
                  <Label>Cover Letter Sent</Label>
                  <Input name="coverLetter" type="file" />
                </Field>
              </div>
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
      <Table striped className="min-w-full">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Job Listing</TableHeader>
            <TableHeader>Resume</TableHeader>
            <TableHeader>Cover Letter</TableHeader>
            <TableHeader>Applied</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="font-medium">{app.name}</TableCell>
              <TableCell className="text-zinc-200">{app.company}</TableCell>
              <TableCell className="text-zinc-200 flex items-center gap-2">
                {app.link ? (
                  <>
                    <Link href={app.link} className="underline" target="_blank">
                      {app.link}
                    </Link>
                    <ArrowTopRightOnSquareIcon className="size-4" />
                  </>
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell className="text-zinc-200">
                {app.resume ? app.resume : "N/A"}
              </TableCell>
              <TableCell className="text-zinc-200">
                {app.coverLetter ? app.coverLetter : "N/A"}
              </TableCell>
              <TableCell className="text-zinc-200">{app.applied}</TableCell>
              <TableCell className="text-zinc-200">{app.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </div>
  );
}
