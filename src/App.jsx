import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import StudentList from "./Components/StudentList";
import Forget from "./Components/Forget";
import Individual from "./Components/IndividualDetails";
import EditForm from "./Components/EditForm";
import SideBar from "./SideBar";
import UserSidebar from "./UserSideBar";
import SignupPage from "./Components/SignupPage";

function App() {
  const [selectedTab, setSelectedTab] = useState("/");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <div className="appsidebar">
        {isAdmin ? (
          <SideBar
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ) : (
          <UserSidebar
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
        <div className="appHome">
          {selectedTab === "Home" ? (
            <Home selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          ) : selectedTab === "SignupPage" ? (
            <SignupPage />
          ) : selectedTab === "RegistrationForm" ? (
            <RegistrationForm />
          ) : selectedTab === "StudentList" ? (
            <StudentList />
          ) : selectedTab === "Search" ? (
            <Individual />
          ) : selectedTab === "EditForm" ? (
            <EditForm />
          ) : selectedTab === "Forget" ? (
            <Forget />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
