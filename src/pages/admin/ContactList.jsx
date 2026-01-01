import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/contact", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setContacts(res.data.result);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        {loading ? (
          <p className="mt-4 text-gray-400">Loading messages...</p>
        ) : (
          <table className="min-w-full mt-4 bg-gray-900 border border-gray-800 rounded-lg">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th>#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c,i) => (
                <tr key={i} className="border-b text-center border-gray-800 hover:bg-gray-800">
                  <td>{i+1}</td>
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.email}</td>
                  <td className="px-4 py-2">{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}
