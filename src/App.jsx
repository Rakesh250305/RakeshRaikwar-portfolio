import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import PrivateRoute from "./admin/PrivaterRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/project-details" element={<ProjectDetails/>} />

          <Route path="/admin/login" element={<AdminLogin/> }/>
           <Route path="/admin/dashboard" element={
            <PrivateRoute>
               <AdminDashboard/>
            </PrivateRoute>
           }
         /> 
        <Route path="*" element={<Home />} />
        </Routes>

       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
