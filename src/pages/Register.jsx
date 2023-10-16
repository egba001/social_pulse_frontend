import { Link } from "react-router-dom";
import socialPulse from "../assets/Logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Register = () => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <section className="login-container grid grid-col-1 md:grid-cols-4 gap-10 md:gap-0 min-h-screen overflow-y-scroll">
      <aside className="hidden md:col-span-1 md:flex items-center justify-center bg-green h-80 md:h-full">
        <Link to="/" className="logo">
          <img
            src={socialPulse}
            alt="socialPulse Logo"
            className="w-1/2 mx-auto"
          />
        </Link>
      </aside>
      <aside className="main-content col-span-4 md:col-span-3 flex items-center justify-center">
        <div className="max-w-xl">
          <h2 className="text-center text-dark text-3xl md:text-4xl font-semibold mb-5">
            Create an Account
          </h2>
          <form className="form m-5">
            <label className="label">FullName</label>
            <input type="text" className="input-field" placeholder="John Doe" />
            <label className="label">Business Name</label>
            <input type="text" className="input-field" placeholder="" />
            <label className="label">Business Email Address</label>
            <input type="email" className="input-field" placeholder="" />
            <label className="label">Password</label>
            <div className="password relative h-[40px] rounded">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-field h-full"
                placeholder=""
              />
              {viewPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              )}
            </div>
            <label className="label">Confirm Password</label>
            <div className="password relative h-[40px] rounded">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-field h-full"
                placeholder=""
              />
              {viewPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              )}
            </div>

            <p className="font-red font-normal text-base my-2">
              By signing up I agree to the{" "}
              <span className="text-green">Terms of Service</span> and{" "}
              <span className="text-green">Privacy Policy</span>
            </p>
            <button className="block w-full bg-green text-white text-base font-medium outline-none border-none py-2 my-6 rounded hover:bg-green">
              Sign Up
            </button>
            <p className="block text-center bg-[#E0F4DF] font-red font-bold text-sm py-2">
              Already have an account.{" "}
              <Link to="/login">
                <span className="text-green">Login</span>
              </Link>{" "}
            </p>
          </form>
        </div>
      </aside>
    </section>
  );
};

export default Register;
