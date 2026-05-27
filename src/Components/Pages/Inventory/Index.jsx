import React, { useState } from "react";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaBoxes,
  FaExclamationTriangle,
  FaCapsules,
  FaClipboardList,
  FaEdit,
  FaTimes,
  FaBarcode,
  FaFileInvoice,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";

function Inventory() {
  const [openAddItem, setOpenAddItem] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const summaryCards = [
    {
      title: "Total Items",
      value: "2,450",
      icon: <FaBoxes />,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Low Stock",
      value: "18",
      icon: <FaExclamationTriangle />,
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    {
      title: "Near Expiry",
      value: "12",
      icon: <FaCapsules />,
      bg: "bg-pink-50",
      text: "text-pink-600",
    },
    {
      title: "Pending Orders",
      value: "24",
      icon: <FaClipboardList />,
      bg: "bg-violet-50",
      text: "text-violet-600",
    },
  ];

  const inventoryList = [
    {
      id: "INV-1001",
      item: "Paracetamol 650mg",
      category: "Medicine",
      batch: "BT-2234",
      unit: "Box",
      price: "₹120",
      qty: 120,
      expiry: "12 Aug 2026",
      supplier: "MediCare Pharma",
      status: "In Stock",
    },
    {
      id: "INV-1002",
      item: "Surgical Gloves",
      category: "Surgical",
      batch: "BT-5521",
      unit: "Pack",
      price: "₹450",
      qty: 10,
      expiry: "02 Jul 2026",
      supplier: "Health Equip",
      status: "Low Stock",
    },
    {
      id: "INV-1003",
      item: "IV Fluids",
      category: "ICU",
      batch: "BT-7611",
      unit: "Bottle",
      price: "₹85",
      qty: 0,
      expiry: "18 Sep 2026",
      supplier: "Apollo Supply",
      status: "Out of Stock",
    },
    {
      id: "INV-1004",
      item: "Amoxicillin",
      category: "Medicine",
      batch: "BT-9011",
      unit: "Strip",
      price: "₹230",
      qty: 32,
      expiry: "25 Jun 2026",
      supplier: "LifeCare Pharma",
      status: "Near Expiry",
    },
    {
      id: "INV-1005",
      item: "ECG Gel",
      category: "Diagnostics",
      batch: "BT-1142",
      unit: "Tube",
      price: "₹95",
      qty: 45,
      expiry: "10 Dec 2026",
      supplier: "HealthLine",
      status: "In Stock",
    },
    {
      id: "INV-1006",
      item: "Insulin Syringe",
      category: "Injection",
      batch: "BT-6541",
      unit: "Piece",
      price: "₹15",
      qty: 250,
      expiry: "18 Nov 2027",
      supplier: "MediPlus",
      status: "In Stock",
    },
  ];

  const statusStyle = {
    "In Stock": "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
    "Low Stock": "bg-orange-50 text-orange-600 before:bg-orange-500",
    "Out of Stock": "bg-red-50 text-red-600 before:bg-red-500",
    "Near Expiry": "bg-pink-50 text-pink-600 before:bg-pink-500",
  };

  const openViewModal = (item) => {
    setSelectedItem(item);
    setOpenView(true);
  };

  const openUpdateModal = (item) => {
    setSelectedItem(item);
    setOpenUpdate(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 p-4 font-sans">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-sm text-cyan-600" />

              <h2 className="text-xl font-bold text-slate-800">
                Inventory Management
              </h2>
            </div>

            <button
              onClick={() => setOpenAddItem(true)}
              className="flex items-center gap-2 rounded-lg bg-[#08B8A8] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <FaPlus className="text-xs" />
              Add Item
            </button>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {card.title}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-slate-800">
                      {card.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg text-lg ${card.bg} ${card.text}`}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-end gap-4">
            <div className="flex flex-1 justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

                <input
                  type="text"
                  placeholder="Search (Item / Batch / Supplier)"
                  className="h-10 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="ml-auto w-40">
              <select className="h-10 w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none">
                <option>All Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] text-sm text-white">
                  <th className="px-5 py-3 font-semibold">Item ID</th>
                  <th className="px-5 py-3 font-semibold">Item Name</th>
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Batch</th>
                  <th className="px-5 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold">Price</th>
                  <th className="px-5 py-3 font-semibold">Quantity</th>
                  <th className="px-5 py-3 font-semibold">Expiry</th>
                  <th className="px-5 py-3 font-semibold">Supplier</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 text-center font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {inventoryList.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 text-sm text-slate-700 last:border-b-0"
                  >
                    <td className="px-5 py-3 font-medium">{item.id}</td>

                    <td className="px-5 py-3 font-semibold text-slate-800">
                      {item.item}
                    </td>

                    <td className="px-5 py-3">{item.category}</td>

                    <td className="px-5 py-3">{item.batch}</td>

                    <td className="px-5 py-3">{item.unit}</td>

                    <td className="px-5 py-3 font-semibold text-slate-800">
                      {item.price}
                    </td>

                    <td className="px-5 py-3 font-medium">{item.qty}</td>

                    <td className="px-5 py-3">{item.expiry}</td>

                    <td className="px-5 py-3">{item.supplier}</td>

                    <td className="px-5 py-3">
                      <span
                        className={`relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold before:h-2 before:w-2 before:rounded-full before:content-[''] ${
                          statusStyle[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => openViewModal(item)}
                          className="flex items-center gap-2 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-600"
                        >
                          <FaEye className="text-xs" />
                          View
                        </button>

                        <button
                          onClick={() => openUpdateModal(item)}
                          className="flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-600"
                        >
                          <FaEdit className="text-xs" />
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ADD ITEM MODAL */}
{openAddItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3">
        <h2 className="text-lg font-bold text-white">
          Add New Inventory Item
        </h2>

        <button
          onClick={() => setOpenAddItem(false)}
          className="text-white text-xl"
        >
          ×
        </button>
      </div>

      <div className="max-h-[85vh] overflow-y-auto p-5 space-y-6">

        {/* ITEM DETAILS */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Item Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Item Name"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">
              <option>Select Category</option>
              <option>Medicine</option>
              <option>Surgical</option>
              <option>ICU</option>
              <option>Injection</option>
              <option>Diagnostics</option>
            </select>

            <input
              type="text"
              placeholder="Batch Number"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">
              <option>Select Unit</option>
              <option>Box</option>
              <option>Pack</option>
              <option>Bottle</option>
              <option>Strip</option>
              <option>Piece</option>
            </select>

            <input
              type="number"
              placeholder="Price"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="number"
              placeholder="Quantity"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

          </div>
        </div>

        {/* STOCK DETAILS */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Stock Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input
              type="date"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="number"
              placeholder="Reorder Level"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Rack Location"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Store Location"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">
              <option>Select Status</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
              <option>Near Expiry</option>
            </select>

            <input
              type="text"
              placeholder="Department Usage"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

          </div>
        </div>

        {/* SUPPLIER DETAILS */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Supplier Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Supplier Name"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Supplier Contact"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Invoice Number"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

          </div>
        </div>

        {/* EXTRA ACTIONS */}
    

      </div>

      {/* FOOTER */}
      <div className="flex justify-end gap-3 border-t bg-slate-50 px-5 py-4">

        <button
          onClick={() => setOpenAddItem(false)}
          className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600"
        >
          Cancel
        </button>

        <button className="rounded-lg bg-[#08B8A8] px-5 py-2 text-sm font-bold text-white">
          Save Item
        </button>

      </div>
    </div>
  </div>
)}

     {/* VIEW MODAL */}
{openView && selectedItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3">
        <h2 className="text-lg font-bold text-white">
          Inventory Details
        </h2>

        <button
          onClick={() => setOpenView(false)}
          className="text-white text-xl"
        >
          ×
        </button>
      </div>

      <div className="max-h-[85vh] overflow-y-auto p-5 space-y-6">

        {/* ITEM INFO */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Item Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Item Name</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.item}
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Category</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.category}
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Unit</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.unit}
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Price</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.price}
              </h3>
            </div>

          </div>
        </div>

        {/* BATCH DETAILS */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Batch Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Batch Number</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.batch}
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">
                Manufacturing Date
              </p>
              <h3 className="font-bold text-slate-800">
                12 Jan 2026
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Expiry Date</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.expiry}
              </h3>
            </div>

          </div>
        </div>

        {/* SUPPLIER DETAILS */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Supplier Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Supplier Name</p>
              <h3 className="font-bold text-slate-800">
                {selectedItem.supplier}
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Supplier Contact</p>
              <h3 className="font-bold text-slate-800">
                +91 9876543210
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">Invoice Number</p>
              <h3 className="font-bold text-slate-800">
                INV-2026-5521
              </h3>
            </div>

          </div>
        </div>

        {/* STOCK DETAILS */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Stock Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-cyan-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">
                Available Quantity
              </p>

              <h3 className="text-xl font-bold text-cyan-700">
                {selectedItem.qty}
              </h3>
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">
                Reorder Level
              </p>

              <h3 className="text-xl font-bold text-orange-600">
                20
              </h3>
            </div>

            <div className="bg-violet-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">
                Last Updated
              </p>

              <h3 className="font-bold text-violet-700">
                12 May 2026
              </h3>
            </div>

            <div className="bg-pink-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">
                Department Usage
              </p>

              <h3 className="font-bold text-pink-700">
                ICU / Pharmacy
              </h3>
            </div>

          </div>
        </div>

        {/* PURCHASE HISTORY */}
        <div className="border-t pt-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800">
              Purchase History
            </h3>

            <button className="text-xs text-cyan-600 font-semibold">
              View All
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100 text-xs text-slate-700">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Invoice</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-200 text-sm">
                  <td className="px-4 py-3">12 Apr 2026</td>
                  <td className="px-4 py-3">INV-2201</td>
                  <td className="px-4 py-3">100</td>
                  <td className="px-4 py-3">₹12,000</td>
                </tr>

                <tr className="border-t border-slate-200 text-sm">
                  <td className="px-4 py-3">05 Mar 2026</td>
                  <td className="px-4 py-3">INV-1854</td>
                  <td className="px-4 py-3">50</td>
                  <td className="px-4 py-3">₹6,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* STOCK MOVEMENT */}
        <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Stock Movement History
          </h3>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Stock Added
                </h3>

                <p className="text-xs text-slate-500">
                  Added by Admin
                </p>
              </div>

              <div className="text-right">
                <h3 className="font-bold text-emerald-600">
                  +50 Qty
                </h3>

                <p className="text-xs text-slate-500">
                  10 May 2026
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Issued to ICU
                </h3>

                <p className="text-xs text-slate-500">
                  Department Usage
                </p>
              </div>

              <div className="text-right">
                <h3 className="font-bold text-red-500">
                  -20 Qty
                </h3>

                <p className="text-xs text-slate-500">
                  08 May 2026
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* INVOICE */}
        <div className="border-t pt-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">
                Attached Invoice
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Invoice preview available
              </p>
            </div>

            <button className="px-4 py-2 rounded-lg bg-cyan-50 text-cyan-600 text-sm font-semibold">
              Preview Invoice
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
)}

    {/* UPDATE MODAL */}
{openUpdate && selectedItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="w-full max-w-4xl rounded-2xl bg-white shadow-xl overflow-hidden">

      <div className="flex items-center justify-between bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3">
        <h2 className="text-lg font-bold text-white">
          Update Inventory
        </h2>

        <button
          onClick={() => setOpenUpdate(false)}
          className="text-white text-xl"
        >
          ×
        </button>
      </div>

      <div className="max-h-[85vh] overflow-y-auto p-5 space-y-6">

        {/* BASIC UPDATE */}
        <div>
          {/* <h3 className="text-sm font-bold text-slate-800 mb-4">
            Editable Fields
          </h3> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input
              type="number"
              defaultValue={selectedItem.qty}
              placeholder="Quantity Update"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              defaultValue={selectedItem.price}
              placeholder="Price Update"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="date"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              defaultValue={selectedItem.supplier}
              placeholder="Supplier Change"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
              <option>Near Expiry</option>
            </select>

            <input
              type="number"
              placeholder="Reorder Level"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Rack Location"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Store Location"
              className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
            />

          </div>
        </div>

        {/* STOCK ACTIONS */}
        {/* <div className="border-t pt-5">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Inventory Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <button className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-600">
              Add New Stock
            </button>

            <button className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-500">
              Damage Entry
            </button>

            <button className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold text-orange-600">
              Return Stock
            </button>

            <button className="rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm font-bold text-violet-600">
              Transfer Stock
            </button>

          </div>
        </div> */}

      </div>

      <div className="flex justify-end gap-3 border-t bg-slate-50 px-5 py-4">

        <button
          onClick={() => setOpenUpdate(false)}
          className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600"
        >
          Cancel
        </button>

        <button className="rounded-lg bg-[#08B8A8] px-5 py-2 text-sm font-bold text-white">
          Save Changes
        </button>

      </div>
    </div>
  </div>
)}
      </div>
    </Layout>
  );
}

export default Inventory;