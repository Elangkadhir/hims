import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

function Adtf() {
  const [selectedCard, setSelectedCard] = useState("Admitted Today");

  const statusCards = [
    {
      label: "Admitted Today",
      count: 34,
      color: "#f97316",
      data: [
        { value: 8 },
        { value: 15 },
        { value: 10 },
        { value: 18 },
        { value: 12 },
        { value: 20 },
        { value: 17 },
      ],
    },
    {
      label: "Discharged Today",
      count: 21,
      color: "#9333ea",
      data: [
        { value: 5 },
        { value: 14 },
        { value: 8 },
        { value: 16 },
        { value: 10 },
        { value: 17 },
        { value: 15 },
      ],
    },
    {
      label: "Transfers In",
      count: 7,
      color: "#ea580c",
      data: [
        { value: 3 },
        { value: 8 },
        { value: 5 },
        { value: 11 },
        { value: 7 },
        { value: 13 },
        { value: 10 },
      ],
    },
    {
      label: "Awaiting Bed",
      count: 9,
      color: "#06b6d4",
      data: [
        { value: 4 },
        { value: 10 },
        { value: 6 },
        { value: 14 },
        { value: 9 },
        { value: 15 },
        { value: 12 },
      ],
    },
    {
      label: "Avg. Stay (Days)",
      count: 3.2,
      color: "#f59e0b",
      data: [
        { value: 2 },
        { value: 5 },
        { value: 3 },
        { value: 7 },
        { value: 4 },
        { value: 8 },
        { value: 6 },
      ],
    },
  ];

  const adtfData = {
    "Admitted Today": [
      {
        patient: "Arjun Kumar",
        ward: "Emergency",
        doctor: "Dr. Rajesh Kumar",
        wait: "-",
        status: "Admitted",
      },
      {
        patient: "Priya Sharma",
        ward: "Cardiology",
        doctor: "Dr. Anitha Menon",
        wait: "-",
        status: "Admitted",
      },
      {
        patient: "Kavin Raj",
        ward: "General",
        doctor: "Dr. Suresh Babu",
        wait: "-",
        status: "Admitted",
      },
      {
        patient: "Meena Lakshmi",
        ward: "Neurology",
        doctor: "Dr. Vivek Sharma",
        wait: "-",
        status: "Admitted",
      },
    ],

    "Discharged Today": [
      {
        patient: "Rohit Verma",
        ward: "Orthopedics",
        doctor: "Dr. Deepak Rao",
        wait: "-",
        status: "Discharged",
      },
      {
        patient: "Divya Nair",
        ward: "Cardiology",
        doctor: "Dr. Manoj Kumar",
        wait: "-",
        status: "Discharged",
      },
      {
        patient: "Sanjay Reddy",
        ward: "General",
        doctor: "Dr. Harini Devi",
        wait: "-",
        status: "Discharged",
      },
    ],

    "Transfers In": [
      {
        patient: "Aakash Patel",
        ward: "Emergency",
        doctor: "Dr. Karthik Raman",
        wait: "45m",
        status: "Transfer in",
      },
      {
        patient: "Sneha Iyer",
        ward: "Cardiology",
        doctor: "Dr. Praveen Kumar",
        wait: "22m",
        status: "Transfer in",
      },
      {
        patient: "Rahul Krishna",
        ward: "ICU",
        doctor: "Dr. Anoop Menon",
        wait: "18m",
        status: "Transfer in",
      },
    ],

    "Awaiting Bed": [
      {
        patient: "Karthika Devi",
        ward: "Emergency",
        doctor: "Dr. Arun Prakash",
        wait: "2h 10m",
        status: "Awaiting bed",
      },
      {
        patient: "Naveen Kumar",
        ward: "General",
        doctor: "Dr. Vijay Anand",
        wait: "1h 05m",
        status: "Awaiting bed",
      },
      {
        patient: "Lakshmi Priya",
        ward: "Cardiology",
        doctor: "Dr. Keerthana Raj",
        wait: "55m",
        status: "Awaiting bed",
      },
    ],

    "Avg. Stay (Days)": [
      {
        patient: "Vikram Singh",
        ward: "Neurology",
        doctor: "Dr. Bharath Kumar",
        wait: "-",
        status: "Monitoring",
      },
      {
        patient: "Anjali Menon",
        ward: "General",
        doctor: "Dr. Sandeep Rao",
        wait: "-",
        status: "Monitoring",
      },
    ],
  };

  const pendingActions = [
    {
      color: "bg-red-500",
      title: "Bed needed - Karthika Devi",
      sub: "Emergency → Cardiology ward",
      time: "since 9:00",
    },
    {
      color: "bg-orange-400",
      title: "Transport - Naveen Kumar",
      sub: "Awaiting discharge transport",
      time: "since 7:32",
    },
    {
      color: "bg-yellow-400",
      title: "Transfer out - Lakshmi Priya",
      sub: "Cardiology → Regional hospital",
      time: "since 7:00",
    },
    {
      color: "bg-cyan-400",
      title: "Discharge - 3 patients",
      sub: "General ward waiting for transport",
      time: "since 6:50",
    },
  ];

  return (
    <Layout>
      <div className="p-5 bg-[#f7f8fa] min-h-screen">
        <div className="mb-5">
          {" "}
          <h2 className="text-xl font-bold text-slate-800">ADTF Status</h2>{" "}
          <p className="text-xs text-slate-500 mt-1">
            {" "}
            Admit · Discharge · Transfer · Follow-up patient tracking{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-5 gap-4">
          {statusCards.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(item.label)}
              className={`rounded-xl bg-white border cursor-pointer transition-all duration-300 p-4
              ${
                selectedCard === item.label
                  ? "border-orange-300 shadow-md"
                  : "border-slate-200"
              }`}
            >
              <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                {item.label}
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-2">
                {item.count}
              </h2>

              {/* Graph */}
              <div className="h-14 w-full mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={item.data}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={item.color}
                      fill={item.color}
                      fillOpacity={0.15}
                      strokeWidth={2.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-5 mt-5">
          {/* Patient Table */}
          <div className="col-span-8 bg-white rounded-3xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  Patient List
                </h2>

                <p className="text-xs text-slate-400 mt-1">{selectedCard}</p>
              </div>

              <button className="text-[11px] font-bold text-orange-500 uppercase">
                View All
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 text-[11px] uppercase text-slate-500">
                  <th className="px-4 py-3 text-left">Patient</th>
                  <th className="px-4 py-3 text-left">Ward</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Doctor</th>
                  <th className="px-4 py-3 text-left">Wait Time</th>
                </tr>
              </thead>

              <tbody>
                {adtfData[selectedCard].map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 text-sm hover:bg-slate-50 transition"
                  >
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.patient}
                        </p>

                        <p className="text-[11px] text-slate-400">
                          #PAT-01{index + 40}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-slate-600">{item.ward}</td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold
                        ${
                          item.status === "Admitted"
                            ? "bg-emerald-50 text-emerald-600"
                            : item.status === "Discharged"
                              ? "bg-cyan-50 text-cyan-600"
                              : item.status === "Transfer in"
                                ? "bg-orange-50 text-orange-500"
                                : "bg-red-50 text-red-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-slate-600">{item.doctor}</td>

                    <td className="px-4 py-4 text-orange-500 font-semibold">
                      {item.wait}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pending Actions */}
          <div className="col-span-4 bg-[#f4f5f7] rounded-3xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-slate-800">
                Pending Actions
              </h2>

              <p className="text-xs text-slate-500">9 total</p>
            </div>

            <div className="space-y-5">
              {pendingActions.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${item.color}`}
                  ></div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-slate-700 font-medium">
                          {item.title}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          {item.sub}
                        </p>
                      </div>

                      <p className="text-xs text-slate-500 whitespace-nowrap">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full text-center text-[11px] uppercase font-bold text-orange-500">
              View All
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Adtf;
