import { Link } from "react-router-dom";
// import logotth from "../../assets/images/logotth.jpg";

export default function AdminTopNav() {
  return (
    <header className="fixed z-20 w-screen top-0 left-0 bg-slate-800 text-white py-5 px-5">
        <Link to="/" className="text-2xl font-bold">
          {/* <img src={logotth} alt="Logo" className="logo-img" /> */}
            Rakesh Portfolio | Admin
        </Link>
      </header>
  );
}