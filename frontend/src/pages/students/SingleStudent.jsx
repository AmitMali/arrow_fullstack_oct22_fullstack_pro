import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
const SingleStudent = () => {
  const [student, setStudent] = useState([]);
  const { id } = useParams();
  const apiUrl = `http://localhost:8023/students/${id}`;

  //fetch students and set to state variable
  const getStudent = async () => {
    const resp = await axios.get(apiUrl);
    setStudent(await resp.data);
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      {/*<!-- Component: Social story card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Header--> */}
        <div className="p-6">
          <header className="flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              {student.gender == "male" ? (
                <img
                  src="https://i.pravatar.cc/48?img=68"
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              ) : (
                <img
                  src="https://i.pravatar.cc/48?img=26"
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              )}
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {student.fullName}
              </h3>
              <p className="text-sm text-slate-400"> {student.userCourse}</p>
            </div>
          </header>
        </div>
        {/*  <!-- Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/146/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <p>
            Spend days here, exploring a way of life by bicycle. Discover
            cobbled streets sandwiched between beautiful rickety townhouses and
            the lazy flow of the canal.
          </p>
        </div>
        {/*  <!-- Action icon buttons --> */}
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-81 desc-81"
              >
                <title id="title-81">Icon title</title>
                <desc id="desc-81">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-82 desc-82"
              >
                <title id="title-82">Icon title</title>
                <desc id="desc-82">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/*<!-- End Social story card --> */}
    </>
  );
};

export default SingleStudent;
