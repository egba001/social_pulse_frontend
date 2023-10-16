import { Link } from "react-router-dom";
import socialPulse from "../assets/Logo.png";
import google from "../assets/google.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <section className="login-container grid grid-col-1 md:grid-cols-4 gap-10 md:gap-0 min-h-screen overflow-y-scroll">
      <aside className="hidden md:col-span-1 md:flex items-center justify-center bg-green  h-80 md:h-full">
        <Link to="/" className="logo ">
          <img
            src={socialPulse}
            alt="socialPulse Logo"
            className="w-1/2 mx-auto"
          />
        </Link>
      </aside>
      <aside className="main-content col-span-4 md:col-span-3 flex items-center justify-center">
        <div className="max-w-xl">
          <h2 className="text-center text-dark text-4xl font-semibold mb-5">
            Login to your Account
          </h2>
          <form className="form m-5">
            <label className="label">Email Address</label>
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

            <div className="flex items-center justify-between my-2 mb-16">
              <div className="checkbox flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  onChange={() => setChecked((prev) => !prev)}
                />
                <label
                  htmlFor="rememberMe"
                  className="font-red text-sm text-dark"
                >
                  Remember Me
                </label>
              </div>
              <div className="forget-password">
                <p className="text-green font-red text-sm font-medium cursor-pointer">
                  Forgot Password?
                </p>
              </div>
            </div>

            <button className="block w-full bg-green text-white text-base font-medium outline-none border-none py-2 my-4 rounded hover:bg-green">
              Login
            </button>
          </form>

          <p className="font-red font-medium text-center text-dark text-sm">
            OR
          </p>
          <div className="m-5">
            <button className="block w-full text-center border border-gray-400 rounded p-2">
              <div className="flex items-center justify-center gap-1 mx-auto">
                <span className="font-red font-normal text-sm text-dark">
                  Login with Google
                </span>
                <img src={google} alt="google icon" />
              </div>
            </button>
            <p className="block text-center font-red font-bold text-sm py-2 my-5">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="text-green">Sign Up</span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Login;
