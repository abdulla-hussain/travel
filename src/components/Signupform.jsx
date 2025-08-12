import React, { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Update state on input or select change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-3">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      {/* Role Select */}
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      >
        <option value="">-- Select Role --</option>
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
        <option value="manager">Manager</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
