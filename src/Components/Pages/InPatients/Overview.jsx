import React from 'react'

function Overview() {
  return (
    <div>
             <div className="grid grid-cols-3 gap-3">
              {/* CARD */}
              {[
                {
                  title: "CLINICAL OVERVIEW",
                  data: [
                    ["Chief Complaint", "Chest pain & breathlessness"],
                    ["Provisional Diagnosis", "Acute Coronary Syndrome"],
                    ["Final Diagnosis", "NSTEMI"],
                    ["Current Condition", "Stable"],
                    ["Allergies", "Penicillin"],
                    ["Infection Status", "None"],
                    ["Isolation Required", "No"],
                    ["Conscious Level", "Alert"],
                  ],
                },
                {
                  title: "VITALS (Latest)",
                  data: [
                    ["Blood Pressure", "120/80 mmHg"],
                    ["Pulse Rate", "78 bpm"],
                    ["Temperature", "98.6 °F"],
                    ["Respiratory Rate", "18 /min"],
                    ["SpO2", "98 %"],
                    ["Blood Sugar", "110 mg/dL"],
                    ["Weight / BMI", "72 kg / 24.5"],
                  ],
                },
                {
                  title: "TREATMENT SUMMARY",
                  data: [
                    ["Current Medications", "5 Medicines"],
                    ["IV Fluids", "Normal Saline"],
                    ["Oxygen Therapy", "Not Required"],
                    ["Procedures Done", "ECG, 2D Echo"],
                    ["Surgery Details", "Not Applicable"],
                    ["Physiotherapy", "Daily"],
                    ["Diet Plan", "Cardiac Diet"],
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-[#edf1f7] flex justify-between items-center">
                    <h2 className="text-[14px] font-bold text-[#111827]">
                      {section.title}
                    </h2>

                    {idx === 1 && (
                      <button className="text-[#5b5bd6] text-[12px] font-medium">
                        View Trend
                      </button>
                    )}
                  </div>

                  <div className="p-4 space-y-5">
                    {section.data.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between gap-3 text-[13px]"
                      >
                        <p className="text-[#6b7280]">{item[0]}</p>

                        {item[1] === "Stable" ? (
                          <span className="bg-[#dcfce7] text-[#16a34a] text-[11px] px-2 py-1 rounded-md font-medium">
                            Stable
                          </span>
                        ) : (
                          <p className="font-medium text-right text-[#111827]">
                            {item[1]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
                 <div className="grid grid-cols-3 gap-3 mt-5">
              {/* DOCTOR NOTES */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7]">
                  <h2 className="text-[14px] font-bold">
                    DOCTOR NOTES (Latest)
                  </h2>
                </div>

                <div className="p-4">
                  <p className="text-[13px] text-[#4b5563] leading-7">
                    Patient is stable. Chest pain reduced. Continue current
                    medications. Monitor vitals every 4 hours.
                  </p>

                  <div className="flex justify-between mt-8 text-[12px]">
                    <p className="font-medium text-[#5b5bd6]">Dr. Sharma</p>

                    <p className="text-[#6b7280]">15 Jan 2026, 11:30 AM</p>
                  </div>
                </div>
              </div>

              {/* NURSING */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7]">
                  <h2 className="text-[14px] font-bold">
                    NURSING NOTES (Latest)
                  </h2>
                </div>

                <div className="p-4 space-y-4 text-[13px] text-[#4b5563]">
                  <p>• 08:00 AM – Vitals normal.</p>
                  <p>• 09:00 AM – Medicines given.</p>
                  <p>• 10:00 AM – Patient comfortable.</p>
                  <p>• 11:00 AM – No complaints.</p>

                  <div className="flex justify-between pt-3 text-[12px]">
                    <p className="font-medium text-[#5b5bd6]">Nurse Kavya</p>

                    <p className="text-[#6b7280]">15 Jan 2026, 11:15 AM</p>
                  </div>
                </div>
              </div>

              {/* MEDICATION */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7]">
                  <h2 className="text-[14px] font-bold">MEDICATION TIMELINE</h2>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-3 bg-[#f4f6fb] rounded-xl overflow-hidden text-[12px] font-medium">
                    <button className="bg-[#5b5bd6] text-white py-2">
                      Morning
                    </button>

                    <button className="py-2 text-[#6b7280]">Afternoon</button>

                    <button className="py-2 text-[#6b7280]">Night</button>
                  </div>

                  <div className="space-y-5 mt-5">
                    {[
                      "Aspirin 75mg",
                      "Atorvastatin 40mg",
                      "Clopidogrel 75mg",
                    ].map((med, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-[12px] text-[#6b7280]">08:00 AM</p>

                          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />

                          <p className="text-[13px] font-medium">{med}</p>
                        </div>

                        <span className="bg-[#dcfce7] text-[#16a34a] text-[11px] px-2 py-1 rounded-md font-medium">
                          Given
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
                <div className="grid grid-cols-4 gap-3 mt-5">
              {/* RECENT VITALS TREND */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7] flex items-center justify-between">
                  <h2 className="text-[14px] font-bold text-[#111827]">
                    RECENT VITALS TREND
                  </h2>

                  <button className="border border-[#e5e7eb] rounded-lg px-3 py-1 text-[12px] text-[#6b7280] font-medium">
                    Last 24 Hours
                  </button>
                </div>

                <div className="p-4">
                  {/* LEGEND */}
                  <div className="flex items-center gap-5 text-[11px] mb-4 ml-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-[2px] bg-[#5b5bd6]" />
                      <span className="text-[#6b7280]">BP (mmHg)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-[2px] bg-[#22c55e]" />
                      <span className="text-[#6b7280]">Pulse (bpm)</span>
                    </div>
                  </div>

                  {/* GRAPH */}
                  <div className="relative h-[120px]">
                    {/* GRID */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-[#eef2f7]" />
                      ))}
                    </div>

                    {/* Y AXIS */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#9ca3af]">
                      <span>150</span>
                      <span>120</span>
                      <span>90</span>
                      <span>60</span>
                      <span>30</span>
                    </div>

                    {/* SVG GRAPH */}
                    <svg
                      viewBox="0 0 280 120"
                      className="absolute left-6 top-0 w-[92%] h-full"
                    >
                      {/* PURPLE */}
                      <polyline
                        fill="none"
                        stroke="#5b5bd6"
                        strokeWidth="2.5"
                        points="0,55 35,45 70,55 105,45 140,55 175,45 210,55 245,45"
                      />

                      {/* GREEN */}
                      <polyline
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        points="0,85 35,80 70,85 105,80 140,82 175,80 210,85 245,80"
                      />

                      {/* POINTS */}
                      {[0, 35, 70, 105, 140, 175, 210, 245].map((x, i) => (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={[55, 45, 55, 45, 55, 45, 55, 45][i]}
                            r="3.5"
                            fill="#5b5bd6"
                          />

                          <circle
                            cx={x}
                            cy={[85, 80, 85, 80, 82, 80, 85, 80][i]}
                            r="3.5"
                            fill="#22c55e"
                          />
                        </g>
                      ))}
                    </svg>

                    {/* X AXIS */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-[#9ca3af]">
                      <span>12 PM</span>
                      <span>4 PM</span>
                      <span>8 PM</span>
                      <span>12 AM</span>
                      <span>4 AM</span>
                      <span>8 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAB REPORTS */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7] flex items-center justify-between">
                  <h2 className="text-[14px] font-bold text-[#111827]">
                    LAB REPORTS
                  </h2>

                  <div className="flex gap-2">
                    <span className="bg-[#fff7ed] text-[#f97316] text-[11px] font-medium px-2 py-1 rounded-md">
                      2 Pending
                    </span>

                    <span className="bg-[#f0fdf4] text-[#22c55e] text-[11px] font-medium px-2 py-1 rounded-md">
                      5 Completed
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-6">
                  {[
                    ["CBC", "Ordered on 15 Jan 2026", "Pending"],
                    ["Troponin I", "Ordered on 15 Jan 2026", "Pending"],
                    ["Lipid Profile", "14 Jan 2026", "Normal"],
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between">
                      <div>
                        <p className="text-[13px] font-semibold text-[#111827]">
                          {item[0]}
                        </p>

                        <p className="text-[11px] text-[#6b7280] mt-1">
                          {item[1]}
                        </p>
                      </div>

                      <span
                        className={`text-[11px] font-medium px-2 py-1 rounded-md ${
                          item[2] === "Pending"
                            ? "bg-[#fff7ed] text-[#f97316]"
                            : "bg-[#f0fdf4] text-[#22c55e]"
                        }`}
                      >
                        {item[2]}
                      </span>
                    </div>
                  ))}

                  <button className="w-full text-center text-[#5b5bd6] text-[13px] font-medium pt-2">
                    View All Lab Reports
                  </button>
                </div>
              </div>

              {/* RADIOLOGY */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7] flex items-center justify-between">
                  <h2 className="text-[14px] font-bold text-[#111827]">
                    RADIOLOGY
                  </h2>

                  <button className="text-[#5b5bd6] text-[12px] font-medium">
                    View All
                  </button>
                </div>

                <div className="p-4 space-y-6">
                  {[
                    ["Chest X-Ray", "14 Jan 2026", "Normal"],
                    ["2D Echo", "15 Jan 2026", "Completed"],
                    ["CT Angiography", "--", "Not Done"],
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center">
                        <p className="text-[13px] font-semibold text-[#111827]">
                          {item[0]}
                        </p>

                        <span
                          className={`text-[11px] font-medium px-2 py-1 rounded-md ${
                            item[2] === "Normal" || item[2] === "Completed"
                              ? "bg-[#f0fdf4] text-[#22c55e]"
                              : "bg-[#f5f3ff] text-[#7c3aed]"
                          }`}
                        >
                          {item[2]}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#6b7280] mt-1">
                        {item[1]}
                      </p>
                    </div>
                  ))}

                  <button className="w-full text-center text-[#5b5bd6] text-[13px] font-medium pt-2">
                    View All Radiology Reports
                  </button>
                </div>
              </div>

              {/* DISCHARGE */}
              <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#edf1f7]">
                  <h2 className="text-[14px] font-bold text-[#111827]">
                    DISCHARGE PLANNING
                  </h2>
                </div>

                <div className="p-4 space-y-5">
                  {[
                    ["Expected Discharge", "20 Jan 2026"],
                    ["Discharge Summary", "In Progress"],
                    ["Pharmacy Clearance", "Pending"],
                    ["Billing Clearance", "Pending"],
                    ["Follow-up Date", "25 Jan 2026"],
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between gap-3">
                      <p className="text-[12px] text-[#6b7280]">{item[0]}</p>

                      <p className="text-[12px] font-medium text-[#111827] text-right">
                        {item[1]}
                      </p>
                    </div>
                  ))}

                  <button className="w-full text-center text-[#5b5bd6] text-[13px] font-medium pt-3">
                    View Discharge Details
                  </button>
                </div>
              </div>
            </div>

    </div>
  )
}

export default Overview;