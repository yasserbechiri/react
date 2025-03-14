import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";
import Login from "./Login";
import Home from "./Home";
import MyGroups from "./MyGroups";
import MyDocuments from "./MyDocuments";
import Notifications from "./Notifications";
import Tasks from "./Tasks";
import ProjectInfo from "./ProjectInfo";

function Layout() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/login"; 

  return (
    <div className="flex">
      {!hideSidebar && <SideBar />} 
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-groups" element={<MyGroups />} />
          <Route path="/my-documents" element={<MyDocuments />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/project-info" element={<ProjectInfo />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
