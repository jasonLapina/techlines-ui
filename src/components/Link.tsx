import { NavLink as RouterLink } from "react-router";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}
const Link = ({ to, children }: LinkProps) => {
  return (
    <RouterLink
      style={({ isActive }) => ({
        color: isActive ? "black" : "inherit",
        textDecoration: "none",
        fontWeight: isActive ? "bold" : "normal",
      })}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
