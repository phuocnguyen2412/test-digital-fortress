import assets from "../assets";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-black-light flex h-full w-full">
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-[496px]">
          <h1 className="text-white-default mb-9 text-4xl font-normal">
            Hello,{" "}
            <span className="bg-gradient-to-r from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] bg-clip-text text-4xl font-normal text-transparent">
              Digital Fortress
            </span>
          </h1>
          <h2 className="text-gray mb-[60px] text-[18px] font-medium">
            Log in to platform to start creating magic.
          </h2>
          <LoginForm />
        </div>
      </div>
      <div className="bg-black-light w-1/2">
        <img
          src={assets.illustration}
          alt="Email icon"
          className="w-full rounded-[36px]"
        />
      </div>
    </div>
  );
};

export default Login;
