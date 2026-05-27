import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Authentication/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { APP_ROUTES } from "./PageRoutes";
import Orders from "../Pages/Orders/Orders";
import PharmacyOrders from "../Pages/PharmacyOrders/Index";
import Patients from "../Pages/Patients/Index";
import PatientDetails from "../Pages/Patients/PatientDetails";
import Billing from "../Pages/Billing/Index";
import Doctors from "../Pages/Users/Index";
import Appointments from "../Pages/Appointments/Index";
import ChangePassword from "../Pages/Settings/ChangePassword";
import Adtf from "../Pages/ADTF/Index";
import OtManagement from "../Pages/OtManagement/Index";
import ServiceMaster from "../Pages/ServiceMaster/Index";
import DashBoardNew from "../Pages/DashboardNew/Index";
import DiagnosisOrders from "../Pages/DiagnosisOrders/Index";
import WardManagement from "../Pages/BedManagement/Index";
import Nursing from "../Pages/Nursing/Index";
import Inventory from "../Pages/Inventory/Index";
import Emergency from "../Pages/Emergency/Index";
import OPD from "../Pages/OutPatients/Index";
import IPD from "../Pages/InPatients/Index";
import NurseProfile from "../Pages/Nursing/NurseProfile";
import EMRPatients from "../Pages/EMR/EMRPatients";
import EMRDetails from "../Pages/EMR/EMRDetails";
import Radiology from "../Pages/Radiology/Index";
import Analytics from "../Pages/Reports&Analytics/Index";
import IPDetails from "../Pages/InPatients/IPDetails";
import Payments from "../Pages/Billing/Payments";
import PatientCareProfile from "../Pages/Nursing/PatientCareProfile";
import Users from "../Pages/Users/Index";

function PageRouting() {
  return (
    <Router basename="/hims">
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={APP_ROUTES.DASHBOARDNEW} element={<DashBoardNew />} />
        <Route path={APP_ROUTES.PATIENTS} element={<Patients />} />
        <Route path={APP_ROUTES.APPOINTMENTS} element={<Appointments />} />
        <Route path={APP_ROUTES.OPD} element={<OPD />} />
        <Route path={APP_ROUTES.IPD} element={<IPD />} />
        <Route path={APP_ROUTES.IPDETAILS} element={<IPDetails />} />
        <Route path={APP_ROUTES.PATIENTDETAILS} element={<PatientDetails />} />
        <Route path={APP_ROUTES.PHARMACYORDERS} element={<PharmacyOrders />} />
        <Route
          path={APP_ROUTES.DIAGNOSTICORDERS}
          element={<DiagnosisOrders />}
        />
        <Route path={APP_ROUTES.ADTF} element={<Adtf />} />
        <Route path={APP_ROUTES.OTMANAGEMENT} element={<OtManagement />} />
        <Route path={APP_ROUTES.BETMANAGEMENT} element={<WardManagement />} />
        <Route path={APP_ROUTES.NURSING} element={<Nursing />} />
        <Route path={APP_ROUTES.NURSEPROFILE} element={<NurseProfile />} />
        <Route
          path={APP_ROUTES.PATIENTCAREPROFILE}
          element={<PatientCareProfile />}
        />
        <Route path={APP_ROUTES.INVENTORY} element={<Inventory />} />
        <Route path={APP_ROUTES.EMRPATIENTS} element={<EMRPatients />} />
        <Route path={APP_ROUTES.EMRDETAILS} element={<EMRDetails />} />
        <Route path={APP_ROUTES.SERVICEMASTER} element={<ServiceMaster />} />
        <Route path={APP_ROUTES.RADIOLOGY} element={<Radiology />} />
        <Route path={APP_ROUTES.ANALYTICS} element={<Analytics />} />
        <Route path={APP_ROUTES.BILLING} element={<Billing />} />
        <Route path={APP_ROUTES.USERS} element={<Users />} />
        <Route path={APP_ROUTES.ORDERS} element={<Orders />} />
        <Route path={APP_ROUTES.CHANGEPASSWORD} element={<ChangePassword />} />
        <Route path={APP_ROUTES.EMERGENCY} element={<Emergency />} />
        <Route path={APP_ROUTES.PAYMENTS} element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default PageRouting;
