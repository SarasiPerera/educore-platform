"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100 relative overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute w-72 h-72 bg-blue-300/40 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-300/30 rounded-full blur-3xl bottom-10 right-10"></div>
      <div className="absolute w-40 h-40 bg-blue-300/20 rounded-full blur-xl bottom-20 left-40"></div>

      {/* Card */}
      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl max-w-lg text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <LogOut size={50} className="text-blue-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Logout Successful</h1>

        <p className="mt-3 text-gray-600">
          You have been successfully logged out. Thank you for using EduCore!
          You can log in again anytime.
        </p>

        {/* Button */}
        <Link
          href="/login"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Log In Again
          <LogOut size={18} />
        </Link>
      </div>
    </div>
  );
}
