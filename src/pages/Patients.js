import React, { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import mockPatients from "../data/mockPatients";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    // Simulate API fetch
    setTimeout(() => {
      setPatients(mockPatients);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddPatient = (newPatient) => {
    setPatients([newPatient, ...patients]);
  };

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container mx-auto py-10 px-2">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Patient Records</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 w-full">
          <AddPatientForm onAdd={handleAddPatient} />
        </div>
        <div className="md:w-2/3 w-full">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {loading ? (
            <div className="text-center py-10 text-blue-600 font-semibold">Loading patients...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-600 font-semibold">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {filteredPatients.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">No patients found.</div>
              ) : (
                filteredPatients.map((patient) => (
                  <PatientCard
                    key={patient.id}
                    patient={patient}
                    onView={setSelectedPatient}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
      {selectedPatient && (
        <PatientModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
      )}
    </section>
  );
};

export default Patients;