import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import M from "materialize-css";

const Signin = () => {
  const navigate = useNavigate();
  const [result, setresult] = React.useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/signin", data)

      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({
            html: "invalid password or email",
            classes: "#c62828 red darken-3",
          });
        } else {
          localStorage.clear();
          localStorage.setItem("jwt", data.data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("token:", localStorage.getItem("jwt"));
          M.toast({
            html: "signedin success",
            classes: "green",
          });

          navigate("/book");
        }
      })
      .catch((err) => {
        console.log(err);
        M.toast({
          html: "invalid password or email",
          classes: "error",
        });
      });
  };

  return (
    <>
      <div className="mainsn">
        <div className="title"> Sign In </div>
        <form className="form1" onSubmit={handleSubmit(onSubmit)}>
          <label style={{ fontSize: "20px" }}>Email :</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />
          <label style={{ fontSize: "20px" }}>Password:</label>
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
        <div className="or">
          {" "}
          OR{" "}
          <div
            className="signupb"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
