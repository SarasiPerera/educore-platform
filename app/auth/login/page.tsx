export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit */}
          <button className="w-full p-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-100">
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-blue-600 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
