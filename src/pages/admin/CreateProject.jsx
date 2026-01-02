import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: [],
    github: "",
    live: "",
    image: null,
  });

  const [newTech, setNewTech] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------- input change ----------
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
}else setFormData({ ...formData, [name]: value });
  };

  // ---------- submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Image is required");
      return;
    }

    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("description", formData.description);
      fd.append("githubUrl", formData.github);
      fd.append("liveUrl", formData.live);
      fd.append("tech",JSON.stringify(formData.tech));
      if(formData.image) fd.append("image",formData.image);

      const res = await axios.post(
        `${apiUrl}/admin/projects/create`,
        fd,{
          headers :{
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
            // "Content-Type": "multipart/form-data",
          },
          withCredentials:true,
        }
      );

      if(res.data.success){
        alert("Project Created Successfully!");
        navigate("/admin/project/list");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <main className="flex-1 p-8 mt-14 max-w-3xl mx-auto">
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
            <div className="mb-3">
          <label className="form-label">Technology</label>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              className="form-control"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Enter a Technology"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  const tech = newTech.trim().toLowerCase();
                  if (!tech) return;

                  if (formData.tech.includes(tech)) {
                    alert("Duplicate tags are not allowed");
                    setNewTech("");
                    return;
                  }

                  if (newTech.trim() === "") return;

                  setFormData((prev) => ({
                    ...prev,
                    tech: [...prev.tech, newTech.trim()],
                  }));

                  setNewTech("");
                }
              }}
            />
            <button
              type="button"
              className="btn primary-btn"
              onClick={(e) => {
                e.preventDefault();
                const tech = newTech.trim().toLowerCase();
                if (!tech) return;

                if (formData.tech.includes(tech)) {
                  alert("Duplicate tags are not allowed");
                  setNewTech("");
                  return;
                }
                if (newTech.trim() === "") return;
                setFormData((prev) => ({
                  ...prev,
                  tech: [...prev.tech, newTech.trim()],
                }));
                setNewTech("");
              }}
            >
              +
            </button>
          </div>

          {Array.isArray(formData.tech) &&
            formData.tech.map((t, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  background: "#e0e0e0",
                  margin: "3px",
                  borderRadius: "5px",
                }}
              >
                {t}{" "}
                <span
                  style={{ cursor: "pointer", color: "red", marginLeft: "5px" }}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      tech: prev.tech.filter((_, i) => i !== idx),
                    }))
                  }
                >
                  &times;
                </span>
              </div>
            ))}
        </div>
{/* 
          <input
            type="text"
            name="tech"
            placeholder="Tech (comma separated)"
            value={formData.tech}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          /> */}

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

          {/* Image Upload */}
          <div className="space-y-2">
            <input
              type="file"
              name="image"
              accept="image/*"
              id="image"
              onChange={handleChange}
              className="w-full text-gray-400"
            />

            {/* Preview */}
            {preview && (
              <div className="relative w-full max-w-sm">
                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-lg border border-gray-700 object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreview(null);
                  }}
                  className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

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
