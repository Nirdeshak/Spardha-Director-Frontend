import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* 🔝 Modern Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 h-16 
                         backdrop-blur-md bg-white/70 
                         border-b border-blue-100
                         flex items-center justify-between 
                         px-6 shadow-sm z-50">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 
                          flex items-center justify-center 
                          text-white font-bold shadow-md">
            SD
          </div>
          <h1 className="font-semibold text-lg text-gray-800 tracking-wide">
            Spardha Director
          </h1>
        </div>

        <div className="relative">
          <span className="text-2xl cursor-pointer text-gray-700 hover:text-blue-600 transition">
            🔔
          </span>
          <span className="absolute -top-1 -right-1 
                           bg-red-500 text-white text-[10px] 
                           px-1.5 py-[1px] rounded-full">
            2
          </span>
        </div>
      </header>

      {/* 📄 Content */}
      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-5">
        <Outlet />
      </main>

      {/* 🔻 Floating Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2
                      w-[94%] max-w-md h-16
                      bg-white/80 backdrop-blur-md
                      rounded-2xl shadow-2xl border border-blue-100
                      flex justify-around items-center z-50">

        <NavItem to="/" label="Home" icon="🏠" active={location.pathname === "/"} />
        <NavItem to="/courses" label="Courses" icon="📚" active={location.pathname === "/courses"} />
        <NavItem to="/mycourses" label="My Courses" icon="🎯" active={location.pathname === "/mycourses"} />
        <NavItem to="/profile" label="Profile" icon="👤" active={location.pathname === "/profile"} />

      </nav>
    </div>
  );
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className="relative flex flex-col items-center justify-center text-xs w-full transition-all duration-300"
    >
      <span
        className={`text-2xl transition-all duration-300 
        ${active ? "text-blue-600 scale-110" : "text-gray-500"}`}
      >
        {icon}
      </span>

      <span
        className={`mt-1 transition-all duration-300 
        ${active ? "text-blue-600 font-medium" : "text-gray-500"}`}
      >
        {label}
      </span>

      {/* 🔵 Smooth Sliding Blue Indicator */}
      {active && (
        <div className="absolute -bottom-2 w-8 h-1.5 
                        bg-blue-600 rounded-full 
                        transition-all duration-300">
        </div>
      )}
    </Link>
  );
}