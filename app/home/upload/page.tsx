import { Button } from "@/components/button";
import { Field, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import Form from "next/form";
import Link from "next/link";

export default function Upload() {
  return (
    <div className="flex flex-col mt-[20%] items-center justify-center">
      <div className="p-5 w-full md:w-md lg:w-lg outline outline-zinc-400 rounded shadow-md shadow-zinc-400">
        <Form action={"/upload"} className="*:mb-5 *:w-full">
          <p className="text-sm text-zinc-300">
            Upload a CSV file with all of the jobs you've already applied to and
            their information. You can find an example CSV here:{" "}
            <Link href={""} className="underline">
              Example CSV
            </Link>
          </p>

          <Field>
            <Label>CSV File</Label>
            <Input type="file" required />
          </Field>
          <Button type="submit">Upload</Button>
        </Form>
      </div>
    </div>
  );
}
