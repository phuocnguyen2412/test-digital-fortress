import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import DashboardTable from "../components/DashboardTable";
const DashBoard = () => {
  return (
    <div className="bg-black-light flex gap-x-2 p-2">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <Topbar />

        <DashboardTable />
      </div>
    </div>
  );
};

export default DashBoard;
