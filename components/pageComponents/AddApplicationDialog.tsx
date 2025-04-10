import { createApplication } from "@/app/lib/applications";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import { Field, Label } from "@/components/fieldset";
import { FC } from "react";
import Form from "next/form";
import { Input } from "@/components/input";
const AddApplicationDialog: FC<{
  addAppOpen: boolean;
  setAddAppOpen: (value: boolean) => void;
}> = ({ addAppOpen, setAddAppOpen }) => {
  return (
    <Dialog open={addAppOpen} onClose={setAddAppOpen}>
      <form action={createApplication}>
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
              <Input name="status" placeholder="Application Status" required />
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
      </form>
    </Dialog>
  );
};
export default AddApplicationDialog;
