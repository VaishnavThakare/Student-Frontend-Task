const UserSidebar = ({ isAdmin, setIsAdmin, selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <button
            className="fs-4 disable"
            disabled={true}
            style={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "10px",
              width: "8rem",
            }}
          >
            USER
          </button>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link  text-white  ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Login Page
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("SignupPage");
            }}
          >
            <a
              href="#"
              className={`nav-link  text-white  ${
                selectedTab === "SignupPage" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Signup Page
            </a>
          </li>
        </ul>
      </div>

      <div>
        <button
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
          className="btn btn-outline-light"
        >
          GO TO ADMIN SECTION
        </button>
      </div>
    </div>
  );
};
export default UserSidebar;
