import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">LMS</h2>

        <nav className="space-y-4 text-gray-700">
          <p className="font-semibold text-blue-600">Dashboard</p>
          <p>Courses</p>
          <p>Notifications</p>
          <p>Settings</p>

          {/* <p>Logout</p> */}
          {/* <Link
            href="/logout"
            className="text-red-500 font-semibold hover:text-red-600"
          ></Link> */}
          <LogoutButton />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-6 mb-6">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-2xl font-bold">Sarasi Perera</h2>
            <p className="text-gray-600">sarasi@example.com</p>
            <p className="text-sm text-blue-600 font-semibold">Role: Student</p>
          </div>

          {/* <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Profile
          </button> */}
          <Link
            href="/dashboard/edit-profile"
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>

        {/* Courses + Add Course */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Courses Enrolled</h3>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + Add Course
            </button>
          </div>

          <ul className="space-y-3">
            <li className="p-3 bg-gray-50 rounded-md">
              📘 React for Beginners – 40% complete
            </li>
            <li className="p-3 bg-gray-50 rounded-md">
              💻 Data Structures – 70% complete
            </li>
            <li className="p-3 bg-gray-50 rounded-md">
              🧠 AI Fundamentals – 20% complete
            </li>
          </ul>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-bold mb-4">Upcoming Deadlines</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-red-50 rounded-md">
              ⏳ React Assignment – Due in 2 days
            </li>
            <li className="p-3 bg-red-50 rounded-md">
              📅 DS Quiz – Due in 5 days
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Notifications</h3>

          <ul className="space-y-3">
            <li className="p-3 bg-blue-50 rounded-md">
              🔔 You have been enrolled in "AI Fundamentals".
            </li>
            <li className="p-3 bg-blue-50 rounded-md">
              🔔 Your certificate for "HTML Basics" is ready.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
