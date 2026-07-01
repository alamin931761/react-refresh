import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Posts", to: "/posts" },
    { label: "Todos", to: "/todos" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4 flex-wrap">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `font-medium ${isActive ? "text-yellow-400" : "hover:text-yellow-400"}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
