import { Navbar } from "components";
import { Outlet } from "react-router-dom";

export default function NavbarLayout() {
  return (
    <div className="vh-100 position-relative overflow-auto">
      <header className="fixed-top w-100">
        <Navbar />
      </header>

      <Outlet />
    </div>
  );
}
