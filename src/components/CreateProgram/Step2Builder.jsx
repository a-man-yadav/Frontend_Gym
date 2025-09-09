import React, { useEffect, useState } from "react";
import AddExerciseModal from "./AddExerciseModal";

const Step2Builder = ({ programData, setProgramData, prevStep }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const sessions = Number(programData.sessions) || 0;

  useEffect(() => {
    setProgramData((prev) => {
      const prevDays = prev.days || [];

      if (sessions > prevDays.length) {
        const newDays = [...prevDays];
        for (let i = prevDays.length; i < sessions; i++) {
          newDays.push({
            id: i,
            name: `Day ${i + 1}`,
            subtitle: "",
            exercises: [],
          });
        }
        return { ...prev, days: newDays };
      }

      if (sessions < prevDays.length) {
        return { ...prev, days: prevDays.slice(0, sessions) };
      }

      return prev;
    });
  }, [sessions]);

  const handleAddExerciseToDay = (exercise) => {
    if (activeDayIndex === null) return;
    setProgramData((prev) => {
      const days = prev.days ? [...prev.days] : [];
      const day = days[activeDayIndex] || { exercises: [] };
      const exists = (day.exercises || []).some((e) => e.id === exercise.id);
      if (exists) return prev;

      const newExercise = {
        ...exercise,
        instructions: "",
        sets: exercise.defaultSets,
        reps: exercise.defaultReps,
      };

      days[activeDayIndex] = {
        ...day,
        exercises: [...(day.exercises || []), newExercise],
      };

      return { ...prev, days };
    });
  };

  const handleRemoveExerciseFromDay = (dayIndex, exId) => {
    setProgramData((prev) => {
      const days = [...(prev.days || [])];
      days[dayIndex] = {
        ...days[dayIndex],
        exercises: (days[dayIndex].exercises || []).filter(
          (e) => e.id !== exId
        ),
      };
      return { ...prev, days };
    });
  };

  const updateExerciseField = (dayIndex, exId, field, value) => {
    setProgramData((prev) => {
      const days = [...(prev.days || [])];
      days[dayIndex] = {
        ...days[dayIndex],
        exercises: (days[dayIndex].exercises || []).map((ex) =>
          ex.id === exId ? { ...ex, [field]: value } : ex
        ),
      };
      return { ...prev, days };
    });
  };

  const days = programData.days || [];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-20">
      {/* Top nav row */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevStep}
          className="text-sm text-gray-300 hover:underline"
        >
          ← Back to Step 1
        </button>
        <div className="text-sm text-gray-400">Step 2 of 2</div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto mb-6 scrollbar-hide">
        {days.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setActiveDayIndex(i)}
            className={`min-w-[90px] px-3 py-2 rounded-lg border flex-shrink-0
              ${
                i === activeDayIndex
                  ? "bg-[#E50914] text-white border-[#E50914]"
                  : "bg-[#111] text-gray-300 border-gray-700"
              }`}
          >
            <div className="font-semibold text-sm">Day {i + 1}</div>
            <div className="text-xs mt-1 text-gray-400 truncate">
              {d.subtitle || "Session"}
            </div>
          </button>
        ))}
      </div>

      {/* Active day panel */}
      {days.length > 0 ? (
        <div className="bg-[#0b0b0b] rounded-lg p-6 border border-gray-800 shadow-inner">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">Day {activeDayIndex + 1}</h3>
              <input
                value={days[activeDayIndex].subtitle || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setProgramData((prev) => {
                    const copy = { ...prev };
                    copy.days = (copy.days || []).map((dd, idx) =>
                      idx === activeDayIndex
                        ? { ...dd, subtitle: value }
                        : dd
                    );
                    return copy;
                  });
                }}
                placeholder="e.g., Push Day"
                className="mt-2 bg-transparent border-b border-gray-700 text-gray-300 px-1 py-1 w-64"
              />
            </div>

            <div className="text-sm text-gray-400">
              {(days[activeDayIndex].exercises || []).length} exercises
            </div>
          </div>

          {/* Exercises list */}
          <div className="space-y-4">
            {(days[activeDayIndex].exercises || []).map((ex) => (
              <div
                key={ex.id}
                className="rounded-lg border border-gray-800 p-4 bg-[#111] flex gap-4"
              >
                <img
                  src={ex.thumbnail}
                  alt={ex.name}
                  className="w-28 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-white">{ex.name}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {(ex.muscleGroups || []).join(", ")}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={ex.sets ?? ex.defaultSets}
                        onChange={(e) =>
                          updateExerciseField(
                            activeDayIndex,
                            ex.id,
                            "sets",
                            Number(e.target.value)
                          )
                        }
                        className="w-16 text-center bg-transparent border border-gray-700 rounded px-2 py-1"
                        min={1}
                      />
                      <input
                        type="text"
                        value={ex.reps ?? ex.defaultReps}
                        onChange={(e) =>
                          updateExerciseField(
                            activeDayIndex,
                            ex.id,
                            "reps",
                            e.target.value
                          )
                        }
                        className="w-20 text-center bg-transparent border border-gray-700 rounded px-2 py-1"
                      />
                      <button
                        onClick={() =>
                          handleRemoveExerciseFromDay(activeDayIndex, ex.id)
                        }
                        className="text-red-400 text-sm ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-400">
                    <div className="font-medium text-xs text-gray-300 mb-1">
                      Instructions (optional)
                    </div>
                    <textarea
                      value={ex.instructions || ""}
                      onChange={(e) =>
                        updateExerciseField(
                          activeDayIndex,
                          ex.id,
                          "instructions",
                          e.target.value
                        )
                      }
                      placeholder="e.g., Keep your back straight..."
                      className="w-full bg-transparent border border-gray-700 rounded p-2 text-sm text-gray-200"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* placeholder when no exercises */}
            {(days[activeDayIndex].exercises || []).length === 0 && (
              <div className="p-6 text-gray-400 rounded-lg border border-dashed border-gray-700">
                No exercises yet — use the Add Exercise button.
              </div>
            )}
          </div>

          {/* Add Exercise button */}
          <div className="mt-6">
            <button
              onClick={() => {
                setIsOpen(true);
                if (activeDayIndex === null && days.length > 0)
                  setActiveDayIndex(0);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E50914] hover:bg-[#b20710] text-white rounded"
            >
              + Add Exercise
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-400">
          No days configured. Go back to Step 1 and select sessions.
        </div>
      )}

      {/* Modal */}
      <AddExerciseModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onAdd={(ex) => handleAddExerciseToDay(ex)}
      />
    </div>
  );
};

export default Step2Builder;
