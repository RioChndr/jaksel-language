import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main>
      <Navbar />
      <div className="md:container px-5">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout;
