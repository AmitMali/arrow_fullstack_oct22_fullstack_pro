import axios from "axios";
import React, { useEffect, useState } from "react";
import FormInput from "../../components/FormInput";

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
    const errors = handleErrors(formData);
    setFormErrors(errors);
    console.log(formData);

    axios
      .post("http://localhost:8023/students/new", formData)
      .then((response) => {
        setResponse(response);
      })
      .catch((err) => console.log(err));

    setIsSubmit(true);

    // TODO:reset form data
    console.log(response);
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
            {formInputes.map((inp, index) => {
              return (
                <>
                  <FormInput
                    {...inp}
                    value={formData[inp.name]}
                    handleChange={handleChange}
                    index={index}
                  />
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
