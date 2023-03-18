import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  const apiUrl = "http://localhost:8023/students/";

  //fetch students and set to state variable
  const getStudents = async () => {
    const resp = await axios.get(apiUrl);
    setAllStudents(await resp.data);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      {/*<!-- Component: Compact Table --> */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Course
              </th>
              <th
                scope="col"
                className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Gender
              </th>
              <th
                scope="col"
                className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              ></th>
            </tr>
            {console.log(allStudents)}
            {allStudents.map((student) => {
              return (
                <tr>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {student.fullName}
                  </td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {student.userCourse}
                  </td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {student.userMail}
                  </td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {student.gender}
                  </td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    <Link
                      to={`http://localhost:5173/students/${student._id}`}
                      className="mx-2 text-green-500  "
                    >
                      View
                    </Link>
                    <Link href="" className="mx-2 text-blue-500  ">
                      Edit
                    </Link>
                    <Link href="" className="mx-2 text-red-500">
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/*<!-- End Compact Table --> */}
    </>
  );
};

export default AllStudents;
