import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
