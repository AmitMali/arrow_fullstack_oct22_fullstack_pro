import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
const Home = () => {
  const [data, setData] = useState({});
  const result = async () => {
    const resp = await axios.get("http://localhost:8023/");
    setData(resp.data);
  };
  useEffect(() => {
    result();
  }, []);
  //   result();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-green-700 text-center">Login</h1>
      <div>
        <div className="  sm:w-1/2 mx-auto ">
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
