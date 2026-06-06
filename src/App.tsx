import { Routes, Route } from "react-router-dom";
import HomePage from "@/routes/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
