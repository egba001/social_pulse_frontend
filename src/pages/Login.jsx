import { Link, useNavigate } from "react-router-dom";
import socialPulse from "../assets/Logo.png";
import google from "../assets/google.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

// firebase
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // route
  const navigate = useNavigate();

  // function to reset all the input fields
  const resetFields = () => {
    setEmail("");
    setPassword("");
    setChecked(false);
  };

  // proviider
  const provider = new GoogleAuthProvider();

  // sign in with google
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      const user = res.user;

      // check if the user exists in the database
      const userDocRef = await getDoc(doc(db, "users", user.uid));
      // if no user, create a user object in the database
      if (!userDocRef.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          businessName: user.displayName,
          fullname: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }

      console.log(res.user);
      console.log("google sign in successful!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle Sigin function
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("sign in successful!");
      resetFields();

      // navigate to dashboard
      navigate("/onboard");
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <h2 className="text-center text-dark text-3xl md:text-4xl font-semibold mb-5">
            Login to your Account
          </h2>

          <form className="form m-5" onSubmit={handleSignIn}>
            <label className="label">Email Address</label>
            <input
              type="email"
              className="input-field"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <div className="password relative h-[40px] rounded">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-field h-full"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          {/* google sign-in button */}
          <div className="m-5">
            <button
              className="block w-full text-center border border-gray-400 rounded p-2"
              onClick={signInWithGoogle}
            >
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
