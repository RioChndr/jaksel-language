import { Routes, Route } from "react-router-dom";

import MainLayout from "layouts/Main.layout";
import DocsLayout from "layouts/Docs.layout";

import Home from "pages/home";
import HomeDocs from "pages/docs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<HomeDocs />} />
        <Route path=":slug" element={""} />
      </Route>
    </Routes>
  );
}

export default App;
