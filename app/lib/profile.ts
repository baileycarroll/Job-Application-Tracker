"use server";
import { PrismaClient } from "@/generated/prisma";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function updateUser(formData: FormData) {
  const req = formData;
  const user = await prisma.user.findFirst();

  if (req !== undefined && req !== null) {
    try {
      if (user) {
        await prisma.user.upsert({
          where: {
            id: user.id ?? 1,
          },
          update: {
            name: req.get("name") as string,
            email: req.get("email") as string,
          },
          create: {
            name: req.get("name") as string,
            email: req.get("email") as string,
          },
        });
      } else {
        throw new Error("User not found");
      }
    } catch (e) {
      throw new Error("Prisma Query Failed on Update");
    }
  }
  redirect("/home/profile");
}
