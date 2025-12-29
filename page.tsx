"use client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="border border-white/10 p-8 rounded-xl w-96">
        <h2 className="text-cyan-400 text-xl mb-4">Create Account</h2>
        <input className="w-full mb-3 p-2 bg-black border border-white/10" placeholder="Email" />
        <input className="w-full mb-4 p-2 bg-black border border-white/10" placeholder="Password" type="password" />
        <button className="bg-cyan-500 w-full py-2 text-black rounded">Join Beta</button>
      </div>
    </div>
  );
}
