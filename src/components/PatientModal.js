import React from "react";

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PatientModal;

