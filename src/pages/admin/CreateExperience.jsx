import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateExperience() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    duration: "",
    description: "",
    highlights: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) data.append("image", image);

    try {
      await axios.post(
        `${apiUrl}/admin/experience/create`
        // "http://localhost:5000/admin/experience/create"
        , data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin/experience/list");
    } catch (err) {
      console.error(err);
      alert("Error creating experience");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold mb-6">Create Experience</h1>
        <form className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="role" placeholder="Role" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="company" placeholder="Company" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="text" name="duration" placeholder="Duration" onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <textarea name="highlights" placeholder="Highlights" onChange={handleChange} className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"/>
          <input type="file" onChange={handleImageChange} className="w-full text-gray-400"/>
          <button type="submit" disabled={loading} className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-md">{loading ? "Creating..." : "Create Experience"}</button>
        </form>
      </main>
    </div>
  );
}
