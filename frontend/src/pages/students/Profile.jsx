import { getCookie, getToken } from "../../utils/utils";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
function Profile() {
  const [user, setUser] = useState([]);

  const apiUrl = `http://localhost:8023/user/`;

  //fetch students and set to state variable
  const getStudents = async () => {
    const resp = await axios.get(apiUrl, {
      headers: {
        authorization: getToken(),
      },
    });
    console.log(resp);
    setUser(await resp.data);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return <div>Profile</div>;
}

export default Profile;
