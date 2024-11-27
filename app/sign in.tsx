import { useState } from "react";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      {/* Container */}
      <div
        className={`relative w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-700 ${
          isSignUp ? "flex-row-reverse" : ""
        } flex`}
      >
        {/* Sign-In Panel */}
        <div
          className={`w-1/2 px-10 py-16 text-center transition-transform duration-700 ${
            isSignUp ? "translate-x-full" : ""
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
          <form>
            <input
              type="text"
              placeholder="User Name"
              className="w-full mb-3 p-2 border rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Sign-Up Panel */}
        <div
          className={`w-1/2 px-10 py-16 text-center transition-transform duration-700 ${
            isSignUp ? "" : "-translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 p-2 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="User Name"
              className="w-full mb-3 p-2 border rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute inset-0 flex items-center justify-between bg-black text-white px-12 transition-transform duration-700 ${
            isSignUp ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="text-center w-1/2">
            <h2 className="text-2xl font-bold">Hello, Friend!</h2>
            <p className="mt-2">
              Enter your personal details and start your journey with us.
            </p>
            <button
              onClick={() => setIsSignUp(false)}
              className="mt-4 border border-white py-2 px-4 rounded-md"
            >
              Sign In
            </button>
          </div>
          <div className="text-center w-1/2">
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="mt-2">
              To keep connected with us, please login with your personal info.
            </p>
            <button
              onClick={() => setIsSignUp(true)}
              className="mt-4 border border-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
