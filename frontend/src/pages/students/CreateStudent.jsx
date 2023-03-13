import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CreateStudent() {
  const formInputes = [
    {
      name: "userName",
      label: "Name",
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      name: "userMail",
      label: "Email",
      type: "email",
      placeholder: "Enter Your email",
    },
    {
      name: "userPassword",
      label: "Password",
      type: "password",
      placeholder: "Enter Your Password",
    },
    {
      name: "userContact",
      label: "Contact",
      type: "tel",
      placeholder: "Enter Your Contact",
    },
    {
      name: "userCourse",
      label: "Course",
      type: "text",
      placeholder: "Enter Course",
    },
  ];
  const initialValues = {
    userName: "",
    userMail: "",
    userPassword: "",
    userCourse: "",
    userContact: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const [response, setResponse] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(handleErrors(formData));
    // axios
    //   .post("http://localhost:8023/students/new", formData)
    //   .then((response) => {
    //     // setResponse(response);
    //   })
    //   .catch((err) => console.log(err));
    setIsSubmit(true);
  };

  const handleErrors = (form_Data) => {
    let errors = {};
    if (!form_Data.userName) {
      errors.userNameErr = "Name is required";
    }
    if (!form_Data.userMail) {
      errors.userMailErr = "Email is required";
    }
    if (!form_Data.userPassword) {
      errors.userPasswordErr = "Password is required";
    }
    if (!form_Data.userContact) {
      errors.userContactErr = "Contact is required";
    }
    if (!form_Data.userCourse) {
      errors.userCourseErr = "Course is required";
    }

    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);
  return (
    <>
      {/*    <!-- Component: Rounded basic input  --> */}
      <div className="  sm:w-1/2 mx-auto ">
        <div className="">
          <form onSubmit={handleSubmit}>
            {formInputes.map((inp) => {
              return (
                <>
                  <div className="mb-2 " key={inp.name}>
                    <div className="relative my-6">
                      <input
                        id={inp.name}
                        type={inp.type}
                        name={inp.name}
                        placeholder={inp.placeholder}
                        value={formData[`${inp.name}`]}
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor={inp.name}
                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                      >
                        {inp.label}
                      </label>
                    </div>
                  </div>
                </>
              );
            })}

            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Register</span>
            </button>
            <pre>{JSON.stringify(formErrors)}</pre>

            {response.status === 201 ? (
              <>
                <div className=" text-green-600 p-3 ">
                  User Register Succesfully
                </div>
              </>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
      {/*    <!-- End Rounded basic input  --> */}
    </>
  );
}
