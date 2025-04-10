"use server";
import { PrismaClient, Prisma } from "@/generated/prisma";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export async function createApplication(formData: FormData) {
  const req = formData;
  console.log(req);
  try {
    if (req !== undefined && req !== null) {
      try {
        await prisma.application.create({
          data: {
            name: req.get("name") as string,
            company: req.get("company") as string,
            link: req.get("link") as string,
            applied: new Date(req.get("applied") as string) as Date,
            status: req.get("status") as string,
          },
        });
      } catch (e) {
        throw new Error("Prisma Query Failed");
      }
    }
    throw new Error("Form was empty!");
  } catch (e) {
    console.log(e);
  }
  redirect("/home?page=1");
}
