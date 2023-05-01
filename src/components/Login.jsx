import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [inputData, setInputData] = useState({});
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(`https://fakestoreapi.com/users`)
        .then((e) => setData(e.data));
    };
    getData();
  }, []);
  console.log(data);

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const logIncheck = () => {
    let flag1 = false;
    let flag2 = false;
    console.log(inputData);
    data?.map((ele) => {
      if (inputData.email === ele.email) {
        flag1 = true;
      }
      if (inputData.password === ele.password) {
        flag2 = true;
      }
    });

    if (flag1 && flag2) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    let cre = {};
    e.preventDefault();
    if (logIncheck()) {
      navigate("/");
    } else {
      console.log("credentials");
      cre.wrong = "Email or Password is wrong";
      setCredentials(cre);
    }
  };

  return (
    <>
      <div className="bg-secondary w-50 m-auto text-white">
        <form className=" m-auto mt-5 m-5 p-5" onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
          {credentials.wrong && (
            <div style={{ color: "pink", fontWeight: "bold" }}>
              {credentials.wrong}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
