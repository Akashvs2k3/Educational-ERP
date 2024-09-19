import "./App.css";
import Dashboard from "./ERP Teacher Module/Dashboard/Dashboard";
import Main from "./ERP Teacher Module/Main/Main";
import Profile from "./ERP Teacher Module/Profile/Profile";
import ForgotPassword from "./ERP Teacher Module/login/ForgotPassword";
import Login from "./ERP Teacher Module/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter basename="/edu_erp">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
