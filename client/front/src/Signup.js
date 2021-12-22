import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./style.css";

export default function Signup() {
  const [result, setresult] = React.useState();
  const [mode, setmode] = useState("bashir");
  const [newUser, setnewUser] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setresult(JSON.stringify(data));
    axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        console.log(res);
        M.toast({
          html: "Signup successfully",
          classes: "green",
        });

        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  // const idtrack = (id) => {
  //   console.log("********************", id);
  //   axios.put(`http://localhost:5000/updateuser/${id}`, {
  //     name: mode,
  //   });
  // };
  // useEffect(() => {
  //   axios.get("http://localhost:5000/alluser").then((Response) => {
  //     setnewUser(Response.data);
  //   });
  // }, []);
  return (
    <>
      <div className="mainsp">
        <div className="title"> Sign Up </div>
        <form className="form1" onSubmit={handleSubmit(onSubmit)}>
          <label style={{ fontSize: "20px" }}>Name :</label>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true, maxLength: 80 })}
          />
          <br />
          <label style={{ fontSize: "20px" }}>Email :</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />
          <label style={{ fontSize: "20px" }}>Password :</label>
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 12,
            })}
          />

          <input
            style={{
              fontSize: "20px",
              backgroundColor: "white",
              color: "black",
            }}
            type="submit"
          />
        </form>
      </div>
      {/* <p>{result}</p> */}
      {/* <table>
        <tr>
          <th>name</th>
          <th>password</th>
          <th>email</th>
        </tr>
        {newUser.map((newUser) => (
          <tr>
            <td>{newUser.name}</td>
            <td>{newUser.password}</td>
            <td>{newUser.email}</td>
            <td>
              {" "}
              <button
                onClick={(key) => {
                  idtrack(newUser._id);
                }}
              >
                changeid
              </button>{" "}
            </td>
          </tr>
        ))}
      </table> */}
    </>
  );
}
