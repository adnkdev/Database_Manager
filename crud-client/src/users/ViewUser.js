import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  //get the id value from url
  const { id } = useParams();

  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  // loads the placeholders with the values

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 border rounded p-4 mt-2 shadow ">
          <h2 className="tex-center m-4">User details</h2>
          <div className="card">
            <div className="card-header">{name}</div>
            <div className="card-header">{username}</div>
            <div className="card-header">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
