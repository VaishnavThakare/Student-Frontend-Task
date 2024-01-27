const SideBar = ({ isAdmin, setIsAdmin, selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
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
            ADMIN
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
                <use xlinkHref="#grid"></use>
              </svg>
              Signup Page
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("StudentList");
            }}
          >
            <a
              href="#"
              className={`nav-link  text-white  ${
                selectedTab === "StudentList" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Students List
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("RegistrationForm");
            }}
          >
            <a
              href="#"
              className={`nav-link  text-white  ${
                selectedTab === "RegistrationForm" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Registration Form
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("EditForm");
            }}
          >
            <a
              href="#"
              className={`nav-link  text-white  ${
                selectedTab === "EditForm" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Edit
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-0.5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ margin: "10px 0px" }}
        />
        <button
          onClick={() => {
            setSelectedTab("Search");
          }}
          className="btn btn-outline-success"
          style={{ margin: "10px 0px", height: "2.5rem" }}
          type="submit"
        >
          Search
        </button>
      </form>

      <button
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
        className="btn btn-outline-light"
        style={{ margin: "2px 0px" }}
      >
        GO TO USER SECTION
      </button>
    </div>
  );
};
export default SideBar;
