"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import Image from "next/image";

import Input from "@/components/inputs/Input";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("Login");

  const toggleVariant = useCallback(() => {
    setVariant((value) => (value === "Login" ? "Register" : "Login"));
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", { email, name, password });
      toast.success("Success");
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  }, [email, name, password]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });

      toast.success("Success");
    } catch (error: any) {
      console.log(error);
      toast.error("Invalid Credentials.");
    }
  }, [email, password]);

  return (
    <div className="relative h-full w-full bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5 ">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={100}
            width={100}
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "Login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "Register" && (
                <Input
                  label="Username"
                  onChange={(event: any) => {
                    setName(event.target.value);
                  }}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                type="email"
                onChange={(event: any) => {
                  setEmail(event.target.value);
                }}
                id="email"
                value={email}
              />
              <Input
                label="Password"
                type="password"
                onChange={(event: any) => {
                  setPassword(event.target.value);
                }}
                id="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "Login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "Login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "Login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "Login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
