import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import library from "./cover.jpg";
import "./style.css";
const Book = () => {
  const navigate = useNavigate();
  const [oncl, setoncl] = useState(false);
  const [newUser, setnewUser] = useState([]);
  const [mode, setmode] = useState(1);

  const idtrack = (id) => {
    console.log("********************", id);
    axios.put(`http://localhost:5000/update/${id}`, {
      bstatus: mode,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/myposts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"), //the token is a variable which holds the token
        },
      })
      .then((Response) => {
        setnewUser(Response.data);
      });
  }, []);
  return (
    <div className="bookdas">
      <div className="buttons12">
        <div
          className="logout"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          logout
        </div>

        <div
          className="AddBookb"
          onClick={() => {
            navigate("/Addbook");
          }}
        >
          Add Book
        </div>
      </div>
      <div className="mainsection">
        <h1 style={{ textAlign: "center" }}> Reading</h1>
        <div className="mainmapwrapper">
          {newUser.map((newUser, key) => (
            <>
              {newUser.bstatus === 3 ? (
                <>
                  <div className="card">
                    <img
                      // src={newUser.photo}
                      src={library}
                      alt="book cover"
                    />
                    <div className="row11">
                      <div> {newUser.title} </div>
                      <div> {newUser.authorname} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.pdate} </div>
                      <div> {newUser.pyear} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.phouse} </div>
                      <div> {newUser.genre} </div>
                    </div>
                    <div className="options">
                      <BsThreeDotsVertical
                        style={{
                          fontSize: "24px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (oncl === key) {
                            setoncl(false);
                          } else setoncl(key);
                        }}
                      />
                      <div
                        className="maincell"
                        style={{ display: oncl === key ? "flex" : "none" }}
                      >
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(3);
                            idtrack(newUser._id);
                          }}
                        >
                          Read
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(2);
                            idtrack(newUser._id);
                          }}
                        >
                          completed
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(1);
                            idtrack(newUser._id);
                          }}
                        >
                          plan to read
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {/* complete */}
            </>
          ))}
        </div>

        <h1 style={{ textAlign: "center" }}> Completed</h1>
        <div className="mainmapwrapper">
          {newUser.map((newUser, key) => (
            <>
              {newUser.bstatus === 2 ? (
                <>
                  <div className="card">
                    <img
                      // src={newUser.photo}
                      src={library}
                      alt="book cover"
                    />
                    <div className="row11">
                      <div> {newUser.title} </div>
                      <div> {newUser.authorname} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.pdate} </div>
                      <div> {newUser.pyear} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.phouse} </div>
                      <div> {newUser.genre} </div>
                    </div>
                    <div className="options">
                      <BsThreeDotsVertical
                        style={{
                          fontSize: "24px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (oncl === key) {
                            setoncl(false);
                          } else setoncl(key);
                        }}
                      />
                      <div
                        className="maincell"
                        style={{ display: oncl === key ? "flex" : "none" }}
                      >
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(3);
                            idtrack(newUser._id);
                          }}
                        >
                          Read
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(2);
                            idtrack(newUser._id);
                          }}
                        >
                          completed
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(1);
                            idtrack(newUser._id);
                          }}
                        >
                          plan to read
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {/* complete */}
            </>
          ))}
        </div>

        <h1 style={{ textAlign: "center" }}>Plan to Reading</h1>
        <div className="mainmapwrapper">
          {newUser.map((newUser, key) => (
            <>
              {newUser.bstatus === 1 ? (
                <>
                  <div className="card">
                    <img
                      // src={newUser.photo}
                      src={library}
                      alt="book cover"
                    />
                    <div className="row11">
                      <div> {newUser.title} </div>
                      <div> {newUser.authorname} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.pdate} </div>
                      <div> {newUser.pyear} </div>
                    </div>
                    <div className="row11">
                      <div> {newUser.phouse} </div>
                      <div> {newUser.genre} </div>
                    </div>
                    <div className="options">
                      <BsThreeDotsVertical
                        style={{
                          fontSize: "24px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (oncl === key) {
                            setoncl(false);
                          } else setoncl(key);
                        }}
                      />
                      <div
                        className="maincell"
                        style={{ display: oncl === key ? "flex" : "none" }}
                      >
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(3);
                            idtrack(newUser._id);
                          }}
                        >
                          Read
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(2);
                            idtrack(newUser._id);
                          }}
                        >
                          completed
                        </div>
                        <div
                          className="cell"
                          onClick={(key) => {
                            setmode(1);
                            idtrack(newUser._id);
                          }}
                        >
                          plan to read
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {/* complete */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
