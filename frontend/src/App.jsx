import { useEffect, useState } from "react";
import API from "./api/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NicknamePage from "./pages/NicknamePage";
import PresentationListPage from "./pages/PresentationListPage";

function App() {
  const [back, setBack] = useState("");
  useEffect(() => {
    const backendConnected = async function () {
      const data = await fetch(API);
      const text = await data.text();

      setBack(text);
    };
    backendConnected();
  }, []);

  return (
    <Router>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {back}
      </div>
      <Routes>
        <Route path="/" element={<NicknamePage />} />
        <Route path="/presentations" element={<PresentationListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
