import "./Forget.css";
const Forget = () => {
  return (
    <>
      <body>
        <div className="container">
          <div className="wrapper">
            <form action="">
              <h2>Forgot Password</h2>
              <p>Enter your email</p>
              <div
                class="btn-group btn-group-toggle btn-success"
                data-toggle="buttons"
              >
                <label
                  class="btn"
                  style={{
                    backgroundColor: "rgb(46, 59, 59)",
                    border: "2px solid black",
                  }}
                >
                  <input
                    type="text"
                    name="options"
                    placeholder="Enter Mail"
                    className="btn-success"
                    id="option1 "
                    checked
                    style={{
                      backgroundColor: "rgb(46, 59, 59)",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  />
                </label>
                <label
                  class="btn btn-secondary inputBtn"
                  style={{
                    backgroundColor: "rgb(46, 59, 59)",
                    border: "2px solid black",
                  }}
                >
                  <input
                    type="submit"
                    name="options"
                    id="option2 "
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                </label>
              </div>

              <div className="input-box">
                <p>Enter OTP that send on your mail</p>
                <input type="text" placeholder="Enter OTP" required />
                <i className="bx bxs-user"></i>
              </div>

              <button type="submit" className="btn forgetBtn">
                Enter
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};
export default Forget;
