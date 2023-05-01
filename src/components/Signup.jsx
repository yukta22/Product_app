import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="bg-secondary w-50 m-auto text-white">
        <form className=" m-auto mt-5 m-5 p-5">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="uname"
            />
          </div>
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
            />
          </div>

          <Link className="nav-link" to="/">
            <button className="btn btn-success me-5" type="submit">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
