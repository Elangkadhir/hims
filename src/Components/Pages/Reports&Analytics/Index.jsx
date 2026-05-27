import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  Legend,
} from "recharts";

import Layout from "../../Layout/Layout";

function Analytics() {
  // Revenue Trend
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 5200 },
    { month: "Mar", revenue: 4800 },
    { month: "Apr", revenue: 7000 },
    { month: "May", revenue: 6200 },
    { month: "Jun", revenue: 8200 },
  ];

  // Department Revenue
  const departmentData = [
    { name: "Cardio", value: 9000 },
    { name: "Neuro", value: 7000 },
    { name: "Ortho", value: 5000 },
    { name: "Pedia", value: 6500 },
  ];

  // Gender Distribution
  const genderData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 35 },
    { name: "Other", value: 5 },
  ];

  // Bed Occupancy
  const bedData = [
    { name: "ICU", occupied: 85 },
    { name: "General", occupied: 70 },
    { name: "Emergency", occupied: 90 },
    { name: "Pedia", occupied: 60 },
  ];

  // Monthly Census
  const censusData = [
    { month: "Jan", patients: 240 },
    { month: "Feb", patients: 300 },
    { month: "Mar", patients: 350 },
    { month: "Apr", patients: 420 },
    { month: "May", patients: 390 },
    { month: "Jun", patients: 500 },
  ];

  // Wait Time by Department
  const waitTimeData = [
    { dept: "Cardio", wait: 25 },
    { dept: "Neuro", wait: 18 },
    { dept: "Ortho", wait: 30 },
    { dept: "Pedia", wait: 15 },
  ];

  // Monthly Growth
  const growthData = [
    { month: "Jan", revenue: 4000, patients: 240 },
    { month: "Feb", revenue: 5200, patients: 300 },
    { month: "Mar", revenue: 6100, patients: 350 },
    { month: "Apr", revenue: 7200, patients: 400 },
    { month: "May", revenue: 8200, patients: 450 },
  ];

  // Emergency Cases
  const emergencyData = [
    { name: "Critical", value: 40 },
    { name: "Moderate", value: 35 },
    { name: "Minor", value: 25 },
  ];

  // Surgeon Efficiency by Department
const surgeonData = [
  { dept: "Cardiac", efficiency: 92 },
  { dept: "Neuro", efficiency: 78 },
  { dept: "Ortho", efficiency: 88 },
  { dept: "ENT", efficiency: 65 },
  { dept: "General", efficiency: 82 },
];
  const COLORS = ["#2563eb", "#14b8a6", "#f97316"];

  return (
    <Layout>
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-gray-800">
            Reports & Analytics
          </h1>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          {/* Revenue Trend */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Revenue Trend
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={revenueData}>
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                />

                <YAxis tick={{ fontSize: 10 }} />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Department Revenue
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={departmentData}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                />

                <YAxis tick={{ fontSize: 10 }} />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#14b8a6"
                  radius={[4, 4, 0, 0]}
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
{/* Surgeon Efficiency */}
{/* Surgeon Efficiency */}
<div className="bg-white rounded-xl shadow-sm p-4">
  <h2 className="text-sm font-medium text-gray-700 mb-4">
    Surgeon Efficiency
  </h2>

  <div className="space-y-5">

    {/* Cardiac */}
    <div className="flex items-center justify-between">
      <div className="w-24 text-xs font-medium text-gray-700">
        Cardiac
      </div>

      <div className="flex-1 mx-3">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full"
            style={{ width: "72%" }}
          />
        </div>
      </div>

      <div className="text-sm font-semibold text-emerald-600 w-10">
        198
      </div>

      <div className="ml-3 bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        57%
      </div>
    </div>

    {/* Neuro */}
    <div className="flex items-center justify-between">
      <div className="w-24 text-xs font-medium text-gray-700">
        Neuro
      </div>

      <div className="flex-1 mx-3">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
            style={{ width: "35%" }}
          />
        </div>
      </div>

      <div className="text-sm font-semibold text-blue-600 w-10">
        60
      </div>

      <div className="ml-3 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        17%
      </div>
    </div>

    {/* Orthopedic */}
    <div className="flex items-center justify-between">
      <div className="w-24 text-xs font-medium text-gray-700">
        Orthopedic
      </div>

      <div className="flex-1 mx-3">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
            style={{ width: "48%" }}
          />
        </div>
      </div>

      <div className="text-sm font-semibold text-orange-600 w-10">
        89
      </div>

      <div className="ml-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        26%
      </div>
    </div>

  </div>
</div>
          {/* Gender Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-3">
  <h2 className="text-sm font-medium mb-2 text-gray-700">
    Gender Distribution
  </h2>

  <ResponsiveContainer width="100%" height={180}>
    <PieChart>
      <Pie
        data={genderData}
        dataKey="value"
        outerRadius={60}
        paddingAngle={3}
        labelLine={false}
      >
        {genderData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />

      {/* Bottom Labels */}
      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="circle"
        wrapperStyle={{
          fontSize: "10px",
          paddingTop: "10px",
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

          {/* Bed Occupancy */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Bed Occupancy
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={bedData}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                />

                <YAxis tick={{ fontSize: 10 }} />

                <Tooltip />

                <Bar
                  dataKey="occupied"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Census */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Monthly Census
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={censusData}>
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                />

                <YAxis tick={{ fontSize: 10 }} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="patients"
                  stroke="#14b8a6"
                  fill="#99f6e4"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Wait Time by Dept */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Wait Time by Dept
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                data={waitTimeData}
                layout="vertical"
                margin={{ left: 10 }}
              >
                <XAxis
                  type="number"
                  tick={{ fontSize: 10 }}
                />

                <YAxis
                  type="category"
                  dataKey="dept"
                  tick={{ fontSize: 10 }}
                  width={60}
                />

                <Tooltip />

                <Bar
                  dataKey="wait"
                  fill="#f97316"
                  radius={[0, 4, 4, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Growth */}
          <div className="bg-white rounded-xl shadow-sm p-3">
            <h2 className="text-sm font-medium mb-2 text-gray-700">
              Monthly Growth
            </h2>

            <ResponsiveContainer width="100%" height={180}>
              <ComposedChart data={growthData}>
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                />

                <YAxis tick={{ fontSize: 10 }} />

                <Tooltip />

                <Bar
                  dataKey="patients"
                  fill="#14b8a6"
                  barSize={16}
                />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Emergency Cases */}
        <div className="bg-white rounded-xl shadow-sm p-3">
  <h2 className="text-sm font-medium mb-2 text-gray-700">
    Emergency Cases
  </h2>

  <ResponsiveContainer width="100%" height={180}>
    <PieChart>
      <Pie
        data={emergencyData}
        dataKey="value"
        innerRadius={35}
        outerRadius={60}
        paddingAngle={4}
        labelLine={false}
      >
        {emergencyData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />

      {/* Bottom Labels */}
      <Legend
        verticalAlign="bottom"
        height={36}
        iconType="circle"
        wrapperStyle={{
          fontSize: "10px",
          paddingTop: "10px",
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

        </div>
      </div>
    </Layout>
  );
}

export default Analytics;