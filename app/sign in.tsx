import { useState } from "react";
import { motion } from "framer-motion";

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="relative flex w-[800px] h-[500px] overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Left Panel */}
        <motion.div
          className={`absolute inset-0 w-1/2 bg-black text-white flex flex-col items-center justify-center p-8`}
          animate={{ x: isSignIn ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            {isSignIn ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center">
            {isSignIn
              ? "To keep connected with us please login with your personal info."
              : "Enter your personal details and start your journey with us."}
          </p>
          <button
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </motion.div>

        {/* Sign-In Form */}
        <motion.div
          className="absolute inset-0 w-1/2 flex items-center justify-center transition-transform"
          animate={{ x: isSignIn ? "50%" : "100%" }}
          transition={{ duration: 0.5 }}
        >
          {isSignIn && (
            <div className="w-full max-w-md p-8">
              <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
              <form>
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full p-2 mb-4 border rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border rounded"
                />
                <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                  Submit
                </button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Sign-Up Form */}
        <motion.div
          className="absolute inset-0 w-1/2 flex items-center justify-center transition-transform"
          animate={{ x: isSignIn ? "-100%" : "50%" }}
          transition={{ duration: 0.5 }}
        >
          {!isSignIn && (
            <div className="w-full max-w-md p-8">
              <h2 className="text-xl font-bold text-center mb-4">Create Account</h2>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full p-2 mb-4 border rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border rounded"
                />
                <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                  Submit
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
