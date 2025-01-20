import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import Results from "./Pages/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultsPage from "./Pages/Results";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
