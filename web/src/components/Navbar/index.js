import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full sticky left-0 top-0 right-0 backdrop-blur-sm bg-white">
      <div className="md:container px-5 h-20 flex items-center justify-between">
        <Link to="/" className="w-max">
          <div className="w-[50px] h-[50px] bg-yellow-300 relative">
            <span className="font-bold text-lg flex-col ml-2 leading-5  text-[#0F172A] absolute bottom-1 w-max italic">
              Jaksel Language
            </span>
          </div>
        </Link>

        <ul className="flex items-center">
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li className="ml-4">
            <a
              href="https://github.com/RioChndr/jaksel-language"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
