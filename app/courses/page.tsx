export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      progress: 40,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Data Structures",
      progress: 70,
      status: "In Progress",
    },
    {
      id: 3,
      title: "HTML & CSS Fundamentals",
      progress: 100,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Courses</h1>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Add Course
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-3">{course.title}</h2>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    course.progress === 100 ? "bg-green-600" : "bg-blue-600"
                  }`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Progress: {course.progress}%
              </p>
            </div>

            {/* Status */}
            <p
              className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${
                course.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {course.status}
            </p>

            {/* Action */}
            <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-black">
              View Course
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
