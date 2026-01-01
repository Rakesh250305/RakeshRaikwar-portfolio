import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/experience", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setExperiences(res.data.result);
      } catch (err) {
        console.error("Error fetching experiences:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this experience?")) return;
    try {
      await axios.delete(`http://localhost:5000/admin/experience/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setExperiences(experiences.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold">Experiences</h1>

        {loading ? (
          <p className="mt-4 text-gray-400">Loading experiences...</p>
        ) : (
          <table className="min-w-full mt-4 bg-gray-900 border border-gray-800 rounded-lg">
            <thead className="bg-gray-800 text-gray-300">
              <tr >
                <th>#</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Duration</th>
                <th className=" px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((e,i) => (
                <tr key={e._id} className="border-b text-center border-gray-800 hover:bg-gray-800">
                  <td>{i+1}</td>
                  <td className="px-4 py-2">{e.role}</td>
                  <td className="px-4 py-2">{e.company}</td>
                  <td className="px-4 py-2">{e.duration}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-white flex items-center gap-1">
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-white flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}
