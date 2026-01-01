import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/contact/submit", form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT: Contact Info */}
        <div className="text-left">
          <h2 className="text-3xl font-semibold">
            Get in <span className="text-blue-400">Touch</span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below or send a message using the contact form.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:rakesh.r250305@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                rakesh.r250305@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaGithub className="text-blue-400" />
              <a
                href="https://github.com/rakesh250305"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                github.com/Rakesh250305
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://linkedin.com/in/rakesh0325"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                linkedin.com/in/rakesh0325
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          className="bg-gray-950 border border-white/10 rounded-xl p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg font-medium text-white">
            Send a Message
          </h3>

          <input
          name="name"
          value={form.name}
          onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-sm bg-black border border-white/10 rounded-md focus:outline-none focus:border-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 text-sm bg-black border border-white/10 rounded-md focus:outline-none focus:border-blue-400"
            required
          />

          <textarea
          name="message"
            rows="4"
            value={form.value}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 text-sm bg-black border border-white/10 rounded-md focus:outline-none focus:border-blue-400"
            required
          />

          {success && (
            <p className="text-green-400 text-sm">{success}</p>
          )}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2 bg-blue-500 text-black font-medium rounded-md hover:bg-blue-400 transition"
          >
            {loading ? "sending" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
