import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function EducationList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await axios.get(
          `${apiUrl}/admin/education`
          // "http://localhost:5000/admin/education"
          , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setEducations(res.data.result);
      } catch (err) {
        console.error("Error fetching educations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEducations();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this education?")) return;
    try {
      await axios.delete(`http://localhost:5000/admin/education/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setEducations(educations.filter((ed) => ed._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold">Education</h1>

        {loading ? (
          <p className="mt-4 text-gray-400">Loading education data...</p>
        ) : (
          <table className="min-w-full mt-4 bg-gray-900 border border-gray-800 rounded-lg">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th>#</th>
                <th className="px-4 py-2">Degree</th>
                <th className="px-4 py-2">Field</th>
                <th className="px-4 py-2">Institute</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {educations.map((ed,i) => (
                <tr key={i} className="border-b border-gray-800 hover:bg-gray-800 text-center ">
                  <td>{i+1}</td>
                  <td className="px-4 py-2">{ed.degree}</td>
                  <td className="px-4 py-2">{ed.field}</td>
                  <td className="px-4 py-2">{ed.institute}</td>
                  <td className="px-4 py-2">{ed.duration}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-white flex items-center gap-1">
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ed._id)}
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
