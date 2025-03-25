import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GroupProvider } from "./components/GroupProvider";
import SideBar from "./components/SideBar";
import Login from "./Login";
import Home from "./Home";
import MyGroups from "./MyGroups";
import WorkSpace from "./WorkSpace";
import Notifications from "./Notifications";
import Tasks from "./Tasks";
import ProjectInfo from "./ProjectInfo";
import MyDocuments from "./MyDocuments";

function Layout() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/login";

  return (
    <>
      {!hideSidebar && <SideBar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-groups" element={<MyGroups />} />
          <Route path="/work-space" element={<WorkSpace />} />
          <Route path="/my-documents" element={<MyDocuments />} />
          <Route path="/notifications" element={<Notifications />}  />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/project-info" element={<ProjectInfo />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <GroupProvider>
        {" "}
        {/* Wrap with GroupProvider */}
        <Layout />
      </GroupProvider>
    </Router>
  );
}

export default App;
