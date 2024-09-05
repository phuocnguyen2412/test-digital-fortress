import { useState } from "react";
import assets from "./../assets/index";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState(0);

  const dashboardButton = [
    {
      label: "Dashboard",
      icon: assets.health,
    },
    {
      label: "Task",
      icon: assets.clipBoard,
    },
    {
      label: "Schedule",
      icon: assets.wifiSquare,
    },
    {
      label: "Dashboard",
      icon: assets.calendar,
    },
  ];
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-black-default text-white ${isOpen ? "w-64" : "w-20"} min-h-screen rounded-[16px] p-4 transition-all duration-300`}
    >
      <div className="mb-12 flex items-center justify-between">
        <div className={`text-center ${isOpen ? "block" : "hidden"}`}>
          {isOpen ? <img src={assets.logo} /> : <img src={assets.smallLogo} />}
        </div>
        <button
          className="rounded-full bg-[#1A1D21] p-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <img src={assets.rightLeft} className="h-3 w-3" />
          ) : (
            <img src={assets.leftRight} className="h-3 w-3" />
          )}
        </button>
      </div>
      <div className="h-[1px] w-full bg-[#282828]"></div>
      <ul className="space-y-4">
        {dashboardButton.map((button, index) => (
          <li
            key={index}
            onClick={() => {
              setActive(index);
            }}
          >
            <a
              href="#"
              className={`${active === index ? "bg-green-defaut" : ""} flex items-center rounded-lg p-3 hover:bg-green-300`}
            >
              <img src={button.icon} />
              {isOpen && (
                <span
                  className={`${active === index ? "text-[#1A1D1F]" : "text-[#6F767E]"} ml-4 text-[14px] font-medium`}
                >
                  {button.label}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
