import "./RegistrationForm.css";
import EditForm from "./EditForm";

const RegistrationForm = () => {
  return (
    <>
      <div className=" reg">
        <div className="child">
          <h2 className="header">Register Here</h2>
          <form className="">
            <div className="mb-3 ">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>

              <input
                type="text"
                className="form-control "
                placeholder="Enter your name"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control "
                placeholder="Enter enrollment number"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control "
                placeholder="Enter user name"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control "
                placeholder="Enter your Email"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
              <div id="emailHelp" className="form-text "></div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="password"
                className="form-control  "
                placeholder="confirm password"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid black",
                }}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn1 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
