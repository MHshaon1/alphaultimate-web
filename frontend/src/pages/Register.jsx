import { useState } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("employee");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Register: ${name} (${email}) as ${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Register New User</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" className="p-3 rounded bg-gray-800 text-white" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" className="p-3 rounded bg-gray-800 text-white" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" className="p-3 rounded bg-gray-800 text-white" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <select className="p-3 rounded bg-gray-800 text-white" value={role} onChange={e => setRole(e.target.value)}>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:bg-blue-900 transition">Register</button>
        </form>
      </div>
    </div>
  );
}
