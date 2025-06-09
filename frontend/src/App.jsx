import { useState } from "react";
import axios from "axios";
import { FaBell } from "react-icons/fa";

function App() {
  const [form, setForm] = useState({
    message: "",
    date: "",
    time: "",
    method: "email",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("http://localhost:5000/api/reminders", form);
      setStatus("✅ Reminder saved successfully!");
      setForm({ message: "", date: "", time: "", method: "email" });
    } catch (err) {
      setStatus("❌ Failed to save reminder");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md shadow-2xl border border-white/30 rounded-3xl max-w-md w-full p-8 animate-fade-in transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center mb-6 text-white">
          <FaBell className="text-3xl mr-2" />
          <h1
            className="text-4xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 drop-shadow-md animate-fade-in"
          >
            🚨 Remind Me Later
          </h1>

        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Reminder message"
            className="w-full px-4 py-3 bg-white/80 placeholder-gray-500 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <select
            name="method"
            value={form.method}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
          >
            🚀 Save Reminder
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-white font-medium animate-pulse">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
