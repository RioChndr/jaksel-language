import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import Home from "./pages/home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/docs" element={""} />
    </Routes>
  );
}

export default App;
