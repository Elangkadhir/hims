import React from "react";
import {
  FaRupeeSign,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaUser,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaInfoCircle,
  FaClipboardList,
  FaHourglassHalf,
} from "react-icons/fa";

const Billingsummary = () => {
  const billData = [
    ["Room Charges", "5,000.00"],
    ["Doctor Consultation", "2,000.00"],
    ["Nursing Charges", "1,500.00"],
    ["Lab Tests", "3,000.00"],
    ["Pharmacy / Medicines", "4,000.00"],
    ["Procedure / Surgery Charges", "10,000.00"],
    ["Miscellaneous Charges", "500.00"],
  ];

  const payments = [
    {
      title: "Patient Payable Amount",
      amount: "₹8,000.00",
      color: "bg-purple-500",
    },
    {
      title: "Paid Amount",
      amount: "₹5,000.00",
      color: "bg-green-500",
    },
    {
      title: "Outstanding Amount",
      amount: "₹3,000.00",
      color: "bg-orange-500",
    },
    {
      title: "Payment Status",
      amount: "Partial Paid",
      color: "bg-blue-500",
    },
  ];

  const history = [
    ["15 May 2024", "Cash", "CASH15234", "2,000.00"],
    ["18 May 2024", "Card", "CRD18456", "2,000.00"],
    ["21 May 2024", "UPI", "UPI21567", "1,000.00"],
  ];

  const timeline = [
    "Claim Initiated",
    "Claim Submitted to TPA",
    "Under Review",
    "Claim Approved",
    "Amount Settled",
  ];

  const settlement = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Total Hospital Bill",
      amount: "₹26,000.00",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Paid",
      amount: "₹18,000.00",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      icon: <FaUser />,
      title: "Patient Share",
      amount: "₹8,000.00",
      bg: "bg-orange-50",
      text: "text-orange-500",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Paid Amount",
      amount: "₹5,000.00",
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Balance Amount",
      amount: "₹3,000.00",
      bg: "bg-red-50",
      text: "text-red-500",
    },
  ];

  return (
    <div className="p-3 bg-slate-100 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-3">
        {/* Bill Breakup */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="p-3 border-b flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
              1
            </div>
            <h2 className="font-semibold text-sm">Bill Breakup</h2>
          </div>

          <table className="w-full text-xs">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-2">#</th>
                <th className="text-left p-2">Particulars</th>
                <th className="text-right p-2">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {billData.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{item[0]}</td>
                  <td className="p-2 text-right">{item[1]}</td>
                </tr>
              ))}
              <tr className="border-t bg-blue-50 font-semibold">
                <td />
                <td className="p-2 text-blue-700">Total (Gross Bill Amount)</td>
                <td className="p-2 text-right text-blue-700">26,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Insurance Summary */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="p-3 border-b flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
              2
            </div>
            <h2 className="font-semibold text-sm">Insurance Summary</h2>
          </div>

          <div className="p-3 space-y-3 text-xs">
            <div className="flex justify-between">
              <span>Total Bill Amount</span>
              <span className="font-semibold">₹26,000.00</span>
            </div>

            <div className="flex justify-between text-blue-600">
              <span>Insurance Eligible Amount</span>
              <span>₹20,000.00</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Insurance Approved Amount</span>
              <span>₹18,000.00</span>
            </div>

            <div className="flex justify-between text-orange-500">
              <span>Insurance Deduction</span>
              <span>₹2,000.00</span>
            </div>

            <div className="flex justify-between text-purple-600">
              <span>Co-payment (Patient Share)</span>
              <span>₹1,000.00</span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Non-covered Charges</span>
              <span>₹5,000.00</span>
            </div>

            <div className="bg-green-50 rounded-lg p-2 flex justify-between text-green-700 font-semibold">
              <span>Patient Payable Amount</span>
              <span>₹8,000.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid lg:grid-cols-3 gap-3 mt-3">
        {/* Payment Summary */}
        <div className="bg-white rounded-xl border">
          <div className="p-3 border-b flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
              3
            </div>
            <h2 className="font-semibold text-sm">Payment Summary</h2>
          </div>

          {payments.map((item, i) => (
            <div key={i} className="p-2.5 border-b flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-md ${item.color} text-white flex items-center justify-center text-xs`}
              >
                <FaRupeeSign />
              </div>

              <div>
                <p className="text-[11px] text-slate-500">{item.title}</p>
                <p className="font-semibold text-xs">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-xl border">
          <div className="p-3 border-b flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              4
            </div>
            <h2 className="font-semibold text-sm">Payment History</h2>
          </div>

          <table className="w-full text-xs">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Mode</th>
                <th className="p-2 text-left">Transaction</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{item[0]}</td>
                  <td className="p-2">{item[1]}</td>
                  <td className="p-2">{item[2]}</td>
                  <td className="p-2 text-right">{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-3 border-t text-blue-600 text-xs font-semibold flex justify-between">
            <span>Total Paid Amount</span>
            <span>₹5,000.00</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl border">
          <div className="p-3 border-b flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">
              5
            </div>
            <h2 className="font-semibold text-sm">Claim Status Timeline</h2>
          </div>

          <div className="p-3">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                  {i === 2 ? <FaHourglassHalf /> : <FaCheckCircle />}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-xs">{item}</p>
                  <p className="text-[10px] text-slate-500">Completed</p>
                </div>

                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full h-fit">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Settlement */}
      <div className="bg-white rounded-xl border mt-3 overflow-hidden">
        <div className="p-3 border-b flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
            6
          </div>
          <h2 className="font-semibold text-sm">Final Settlement Summary</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-1">
          {settlement.map((item, i) => (
            <div
              key={i}
              className="p-3 flex items-center gap-2 border-r last:border-r-0"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${item.bg} ${item.text}`}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-[10px] text-slate-500">{item.title}</p>
                <h4 className="font-bold text-sm">{item.amount}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t bg-slate-50 p-3 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2 text-blue-600">
            <FaInfoCircle />
            <span>
              Please clear the outstanding amount to complete the final
              settlement.
            </span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billingsummary;
