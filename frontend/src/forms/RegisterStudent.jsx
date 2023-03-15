import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const RegisterStudent = () => {
  const courses = [
    { name: "fullStack", label: "Full Stack" },
    { name: "webDevelopment", label: "Web Development" },
    { name: "redHat", label: "Red Hat" },
    { name: "linux", label: "Linux" },
    { name: "aws", label: "Amazone Web Services" },
  ];
  const [response, setResponse] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onFromSubmit = (data) => {
    axios
      .post("http://localhost:8023/students/new", data)
      .then((response) => {
        setResponse(response);
        console.log(response);
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
                name="fullName"
                type="text"
                {...register("fullName", {
                  required: "Enter Your Full Name",
                  pattern: {
                    value: /^[a-z][a-z\s]*$/i,
                    message: "Only letters and white space allowed",
                  },
                })}
                className={`peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              />

              <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Full Name
              </label>
              <div className="text-pink-500">
                {errors?.fullName && errors.fullName.message}
              </div>
            </div>
          </div>
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
              <select
                name="userSubject"
                {...register("userSubject", {
                  required: "Enter Password",
                })}
                className={`peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              >
                {courses.map((course) => {
                  return <option value={course.name}>{course.label}</option>;
                })}
              </select>

              <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Course
              </label>
              <div className="text-pink-500">
                {errors?.userSubject && errors.userSubject.message}
              </div>
            </div>
          </div>
          <div className="mb-2">
            <fieldset className="flex gap-10">
              <legend className="mb-6 text-slate-500">Select Gender:</legend>
              <div className="relative flex items-center">
                <input
                  className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="radio"
                  value="male"
                  id="male"
                  name="gender"
                  {...register("gender", { required: "select gender" })}
                />
                <label
                  className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="male"
                >
                  Male
                </label>
                <svg
                  className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="title-1 description-1"
                  role="graphics-symbol"
                >
                  <title id="title-1">Circle Shape</title>
                  <desc id="description-1">
                    Circle shape to indicate whether the radio input is checked
                    or not.
                  </desc>
                  <circle cx="8" cy="8" r="4" />
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="radio"
                  value="female"
                  id="female"
                  name="gender"
                  {...register("gender", { required: "select gender" })}
                />
                <label
                  className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="female"
                >
                  Female
                </label>
                <svg
                  className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="title-2 description-2"
                  role="graphics-symbol"
                >
                  <title id="title-2">Circle Shape</title>
                  <desc id="description-2">
                    Circle shape to indicate whether the radio input is checked
                    or not.
                  </desc>
                  <circle cx="8" cy="8" r="4" />
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="radio"
                  value="other"
                  id="other"
                  name="gender"
                  {...register("gender", { required: "select gender" })}
                />
                <label
                  className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="other"
                >
                  Other
                </label>
                <svg
                  className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <circle cx="8" cy="8" r="4" />
                </svg>
              </div>
            </fieldset>
            <div className="text-pink-500">
              {errors?.gender && errors.gender.message}
            </div>
          </div>
          <div className="mb-2 ">
            <div className="relative my-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
              >
                <span>register</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterStudent;
