import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false); // close mobile sidebar
    setOpenMenu(null);   // close all submenus
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-6 right-4 z-50 text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-slate-800 border-r border-gray-800 p-6
          transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:block z-20
        `}
      >
        <h2 className="text-xl font-bold text-blue-500">Admin Panel</h2>

        <nav className="mt-8 space-y-3 text-sm">
          {/* Dashboard */}
          <button
            onClick={() => handleNavigate("/admin/dashboard")}
            className="block w-full text-left text-gray-300 hover:text-white"
          >
            Dashboard
          </button>

          {/* Projects */}
          <div>
            <button
              onClick={() => toggleMenu("projects")}
              className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white"
            >
              Projects
              <FaChevronDown
                className={`transition ${openMenu === "projects" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "projects" && (
              <div className="ml-4 mt-2 space-y-2 text-gray-400">
                <button
                  onClick={() => handleNavigate("/admin/project/list")}
                  className="block hover:text-white"
                >
                  Project List
                </button>
                <button
                  onClick={() => handleNavigate("/admin/project/create")}
                  className="block hover:text-white"
                >
                  Create Project
                </button>
              </div>
            )}
          </div>

          {/* Experience */}
          <div>
            <button
              onClick={() => toggleMenu("experience")}
              className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white"
            >
              Experience
              <FaChevronDown
                className={`transition ${openMenu === "experience" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "experience" && (
              <div className="ml-4 mt-2 space-y-2 text-gray-400">
                <button
                  onClick={() => handleNavigate("/admin/experience/list")}
                  className="block hover:text-white"
                >
                  Experience List
                </button>
                <button
                  onClick={() => handleNavigate("/admin/experience/create")}
                  className="block hover:text-white"
                >
                  Create Experience
                </button>
              </div>
            )}
          </div>

          {/* Education */}
          <div>
            <button
              onClick={() => toggleMenu("education")}
              className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white"
            >
              Education
              <FaChevronDown
                className={`transition ${openMenu === "education" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "education" && (
              <div className="ml-4 mt-2 space-y-2 text-gray-400">
                <button
                  onClick={() => handleNavigate("/admin/education/list")}
                  className="block hover:text-white"
                >
                  Education List
                </button>
                <button
                  onClick={() => handleNavigate("/admin/education/create")}
                  className="block hover:text-white"
                >
                  Create Education
                </button>
              </div>
            )}
          </div>

          {/* Messages */}
          <button
            onClick={() => handleNavigate("/admin/messages")}
            className="block w-full text-left text-gray-300 hover:text-white"
          >
            Messages
          </button>
        </nav>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-10 text-red-400 hover:text-red-500 w-full text-left"
        >
          Logout
        </button>
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
