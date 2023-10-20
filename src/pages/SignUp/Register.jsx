import { Link, useNavigate } from "react-router-dom";
import socialPulse from "../../assets/Logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Register = () => {
  const [viewPassword, setViewPassword] = useState(false);

  const [fullname, setFullname] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(true);

  // route
  const navigate = useNavigate();

  // function to reset all the input fields
  const resetFields = () => {
    setFullname("");
    setBusinessName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // change the disable state of the button
  useEffect(() => {
    setDisable(
      password !== confirmPassword || password === "" || confirmPassword === ""
    );
  }, [password, confirmPassword]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const displayName = businessName;
    console.log(displayName);
    //
    const storageRef = ref(storage, displayName);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      console.log(res.user);

      // Add a new document in collection "user" = Firebase/Firestore
      // the password is not saved in the db because the user collection will be used to see other users
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        businessName,
        fullname,
        email,
        createdAt: serverTimestamp(),
      });

      // reset all the input fields
      resetFields();

      // navigate to dashboard
      navigate("/onboard");

      console.log("user created!");
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <form className="form m-5" onSubmit={handleRegister}>
            <label className="label">FullName</label>
            <input
              type="text"
              className="input-field"
              placeholder="John Doe"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
            <label className="label">Business Name</label>
            <input
              type="text"
              className="input-field"
              placeholder=""
              onChange={(e) => setBusinessName(e.target.value)}
              value={businessName}
            />
            <label className="label">Business Email Address</label>
            <input
              type="email"
              className="input-field"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label className="label">Password</label>
            <div className="password relative h-[40px] rounded">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-field h-full"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
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
            <button
              className={
                disable
                  ? "block w-full bg-gray-400 text-white text-base font-medium outline-none border-none py-2 my-6 rounded cursor-not-allowed"
                  : "block w-full bg-green text-white text-base font-medium outline-none border-none py-2 my-6 rounded hover:bg-green cursor-pointer"
              }
              disabled={disable}
            >
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
