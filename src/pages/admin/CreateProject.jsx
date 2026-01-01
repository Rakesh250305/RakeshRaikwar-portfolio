import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("tech", formData.tech); // comma-separated string
    data.append("github", formData.github);
    data.append("live", formData.live);
    // if (image) data.append("image", image);

    try {
      await axios.post("http://localhost:5000/admin/projects/create", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            "Content-Type": "application/json",
          //   "Content-Type": "multipart/form-data",

        },
      });
      navigate("/admin/project/list");
    } catch (err) {
      console.error(err);
      alert("Error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold mb-6">Create Project</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
            required
          />
          <input
            type="text"
            name="tech"
            placeholder="Tech (comma separated)"
            value={formData.tech}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />
          <input
            type="url"
            name="live"
            placeholder="Live URL"
            value={formData.live}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />
          {/* <input
            type="file"
            onChange={handleImageChange}
            className="w-full text-gray-400"
          /> */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </form>
      </main>
    </div>
  );
}
