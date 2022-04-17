import Navbar from "components/Navbar";
import { Link, Outlet } from "react-router-dom";

const DocsLayout = () => {
  return (
    <main className="">
      <Navbar variant="full" />
      <div className="px-5 flex">
        <aside className="h-[calc(100vh_-_100px)] sticky top-[80px] bottom-0 w-[300px]">
          <div className="mt-5">
            <span className="text-xl font-medium">Getting Started</span>
            <ul className="mt-2">
              {[
                {
                  name: "Overview",
                  href: "",
                },
                {
                  name: "Instalation",
                  href: "instalation",
                },
                {
                  name: "Quick Start",
                  href: "quick-start",
                },
                {
                  name: "Comparison",
                  href: "comparison",
                },
              ].map((link) => (
                <li className="mb-2 last:mb-0">
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="w-[calc(100%_-_300px)] px-5 mb-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DocsLayout;
