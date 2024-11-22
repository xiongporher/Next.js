import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log("Jukkru!!", firstName);
};
const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={CreateProfileAction}>
          
          <div className="grid md:grid-cols-2 gap-2 mt-4">
          <FormInput name="firstName"type="text"label="First Name"placeholder="First Name"/>
          <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name" />
          <FormInput name="userName" label="Username" type="text" placeholder="Username" />
          </div>
          <SubmitButton text="Create Profile" size='lg' />
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
