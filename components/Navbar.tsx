export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">EduCore</h1>

      <ul className="flex gap-8 text-lg font-medium text-gray-700">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/courses" className="hover:text-blue-600">
            Courses
          </a>
        </li>
        <li>
          <a href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/auth/login" className="hover:text-blue-600">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
