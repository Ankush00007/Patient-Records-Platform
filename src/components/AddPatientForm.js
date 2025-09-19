import React, { useState } from "react";

const AddPatientForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: "", age: "", contact: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.contact) return;
    onAdd({ ...formData, id: Date.now() });
    setFormData({ name: "", age: "", contact: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-200"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Add New Patient
      </h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter patient's name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter patient's age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
          Contact
        </label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Enter contact info"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Patient
      </button>
    </form>
  );
};

export default AddPatientForm;

