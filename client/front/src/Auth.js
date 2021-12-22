import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  //   const navigate = useNavigate();

  //   React.useEffect(() => {
  //     const user =  JSON.parse(localStorage.getItem("user"));
  //     if (user) {
  //       navigate("/book");
  //     } else {
  //       {
  //         navigate("/");
  //       }
  //     }
  //   }, []);
  return (
    <>
      {/* <Signup /> */}
      <Signin />
    </>
  );
};

export default Auth;
