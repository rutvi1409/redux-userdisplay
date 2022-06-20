import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "./actions";
import { handleDelete } from "./actions";

const Mainpage = () => {
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const errors = useSelector((errors) => errors);
  const [updateuser, setUpdateuser] = useState();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    contact: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleUpdate = (d) => {
    setUpdateuser(d);
    setUser({
      name: d.name,
      password: d.password,
      email: d.email,
      contact: d.contact,
    });
  };
  console.log(errors);
  return (
    <div className="mx-5 ">
      <h2 className="mt-4">User Listing</h2>
      {/* <form className="mt-4 "> */}
      <div className="d-flex mt-4">
        <label>Name :</label>
        <div className="d-flex flex-column">
          <input
            className="mx-2"
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
            style={{ width: "200px" }}
          />
          {error.name}
        </div>
        <label>Password :</label>
        <div className="d-flex flex-column">
          <input
            className="mx-2"
            type="text"
            name="password"
            onChange={handleChange}
            value={user.password}
            style={{ width: "200px" }}
          />
          {error.password}
        </div>
        <label>Email :</label>
        <div className="d-flex flex-column">
          <input
            className="mx-2"
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={user.email}
            style={{ width: "200px" }}
          />
          {error.email}
        </div>
        <label>Contact :</label>
        <div className="d-flex flex-column">
          <input
            className="mx-2"
            type="text"
            name="contact"
            onChange={(e) => handleChange(e)}
            value={user.contact}
            style={{ width: "200px" }}
          />
          {error.contact}
        </div>
        <button
          className="mx-2"
          style={{ height: "30px" }}
          onClick={async () => {
            await dispatch(handleSubmit(user));
            await setUser({
              name: "",
              password: "",
              email: "",
              contact: "",
            });
          }}
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <div className="row mt-5 ">
        {data.length > 0 &&
          data.map((d, i) => {
            return (
              <div
                className="col-4 d-flex justify-content-between px-5 py-3 border-bottom "
                key={i}
              >
                <div className="d-flex flex-column  justify-content-between w-100 ">
                  <div className="d-flex m-1">
                    <strong>Name : </strong> {d.name}
                  </div>
                  <div className="d-flex  m-1">
                    {" "}
                    <strong>Password : </strong>
                    {d.password}
                  </div>
                </div>
                <div className="d-flex  flex-column  justify-content-between w-100">
                  <div className="d-flex m-1">
                    {" "}
                    <strong>Email :</strong>
                    {d.email}
                  </div>
                  <div className="d-flex m-1">
                    {" "}
                    <strong>Contact : </strong>
                    {d.contact}
                  </div>
                </div>
                <div className="d-flex flex-column ">
                  <button
                    className="btn-info m-1"
                    onClick={() => {
                      dispatch(handleDelete(d));
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="btn-success m-1"
                    onClick={() => handleUpdate(d)}
                  >
                    {" "}
                    Update
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Mainpage;
