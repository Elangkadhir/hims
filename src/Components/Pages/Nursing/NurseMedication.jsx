import React, { useState } from "react";
import { FaPills, FaClock, FaEdit, FaTimes, FaCheck } from "react-icons/fa";

function NurseMedication() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedDose, setSelectedDose] = useState(null);

  const medicationData = [
    {
      date: "30.10.2026",
      day: "Saturday",

      medicines: [
        {
          name: "ADCO-AMOXYCILLIN",

          doses: [
            {
              session: "Morning",
              time: "08:00 AM",
              info: "500 mg",
              status: "Given",
            },

            {
              session: "Afternoon",
              time: "01:00 PM",
              info: "1 Tablet",
              status: "Given",
            },

            {
              session: "Evening",
              time: "07:00 PM",
              info: "IV Dose",
              status: "Pending",
            },
          ],
        },

        {
          name: "AMOXIL",

          doses: [
            {
              session: "Morning",
              time: "09:00 AM",
              info: "650 mg",
              status: "Given",
            },

            {
              session: "Afternoon",
              time: "02:00 PM",
              info: "BD",
              status: "Given",
            },

            {
              session: "Evening",
              time: "08:00 PM",
              info: "SOS",
              status: "Missed",
            },
          ],
        },

        {
          name: "AUSTELL-PARACETAMOL",

          doses: [
            {
              session: "Morning",
              time: "07:30 AM",
              info: "1 Tablet",
              status: "Given",
            },

            {
              session: "Evening",
              time: "06:30 PM",
              info: "650 mg",
              status: "Pending",
            },
          ],
        },
      ],
    },

    {
      date: "28.10.2026",
      day: "Thursday",

      medicines: [
        {
          name: "ZOXIL S",

          doses: [
            {
              session: "Morning",
              time: "08:30 AM",
              info: "100 ml/hr",
              status: "Given",
            },

            {
              session: "Afternoon",
              time: "01:30 PM",
              info: "IV",
              status: "Given",
            },

            {
              session: "Evening",
              time: "07:30 PM",
              info: "500 mg",
              status: "Pending",
            },
          ],
        },
      ],
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Given":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Missed":
        return "bg-red-100 text-red-600";

      case "Held":
        return "bg-blue-100 text-blue-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6]">
            <FaPills className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              Nurse Medication
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Medication administration & nurse updates
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <input
            type="date"
            className="px-2 py-2 rounded-md border border-[#e5e7eb] text-[11px] outline-none focus:border-[#5b5bd6]"
          />
          <div className="bg-green-100 text-green-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            18 Given
          </div>

          <div className="bg-orange-100 text-orange-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            4 Pending
          </div>

          <div className="bg-red-100 text-red-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            1 Missed
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="min-w-[860px]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-[120px_140px_repeat(4,110px)] gap-3 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">Date</h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Medicine Name
            </h3>

            {["Morning", "Afternoon", "Evening", "Night"].map((time, index) => (
              <h3 key={index} className="text-[12px] font-bold text-[#374151]">
                {time}
              </h3>
            ))}
          </div>

          {/* CONTENT */}
          <div className="divide-y divide-[#edf1f7]">
            {medicationData.map((group, index) => (
              <div key={index} className="p-5">
                {group.medicines.map((medicine, medIndex) => (
                  <div
                    key={medIndex}
                    className="grid grid-cols-[120px_140px_repeat(4,110px)] gap-3 mb-4 last:mb-0"
                  >
                    {/* DATE */}
                    <div>
                      {medIndex === 0 && (
                        <>
                          <p className="text-[12px] font-semibold text-[#111827]">
                            {group.date}
                          </p>

                          <p className="text-[11px] text-[#6b7280] mt-1">
                            ({group.day})
                          </p>
                        </>
                      )}
                    </div>

                    {/* MEDICINE */}
                    <div className="w-[140px]">
                      <p className="text-[12px] font-semibold text-[#111827] leading-4">
                        {medicine.name}
                      </p>
                    </div>

                    {/* DOSE CARDS */}
                    {[0, 1, 2, 3].map((doseIndex) => {
                      const dose = medicine.doses[doseIndex];

                      return (
                        <div key={doseIndex}>
                          {dose ? (
                            <div className="bg-[#f8fafc] border border-[#edf1f7] rounded-lg p-2 min-h-[88px] w-[105px]">
                              {/* TIME */}
                              <div className="flex items-center gap-1 text-[#6b7280]">
                                <FaClock className="text-[9px]" />

                                <p className="text-[10px] font-medium">
                                  {dose.time}
                                </p>
                              </div>

                              {/* INFO */}
                              <p className="text-[11px] text-[#111827] font-semibold mt-2">
                                {dose.info}
                              </p>

                              {/* STATUS + EDIT */}
                              <div className="flex items-center justify-between mt-2">
                                <div
                                  className={`inline-flex text-[9px] font-semibold px-2 py-[3px] rounded-md ${getStatusStyle(
                                    dose.status,
                                  )}`}
                                >
                                  {dose.status}
                                </div>

                                <button
                                  onClick={() => {
                                    setSelectedDose({
                                      medicine: medicine.name,
                                      ...dose,
                                    });

                                    setOpenModal(true);
                                  }}
                                  className="w-5 h-5 rounded-md bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6] hover:bg-[#dfe5ff]"
                                >
                                  <FaEdit className="text-[9px]" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-[#f9fafb] border border-dashed border-[#e5e7eb] rounded-lg h-[88px] w-[105px]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[520px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  Nurse Medication Update
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Update medication administration status
                </p>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="w-9 h-9 rounded-lg bg-[#f4f6fb] flex items-center justify-center"
              >
                <FaTimes className="text-[12px]" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 grid grid-cols-2 gap-5">
              {/* MEDICINE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Medicine
                </label>

                <div className="mt-2 h-[42px] rounded-lg bg-[#f8fafc] border border-[#e5e7eb] px-3 flex items-center text-[12px] font-semibold text-[#111827]">
                  {selectedDose?.medicine}
                </div>
              </div>

              {/* TIME */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Scheduled Time
                </label>

                <div className="mt-2 h-[42px] rounded-lg bg-[#f8fafc] border border-[#e5e7eb] px-3 flex items-center text-[12px] font-semibold text-[#111827]">
                  {selectedDose?.time}
                </div>
              </div>

              {/* STATUS */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Medication Status
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Given</option>
                  <option>Pending</option>
                  <option>Missed</option>
                  <option>Held</option>
                </select>
              </div>

              {/* ADMINISTERED BY */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Administered By
                </label>

                <input
                  type="text"
                  placeholder="Enter nurse name"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* REMARKS */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Remarks
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter medication remarks..."
                  className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] resize-none outline-none focus:border-[#5b5bd6]"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="h-[38px] px-4 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold text-[#374151]"
              >
                Cancel
              </button>

              <button className="h-[38px] px-5 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2">
                <FaCheck className="text-[10px]" />
                Update Medication
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NurseMedication;
