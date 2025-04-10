import { Button } from "@/components/button";
import { Field, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { updateUser } from "@/app/lib/profile";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function Profile() {
  let user = await prisma.user.findFirst();
  if (user == null || user == undefined) {
    user = {
      id: 1,
      name: "Doxy",
      email: "email@someemail.com",
    };
  }

  return (
    <div className="flex flex-col mt-[20%] items-center justify-center">
      <div className="p-5 w-full md:w-md lg:w-lg outline outline-zinc-400 rounded shadow-md shadow-zinc-400">
        <form action={updateUser} className="*:mb-5 *:w-full">
          <Field>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="Bailey Carroll"
              defaultValue={user.name ? user.name : ""}
              required
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="doxy@someemail.com"
              defaultValue={user.email ? user.email : ""}
              required
            />
          </Field>
          <Button type="submit">Update Profile</Button>
        </form>
      </div>
    </div>
  );
}
