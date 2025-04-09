import { Button } from "@/components/button";
import { Field, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import Form from "next/form";

export default function Profile() {
  const user = {
    name: "Doxy",
    email: "doxy@emailaddress.com",
  };
  return (
    <div className="flex flex-col mt-[20%] items-center justify-center">
      <div className="p-5 w-full md:w-md lg:w-lg outline outline-zinc-400 rounded shadow-md shadow-zinc-400">
        <Form action={"/profile"} className="*:mb-5 *:w-full" formMethod="POST">
          <Field>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Bailey Carroll"
              defaultValue={user.name ? user.name : ""}
              required
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="doxy@someemail.com"
              defaultValue={user.email ? user.email : ""}
              required
            />
          </Field>
          <Button type="submit">Update Profile</Button>
        </Form>
      </div>
    </div>
  );
}
