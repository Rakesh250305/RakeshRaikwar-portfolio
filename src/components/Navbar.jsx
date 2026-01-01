import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaUserShield } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/project-details" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-white">
          Rakesh
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Admin Button */}
        <NavLink
          to="/admin-login"
          className="hidden md:inline-block px-2 py-2 text-sm text-white transition"
        >
          <FaUserShield size={20}/>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross1 size={30} /> : <IoMenuSharp size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black h-screen border-t border-white/10">
          <div className="flex flex-col gap-10 mt-10 text-center py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
            <NavLink
              to="/admin-login"
              className="text-blue-500 font-medium"
              onClick={() => setOpen(false)}
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
