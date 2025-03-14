import esilogo from "./assets/esilogo.png";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const isEmailValid = validateEmail(email);
    setIsEmailValid(isEmailValid);

    // Validate password (must be at least 8 characters)
    const isPasswordValid = password.length >= 8;
    setIsPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="bg-[#2F3E47] h-screen flex justify-end items-center">
      <form className="bg-[#F5F7FF] w-full max-w-[600px] h-screen rounded-[30px] shadow-lg p-8">
        <div className="flex flex-col items-center">
          <img src={esilogo} alt="esi sba" className="w-[60px] h-auto mt-8" />
          <h1 className="text-[40px] font-semibold text-center leading-tight tracking-[0.05em] my-10">
            Welcome to your PFE guide
            <span className="block sm:inline p-3">platform</span>
          </h1>
        </div>

        {/* Email Input */}
        <div className="px-8">
          <label
            htmlFor="email"
            className="font-Roboto font-normal text-[#282A2C] leading-[48px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-[25px] focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${isEmailValid ? "border-[#46464640]" : "border-[#B70000]"}`}
          />
          {!isEmailValid && (
            <p className="text-red-500 text-sm mt-1">Invalid email format.</p>
          )}
        </div>

        {/* Password Input */}
        <div className="px-8 mt-6">
          <label
            htmlFor="password"
            className="font-Roboto font-normal text-[#282A2C] leading-[24px]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded-[25px] focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${isPasswordValid ? "border-[#46464640]" : "border-[#B70000]"}`}
          />
          {!isPasswordValid && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 8 characters.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="w-[456px] h-[48px] bg-[#0A7477] text-white font-semibold rounded-[25px] shadow-md hover:bg-[#086b6c] transition duration-300"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
