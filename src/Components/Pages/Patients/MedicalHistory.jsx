import React, { useState } from "react";

const MedicalHistory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: "Allergy Details",
      color: "emerald",
      fields: ["Allergy Type", "Allergy Name", "Onset Date"],
      items: [
        ["Drug Allergies", "Antibiotics", "2026-02-26"],
        ["Drug Allergies", "Antibiotics", "2026-02-06"],
      ],
    },
    {
      title: "Past Medical History",
      color: "violet",
      fields: ["Medical Condition", "Description", "Onset Date"],
      items: [
        ["Mitral Valve Prolapse", "", "2026-02-26"],
        ["Myasthenia Gravis", "", "2026-02-06"],
      ],
    },
    {
      title: "Surgical History",
      color: "blue",
      fields: ["Surgery Type", "Surgery Name", "Onset Date"],
      items: [
        ["Surgical History", "Bone Marrow Transplant", "2026-02-26"],
        ["Surgical History", "Testicular Surgery", "2026-02-06"],
      ],
    },
    {
      title: "Family History",
      color: "cyan",
      fields: ["Family History", "Condition Name", "Onset Date"],
      items: [
        ["Family History", "Alpha-1 Antitrypsin Deficiency", "2026-02-26"],
        ["Family History", "Alport Syndrome", "2026-02-06"],
      ],
    },
    {
      title: "Social History",
      color: "yellow",
      fields: ["Social History", "Description", "Onset Date"],
      items: [
        ["Social History", "Test", "2026-02-26"],
        ["Social History", "Normal", "2026-02-06"],
      ],
    },
    {
      title: "Medication",
      color: "pink",
      fields: ["Drug Name", "Dosage", "Onset Date"],
      items: [
        ["Drug Name", "Aasospas Tablet", "2026-02-26"],
        ["Drug Name", "Abendol 400mg Tablet", "2026-02-06"],
      ],
    },
    {
      title: "Chronic Conditions",
      color: "green",
      fields: ["Chronic Condition", "Description", "Onset Date"],
      items: [
        ["ChronicCondition", "Parkinson’s Disease", "2026-02-26"],
        ["ChronicCondition", "Neuropathy", "2013-11-20"],
      ],
    },
    {
      title: "Immunisations",
      color: "orange",
      fields: ["Immunisation", "Vaccine Name", "Onset Date"],
      items: [
        ["Immunisation", "Pneumococcal (PCV13, PPSV23)", "2026-02-26"],
        ["Immunisation", "Influenza(Flu)", "2021-07-22"],
      ],
    },
  ];

  const handleAddClick = (section) => {
    setSelectedSection(section);
    setOpenModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {sections.map((section, index) => (
          <MedicalHistoryCard
            key={index}
            section={section}
            onAdd={() => handleAddClick(section)}
          />
        ))}
      </div>

      {openModal && selectedSection && (
        <AddHistoryModal
          section={selectedSection}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

const MedicalHistoryCard = ({ section, onAdd }) => {
  const colorMap = {
    emerald: "bg-emerald-50 border-emerald-300",
    violet: "bg-violet-50 border-violet-300",
    blue: "bg-blue-50 border-blue-300",
    cyan: "bg-cyan-50 border-cyan-300",
    yellow: "bg-yellow-50 border-yellow-300",
    pink: "bg-pink-50 border-pink-300",
    green: "bg-green-50 border-green-300",
    orange: "bg-orange-50 border-orange-300",
  };

  return (
    <div className="h-[280px] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="shrink-0 flex items-center justify-between px-4 py-2 border-b border-slate-200">
        <h3 className="text-xs font-sans font-bold text-slate-800">{section.title}</h3>

        <button
          onClick={onAdd}
          className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold hover:bg-teal-700"
        >
          +
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollHide">
        {section.items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg border border-l-4 px-4 py-3 ${
              colorMap[section.color]
            }`}
          >
            <p className="text-xs font-sans text-slate-800">
              <span className="font-bold">{item[0]}:</span> {item[1]}
            </p>

            <p className="text-xs font-sans font-semibold text-slate-700 mt-3">
              Onset Date : {item[2]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddHistoryModal = ({ section, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
          <h2 className="text-white text-lg font-bold">Add {section.title}</h2>

          <button onClick={onClose} className="text-white text-xl font-bold">
            ×
          </button>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.fields.map((field, index) =>
            field.toLowerCase().includes("date") ? (
              <InputField key={index} label={field} type="date" />
            ) : (
              <InputField
                key={index}
                label={field}
                placeholder={`Enter ${field.toLowerCase()}`}
              />
            ),
          )}

          <div className="md:col-span-2">
            <TextAreaField label="Notes" placeholder="Enter notes" />
          </div>
        </div>

        <div className="flex justify-end gap-3 px-5 py-4 border-t bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0CB8A1] text-white text-sm font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
      />
    </div>
  );
};

const TextAreaField = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <textarea
        rows="3"
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
      />
    </div>
  );
};

export default MedicalHistory;
