import React, { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((u) => ({
          id: u.id,
          name: u.name,
          age: 20 + (u.id % 50), // mock age
          contact: u.phone,
          email: u.email,
          address: `${u.address.suite}, ${u.address.city}`,
        }));
        setPatients(mapped);
        setFiltered(mapped);
      })
      .catch(() => setError("Failed to load patients"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      patients.filter((p) => p.name.toLowerCase().includes(q))
    );
  }, [search, patients]);

  const handleAdd = (newPatient) => {
    setPatients([newPatient, ...patients]);
    setFiltered([newPatient, ...filtered]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Patients</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
          className="px-3 py-2 border rounded w-64"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <AddPatientForm onAdd={handleAdd} />
        </div>

        <div className="md:col-span-2">
          {loading && <p>Loading patients...</p>}
          {error && <p className="text-red-600">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((p) => (
              <PatientCard key={p.id} patient={p} onView={() => setSelected(p)} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <PatientModal patient={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
