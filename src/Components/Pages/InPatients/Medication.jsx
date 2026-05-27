import React from "react";
import { FaPills, FaClock } from "react-icons/fa";

function Medication() {
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

    {
      date: "27.10.2026",
      day: "Wednesday",
      medicines: [
        {
          name: "ADCO-AMOXYCILLIN",
          doses: [
            {
              session: "Morning",
              time: "08:00 AM",
              info: "TID",
              status: "Given",
            },
            {
              session: "Afternoon",
              time: "02:00 PM",
              info: "650 mg",
              status: "Pending",
            },
            {
              session: "Evening",
              time: "08:30 PM",
              info: "1 Tablet",
              status: "Given",
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

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6]">
            <FaPills className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">Medication</h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Inpatient Medication Administration Record
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
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

      {/* TABLE HEADER */}
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <div className="min-w-[860px]">
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[120px_140px_repeat(4,110px)] gap-3 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
              <h3 className="text-[12px] font-bold text-[#374151]">Date</h3>

              <h3 className="text-[12px] font-bold text-[#374151]">
                Medicine Name
              </h3>

              {["Morning", "Afternoon", "Evening", "Night"].map(
                (time, index) => (
                  <h3
                    key={index}
                    className="text-[12px] font-bold text-[#374151]"
                  >
                    {time}
                  </h3>
                ),
              )}
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
                              <div className="bg-[#f8fafc] border border-[#edf1f7] rounded-lg p-2 min-h-[72px] w-[105px]">
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

                                {/* STATUS */}
                                <div
                                  className={`inline-flex mt-2 text-[9px] font-semibold px-2 py-[3px] rounded-md ${getStatusStyle(
                                    dose.status,
                                  )}`}
                                >
                                  {dose.status}
                                </div>
                              </div>
                            ) : (
                              <div className="bg-[#f9fafb] border border-dashed border-[#e5e7eb] rounded-lg h-[72px] w-[105px]" />
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
      </div>
    </div>
  );
}

export default Medication;
