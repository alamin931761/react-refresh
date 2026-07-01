import { NavLink } from "react-router";

const Sidebar = () => {
  const sidebarLinks = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Profile", to: "/profile" },
    { label: "Settings", to: "/settings" },
    { label: "Messages", to: "/messages" },
  ];
  return (
    <aside className="bg-gray-500 text-white p-4">
      <ul>
        {sidebarLinks.map((link) => (
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
    </aside>
  );
};

export default Sidebar;
