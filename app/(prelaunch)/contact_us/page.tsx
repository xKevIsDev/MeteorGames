"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button";
import { Toaster, toast } from "sonner";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";

type Inputs = {
  firstName: string;
  email: string;
  message?: string;
};
const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      message: "",
      email: "",
    },
    shouldUnregister: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: any = (data: Inputs, e: React.FormEvent) => {
    e.preventDefault();
    /* you'll need the secret key to send emails (contact me for access)
     you can get your own version of it  by signing up at https://www.emailjs.com/
    */
    setIsLoading(true);
    emailjs.init("23V-bURvhDkTvmArK");
    emailjs
      .send("service_81lx6rh", "template_vlkutoo", data)
      .then(function (response) {
        if (response.status == 200) {
          setIsLoading(false)
          toast.success("Thanks for joining our waitlist!", {
            description:
              "We'll keep you informed and notify you once we launch.",
          });
        } else {
        setIsLoading(false)
        }
      });
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  return (
    <>
    <div className="px-2 md:px-0">
    <div className=" w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  my-20 mx-auto max-w-lg">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Waitlist
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto">
        Fill out the form below to join the waitlist for meteor games.
      </p>
 
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Meteor" type="text" {...register("firstName")} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="meteorgames@gmail.com" type="email" {...register("email")}/>
        </LabelInputContainer>
 
        <button
  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
  type="submit"
>
  {isLoading ? "Signing up..." : "Sign up →"}
  <BottomGradient />
</button>

 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
    </div>

      <div className="left-1.5 top-3.5 fixed cursor-pointer m-5/2 p-0 border-none rounded-full z-30">
        <Link
          href="/"
          className="left-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black"
        >
          <GoArrowLeft />
        </Link>
      </div>
      <Toaster richColors />
    </>
  );
};

export default ContactUs;
