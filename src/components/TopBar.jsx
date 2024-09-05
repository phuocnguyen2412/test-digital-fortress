import assets from "../assets";
import Input from "../components/Input";
const Topbar = () => {
  return (
    <div className="bg-black-default rounded-[16px] p-4">
      <div className="flex items-center justify-between">
        <Input
          icon={assets.search}
          placeholder={"Search anything"}
          className="w-[340px]"
        />
        <div className="flex gap-x-12">
          <img src={assets.message} className="text- h-6 w-6" />
          <img src={assets.calendar} className="h-6 w-6" />
          <img src={assets.avatar} className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
