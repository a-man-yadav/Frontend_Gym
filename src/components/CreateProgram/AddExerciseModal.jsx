// src/components/CreateProgram/AddExerciseModal.jsx
import React, { useState, useMemo, useEffect } from "react";
import { exercises } from "../../data/exercises"; // your mock data
import useDebounce from "../../hooks/useDebounce";

const AddExerciseModal = ({ isOpen, onClose, onAdd }) => {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [muscle, setMuscle] = useState("all");
  const [equipment, setEquipment] = useState("all");

  const debouncedQuery = useDebounce(query, 250);
  const [results, setResults] = useState(exercises);

  // options derived from exercises (unique)
  const muscleOptions = useMemo(() => {
    const s = new Set();
    exercises.forEach((i) => (i.muscleGroups || []).forEach((m) => s.add(m)));
    return ["all", ...Array.from(s)];
  }, []);

  const equipmentOptions = useMemo(() => {
    const s = new Set();
    exercises.forEach((i) => (i.equipment || []).forEach((e) => s.add(e)));
    return ["all", ...Array.from(s)];
  }, []);

  const difficultyOptions = useMemo(() => {
    const s = new Set(exercises.map((i) => i.difficulty).filter(Boolean));
    return ["all", ...Array.from(s)];
  }, []);

  // filter logic using debounced query and selected filters
  useEffect(() => {
    const q = debouncedQuery.trim().toLowerCase();
    const filtered = exercises.filter((ex) => {
      const matchesQuery = !q || ex.name.toLowerCase().includes(q);
      const matchesDifficulty = difficulty === "all" || ex.difficulty === difficulty;
      const matchesMuscle = muscle === "all" || (ex.muscleGroups || []).includes(muscle);
      const matchesEquipment = equipment === "all" || (ex.equipment || []).includes(equipment);
      return matchesQuery && matchesDifficulty && matchesMuscle && matchesEquipment;
    });
    setResults(filtered);
  }, [debouncedQuery, difficulty, muscle, equipment]);

  // if modal closed, reset filters/search (optional but clean)
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setDifficulty("all");
      setMuscle("all");
      setEquipment("all");
      setResults(exercises);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal box */}
      <div className="relative z-10 w-full max-w-3xl bg-[#111] text-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Exercise</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* search + filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <input
            className="flex-1 border rounded px-3 py-2 bg-black border-gray-700"
            placeholder="Search exercises..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border rounded px-2 py-2 bg-black border-gray-700"
            aria-label="Filter by difficulty"
          >
            {difficultyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <select
            value={muscle}
            onChange={(e) => setMuscle(e.target.value)}
            className="border rounded px-2 py-2 bg-black border-gray-700"
            aria-label="Filter by muscle"
          >
            {muscleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <select
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="border rounded px-2 py-2 bg-black border-gray-700"
            aria-label="Filter by equipment"
          >
            {equipmentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* results */}
        <div className="grid grid-cols-1 gap-3 max-h-72 overflow-auto">
          {results.length === 0 && (
            <div className="text-sm text-gray-400">No exercises found.</div>
          )}

          {results.map((ex) => (
            <div
              key={ex.id}
              className="flex items-center gap-3 p-3 border rounded bg-black border-gray-700"
            >
              <img
                src={ex.thumbnail}
                alt={ex.name}
                className="w-20 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium">{ex.name}</div>
                <div className="text-sm text-gray-400">
                  {ex.defaultSets} x {ex.defaultReps} • {ex.difficulty}
                </div>
                <div className="text-xs text-gray-500">
                  {(ex.muscleGroups || []).join(", ")}
                </div>
              </div>

              <button
                onClick={() => {
                  onAdd(ex); // send selected exercise back to parent
                  // keep modal open for multiple adds; if you want to auto-close, call onClose() here
                }}
                className="px-3 py-1 rounded bg-[#E50914] text-white hover:bg-[#b20710]"
                aria-label={`Add ${ex.name}`}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddExerciseModal;
