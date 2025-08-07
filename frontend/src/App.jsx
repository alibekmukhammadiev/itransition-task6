import { useEffect, useState } from "react";
import API from "./api/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NicknamePage from "./pages/NicknamePage";
import PresentationListPage from "./pages/PresentationListPage";

function App() {
  const [back, setBack] = useState("");
  useEffect(() => {
    const backendConnected = async function () {
      const response = await fetch(API);
      const data = await response.json();
      setBack(data);
    };
    backendConnected();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>{back}</div>} />
        <Route path="/" element={<NicknamePage />} />
        <Route path="/presentations" element={<PresentationListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
