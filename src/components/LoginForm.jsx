import assets from "../assets";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Input
        className="mb-[50px]"
        placeholder="Email"
        icon={assets.email}
        type="email"
      />
      <Input placeholder="Password" icon={assets.passwords} type="password" />

      <div className="my-[50px] flex items-center justify-between">
        <div className="flex gap-x-3">
          <input
            type="checkbox"
            id="remember"
            className="unchecked:bg-[#1A1D21] h-6 w-6 rounded-[4px] border border-[#363A3D]"
          />
          <label
            className="text-white-dark font-medium text-[16]"
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        <div className="bg-gradient-to-r from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] bg-clip-text text-base font-semibold text-transparent">
          Forgot Password?
        </div>
      </div>
      <button
        onClick={() => navigate("/dashboard")}
        className="text-black-blue bg-green-defaut mb-[60px] w-full rounded-[12px] py-2 text-center"
      >
        Login
      </button>
      <h1 className="text-gray text-center font-semibold">
        Don’t have an account?{" "}
        <span className="bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] bg-clip-text text-base font-normal text-transparent">
          Sign Up
        </span>
      </h1>
    </div>
  );
};

export default LoginForm;
