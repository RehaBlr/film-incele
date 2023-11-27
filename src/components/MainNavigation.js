import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function () {
  return (
    <nav className="text-lg py-2 font-bold flex gap-2 justify-center">
      <NavLink to="/" exact activeClassName="text-blue-600">
        Anasayfa
      </NavLink>
      <NavLink to="/films" activeClassName="text-blue-600">
        Filmler
      </NavLink>
      <NavLink to="/login" activeClassName="text-blue-600">
        Login
        <Login />
      </NavLink>
    </nav>
  );
}
