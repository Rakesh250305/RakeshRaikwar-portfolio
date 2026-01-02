import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateEducation() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    degree: "",
    field: "",
    institute: "",
    board: "",
    duration: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `${apiUrl}/admin/education/create`
        // "http://localhost:5000/admin/education/create"
        , formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      navigate("/admin/education/list");
    } catch (err) {
      console.error(err);
      alert("Error creating education");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold mb-6">Create Education</h1>
        <form className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="degree" placeholder="Degree" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="field" placeholder="Field" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="institute" placeholder="Institute" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="board" placeholder="Board" onChange={handleChange} className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="duration" placeholder="Duration" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <button type="submit" disabled={loading} className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-md">{loading ? "Creating..." : "Create Education"}</button>
        </form>
      </main>
    </div>
  );
}
