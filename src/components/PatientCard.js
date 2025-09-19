import React from "react";

const PatientCard = ({ patient, onView }) => (
  <div className="bg-white rounded-2xl shadow-xl p-7 flex flex-col items-start justify-between border border-blue-100 hover:shadow-2xl transition duration-200">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-blue-700 mb-2 tracking-wide drop-shadow">
        {patient.name}
      </h3>
      <p className="text-blue-900 mb-1">
        <span className="font-semibold">Age:</span> {patient.age}
      </p>
      <p className="text-blue-900">
        <span className="font-semibold">Contact:</span> {patient.contact}
      </p>
    </div>
    <button
      onClick={() => onView(patient)}
      className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
    >
      View Details
    </button>
  </div>
);

export default PatientCard;
