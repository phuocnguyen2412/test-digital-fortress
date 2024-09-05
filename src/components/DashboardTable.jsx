import assets from "../assets";

const DashboardTable = () => {
  const projects = [
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: assets.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
  ];

  return (
    <div className="mt-4 rounded-[16px]">
      <h1 className="text-white-default mb-4 text-[32px] font-semibold">
        Dashboard
      </h1>
      <div className="bg-black-default rounded-[16px]">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr>
              <th className="text-gray p-3 text-left">Project</th>
              <th className="text-gray p-3 text-left">Last assessed</th>
              <th className="text-gray p-3 text-left">License use</th>
              <th className="text-gray p-3 text-left"></th>
              <th className="text-gray p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="flex items-center p-3">
                  <img src={project.avatar} alt="Sisyphus" className="mr-3" />
                  <div className="">
                    <h1 className="text-white-default text-[14px]">
                      {project.name}
                    </h1>
                    <h1 className="text-[14px] text-[#6F767E]">
                      {project.email}
                    </h1>
                  </div>
                </td>
                <td className="text-gray p-3">{project.date}</td>
                <td className="flex gap-x-2 p-3">
                  <span className="rounded-[16px] bg-[#0E5A3A] px-4 py-1 text-[#46E8A5]">
                    {project.status}
                  </span>{" "}
                  <span className="rounded-[16px] bg-[#423419] px-4 py-1 text-[#FFD666]">
                    {project.type}
                  </span>{" "}
                  <span className="rounded-[16px] bg-[#422721] px-4 py-1 text-[#FFAC82]">
                    {project.role}
                  </span>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
