import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { upload } from "@vercel/blob/client";

export default function CreateProject() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------- input change ----------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------- image change ----------
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate type
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }

    // Validate size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ---------- submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Image is required");
      return;
    }

    try {
      setLoading(true);

      // Upload image to Vercel Blob
      const blob = await upload(
        `projects/${Date.now()}-${image.name}`,
        image,
        {
          access: "public",
          handleUploadUrl: `${apiUrl}/api/blob/upload`,
        }
      );

      // Send data to backend
      await axios.post(
        `${apiUrl}/admin/projects/create`,
        {
          title: formData.title,
          description: formData.description,
          tech: formData.tech,
          githubUrl: formData.github,
          liveUrl: formData.live,
          imageUrl: blob.url,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      alert("Project Created Successfully!");
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

          {/* Image Upload */}
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
                    setImage(null);
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
