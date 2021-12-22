import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import M from "materialize-css";
import { Navigate, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [result, setresult] = React.useState();
  const [mode, setmode] = useState("bashir");
  const [newUser, setnewUser] = useState([]);
  const fileInput = React.createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(
    //   "onSubmit",
    //   data,
    //   "  imageFile: ",
    //   fileInput.current.files[0].name
    // );

    setresult(JSON.stringify(data));
    console.log(data);
    await axios
      .post("http://localhost:5000/createpost", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),

          //the token is a variable which holds the token
        },
      })
      .then((res) => {
        console.log(res);
        M.toast({
          html: "Book Added Successfully",
          classes: "#43a047 green darken-1",
        });
        navigate("/book");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Add Book here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...register("title", { required: true, maxLength: 80 })}
        />

        <input
          type="text"
          placeholder="Author name"
          {...register("authorname", { required: true, maxLength: 80 })}
        />
        <input
          type="number"
          placeholder="status"
          {...register("bstatus", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="publication house"
          {...register("phouse", {
            required: true,
          })}
        />
        <input
          type="date"
          placeholder="publication date"
          {...register("pdate", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="publication Year"
          {...register("pyear", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="Genre"
          {...register("genre", {
            required: true,
          })}
        />
        <input
          type="file"
          placeholder="Choose pic"
          name="photo"
          {...register("photo", {
            required: true,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
