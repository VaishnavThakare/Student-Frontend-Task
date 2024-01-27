import "./Home.css";
import Error from "./Error";
import { useState } from "react";
const SignupPage = ({ selectedTab, setSelectedTab }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Error(values));
  };

  return (
    <>
      <div className="body">
        <div className="">
          <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
              <h1>Signup Page</h1>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Username"
                  name="email"
                  required
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Name" name="name" required />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                  required
                />

                <i className="bx bxs-lock-alt"></i>
              </div>

              <button type="submit" className="btn ">
                Submit
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupPage;
