import { useState } from "react";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="grid grid-cols-[70%_1fr] h-screen    ">
      <div className=" backgroundWithGradient backdrop-blur-sm text-stone-50  bg-cover bg-center flex-col flex items-center justify-center">
        <h1 className="text-5xl tracking-widest text-stone-100 font-semibold  pb-4 ">
          Start turning your
          <br /> ideas into reality
        </h1>
        <p className="text-sm tracking-widest  text-stone-200 ">
          Create a free account and get full access to all features for 30-days
          <br />
          No credit card needed. Trusted by over 4,000 professionals.
        </p>
      </div>

      <div className="flex flex-col  text-stone-800 items-center justify-center">
        <SignupForm />
        <p className="mt-8">
          Already have an account?{" "}
          <a href="/signin" className="text-green-700 font-semibold">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
export default Signup;
