import Link from "../Link/Link";
import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose></IoClose> : <CgMenuLeftAlt></CgMenuLeftAlt>}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static bg-yellow-200
      ${open ? "top-16" : "-top-60"}
         px-6 `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
