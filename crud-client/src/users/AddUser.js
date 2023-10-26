import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 border rounded p-4 mt-2 shadow ">
          <h2 className="tex-center m-4">Register User</h2>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="mb-3">
              <label htmlFor="Name" className="m-2">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <label htmlFor="Name" className="m-2">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <label htmlFor="Name" className="m-2">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email-address"
                name="email"
                value={email}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
