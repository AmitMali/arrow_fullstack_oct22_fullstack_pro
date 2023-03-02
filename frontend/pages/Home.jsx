import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <h1 className="text-6xl">{data.pageHeading}</h1>
    </div>
  );
};

export default Home;
