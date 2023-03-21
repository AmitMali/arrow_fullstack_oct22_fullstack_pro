import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onFromSubmit = (data) => {
    axios
      .post("http://localhost:8023/auth/login", data)
      .then((response) => {
        if (response.data.success) {
          alert("login Success");
          reset();
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onFromSubmit)}>
        <div>
          <div className="mb-2 ">
            <div className="relative my-6">
              <input
                name="userMail"
                type="email"
                {...register("userMail", {
                  required: "Enter Email",
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Enter Valid Email Address",
                  },
                })}
                className={`peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              />
              <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Email
              </label>
              <div className="text-pink-500">
                {errors?.userMail && errors.userMail.message}
              </div>
            </div>
          </div>
          <div className="mb-2 ">
            <div className="relative my-6">
              <input
                name="userPassword"
                type="password"
                {...register("userPassword", {
                  required: "Enter Password",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    message:
                      "It should be at least 8 characters long ,It must have a number,It must have a capital alphabet,It must have a small alphabet,It must have a special character",
                  },
                })}
                className={`peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              />
              <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Password
              </label>
              <div className="text-pink-500">
                {errors?.userPassword && errors.userPassword.message}
              </div>
            </div>
          </div>

          <div className="mb-2 ">
            <div className="relative my-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
