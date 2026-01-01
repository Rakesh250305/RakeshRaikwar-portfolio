import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./admin/PrivaterRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProject from "./pages/admin/CreateProject";
import ProjectList from "./pages/admin/ProjectList";
import ContactList from "./pages/admin/ContactList";
import EducationList from "./pages/admin/EducationList";
import CreateEducation from "./pages/admin/CreateEducation";
import ExperienceList from "./pages/admin/ExperienceList";
import CreateExperience from "./pages/admin/CreateExperience";
import AdminLayout from "./admin/AdminLayout";

function App() {
  const LayoutWrapper = ({ children }) => {
    const { pathname } = useLocation();

    // Hide Navbar & Footer for all admin routes and admin login
    const hideLayout = pathname.startsWith("/admin");

    return (
      <>
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project-details" element={<ProjectDetails />} />

            <Route path="/admin-login" element={<AdminLogin />} />

            <Route path="/admin/*" element={<PrivateRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="project/list" element={<ProjectList />} />
                <Route path="project/create" element={<CreateProject />} />
                <Route path="education/list" element={<EducationList />} />
                <Route path="education/create" element={<CreateEducation />} />
                <Route path="experience/list" element={<ExperienceList />} />
                <Route
                  path="experience/create"
                  element={<CreateExperience />}
                />

                <Route path="messages" element={<ContactList />} />
              </Route>
            </Route>

            <Route path="*" element={<Home />} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
