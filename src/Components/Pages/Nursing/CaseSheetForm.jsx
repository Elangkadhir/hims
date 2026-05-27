import React from "react";

function CaseSheetForm() {
  const inputStyle =
    "w-full border border-gray-200 rounded-md px-3 py-2 text-[12px] outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white";

  const textareaStyle =
    "w-full border border-gray-200 rounded-md px-3 py-2 text-[12px] resize-none outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white";

  const sectionTitle =
    "text-sm font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4";

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
        <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
          Patient Case Sheet
        </h1>

        {/* Main Complaints */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Main Complaints</h2>

          <div className="grid md:grid-cols-3 gap-3 mb-3">
            {[
              "Presenting Complaint 1",
              "Presenting Complaint 2",
              "Presenting Complaint 3",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Associated Complaint 1",
              "Associated Complaint 2",
              "Associated Complaint 3",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>
        </section>

        {/* History */}
        <section className="mb-6">
          <h2 className={sectionTitle}>History</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              "History of Present Illness",
              "History of Past Illness",
              "Family History",
              "Personal History",
              "Treatment History",
              "Sexual / Social / Occupational History",
            ].map((item, index) => (
              <textarea
                key={index}
                rows={3}
                placeholder={item}
                className={textareaStyle}
              />
            ))}
          </div>
        </section>

        {/* Physical Examination */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Physical Examination</h2>

          <div className="grid md:grid-cols-4 gap-3 mb-3">
            {[
              "Pulse",
              "Respiration",
              "Temperature",
              "Blood Pressure",
              "Weight",
              "Height",
              "BMI",
              "Edema",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            {[
              "Scalp",
              "Eyes",
              "Nose",
              "Oral Cavity",
              "Tongue",
              "Neck Glands",
              "Nails",
              "Lymph Nodes",
              "Pallor / Anemia",
              "Cyanosis",
              "Jaundice",
              "Pigmentation",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>
        </section>

        {/* Respiratory */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Respiratory System</h2>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Respiratory Rate & Rhythm",
              "Shape & Symmetry of Chest",
              "Nose",
              "Crepitations",
              "Rhonchi",
              "Pleural Rub",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>
        </section>

        {/* Cardiovascular */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Cardiovascular System</h2>

          <div className="grid md:grid-cols-3 gap-3 mb-3">
            {[
              "Pulse Rate",
              "Rhythm",
              "Volume",
              "Blood Pressure",
              "Raised JVP",
              "Pedal Edema",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>

          <textarea
            rows={3}
            placeholder="Auscultation / Murmurs / Added Sounds"
            className={textareaStyle}
          />
        </section>

        {/* Gastrointestinal */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Gastrointestinal System</h2>

          <div className="grid md:grid-cols-4 gap-3 mb-3">
            {[
              "Lips",
              "Teeth",
              "Tongue",
              "Tonsils",
              "Abdomen Shape",
              "Umbilicus",
              "Hernial Orifices",
              "Visible Blood Vessels",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Tenderness",
              "Liver",
              "Spleen",
              "Swelling",
              "Rebound Tenderness",
              "Free Fluid",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>
        </section>

        {/* CNS */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Central Nervous System</h2>

          <div className="grid md:grid-cols-3 gap-3 mb-3">
            {[
              "Mental Status",
              "Memory",
              "Orientation",
              "Speech",
              "General Behavior",
              "Gait",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className={inputStyle}
              />
            ))}
          </div>

          <div className="space-y-3">
            <textarea
              rows={3}
              placeholder="Cranial Nerve Examination"
              className={textareaStyle}
            />

            <textarea
              rows={3}
              placeholder="Motor System / Sensory System Findings"
              className={textareaStyle}
            />
          </div>
        </section>

        {/* Investigation */}
        <section className="mb-6">
          <h2 className={sectionTitle}>Investigation Advised</h2>

          <div className="grid md:grid-cols-4 gap-3">
            {[
              "Blood",
              "Urine",
              "Sputum",
              "CSF",
              "X-Ray",
              "CT",
              "MRI",
              "Others",
            ].map((item, index) => (
              <textarea
                key={index}
                rows={2}
                placeholder={item}
                className={textareaStyle}
              />
            ))}
          </div>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className={sectionTitle}>Provisional Diagnosis</h2>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Specialty Code"
              className={inputStyle}
            />

            <input
              type="text"
              placeholder="Package Code"
              className={inputStyle}
            />
          </div>

          <textarea
            rows={4}
            placeholder="Diagnosis Notes"
            className={textareaStyle}
          />
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 text-xs rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
            Cancel
          </button>

          <button className="px-4 py-2 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Save Case Sheet
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseSheetForm;