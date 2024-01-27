import SearchStudent from "./SearchStudent";
const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-body border-bottom bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse  `} id="navbarNavAltMarkup">
            <div className={`navbar-nav`}>
              <button
                onClick={() => {
                  setSelectedTab("Home");
                }}
                className={`nav-link  text-white active ${
                  selectedTab === "Home" && "active"
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </button>

              <button
                onClick={() => {
                  setSelectedTab("StudentList");
                }}
                className={`nav-link text-white ${
                  selectedTab === "StudentList" && "active"
                }`}
                href="/"
              >
                StudentList
              </button>
              <button
                onClick={() => {
                  setSelectedTab("RegistrationForm");
                }}
                className={`nav-link text-white ${
                  selectedTab === "RegistrationForm" && "active"
                }`}
                href="/"
              >
                RegistrationForm
              </button>
              <button
                onClick={() => {
                  setSelectedTab("EditForm");
                }}
                className={`nav-link text-white ${
                  selectedTab === "EditForm" && "active"
                }`}
                href="/"
              >
                Edit
              </button>
            </div>
          </div>
          <SearchStudent />
          <button
            onClick={() => {
              setSelectedTab("Single");
            }}
            className={`nav-link text-white ${
              selectedTab === "Single" && "active"
            }`}
            href="/"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
