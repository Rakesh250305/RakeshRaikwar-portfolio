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
    highlights: [],
    image: null,
  });

  const [newHighlight, setNewHighlight] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------- input change ----------
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

        if (!formData.image) {
      alert("Image is required");
      return;
    }
    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("role", formData.role);
      fd.append("company", formData.company);
      fd.append("description", formData.description);
      fd.append("duration", formData.duration);
      fd.append("highlights", JSON.stringify(formData.highlights));
      if (formData.image) fd.append("image", formData.image);


      const res = await axios.post(
        `${apiUrl}/admin/experience/create`,
        // "http://localhost:5000/admin/experience/create"
        fd,
        {
          headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          // "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        alert("Experience Created Successfully!");
        navigate("/admin/experience/list");
      }
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
        <form
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <label className="ml-5 text-gray-300">Role</label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />

          <label className="ml-5 text-gray-300">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />

          <label className="ml-5 text-gray-300">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />

          <label className="ml-5 text-gray-300">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-white/10 rounded-md"
          />
          
          <div className="w-full">
            <label className="ml-5 text-gray-300">Highlights</label>
            <div >
              <input
                type="text"
                className="w-[90vw] px-4 py-2 bg-black border border-white/10 rounded-md"
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Enter Highlights"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();

                    const normalized = newHighlight.trim().toLowerCase();

if (
  formData.highlights.some(
    (h) => h.toLowerCase() === normalized
  )
) {
  alert("Duplicate highlights are not allowed");
  setNewHighlight("");
  return;
}


                    if (newHighlight.trim() === "") return;

                    setFormData((prev) => ({
                      ...prev,
                      highlights: [...prev.highlights, newHighlight.trim()],
                    }));

                    setNewHighlight("");
                  }
                }}
              />
              <button
                type="button"
                className="rounded-lg text-black text-3xl bg-slate-200 ml-2 border px-2 py-1 btn primary-btn"
                onClick={(e) => {
                    e.preventDefault();

                   const normalized = newHighlight.trim().toLowerCase();

if (
  formData.highlights.some(
    (h) => h.toLowerCase() === normalized
  )
) {
  alert("Duplicate highlights are not allowed");
  setNewHighlight("");
  return;
}


                    if (newHighlight.trim() === "") return;

                    setFormData((prev) => ({
                      ...prev,
                      highlights: [...prev.highlights, newHighlight.trim()],
                    }));

                    setNewHighlight("");
                }}
              >
                +
              </button>
            </div>

            {Array.isArray(formData.highlights) &&
              formData.highlights.map((h, idx) => (
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
                  {h}{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      color: "red",
                      marginLeft: "5px",
                    }}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        highlights: prev.highlights.filter((_, i) => i !== idx),
                      }))
                    }
                  >
                    &times;
                  </span>
                </div>
              ))}
          </div>


           <div className="space-y-2">
          <label className="ml-5 my-2 text-gray-400">Company Logo</label>
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
                    setFormData((prev) => ({ ...prev, image: null }));
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
            {loading ? "Creating..." : "Create Experience"}
          </button>
        </form>
      </main>
    </div>
  );
}
