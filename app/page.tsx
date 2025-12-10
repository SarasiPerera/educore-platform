export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EDE6F2]">
      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-6 px-10 py-20">
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            EduCore <br /> Platform
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Don’t Miss out While You Are Away From School
          </p>

          <div className="flex gap-4">
            <a
              href="/auth/register"
              className="px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
            >
              Register
            </a>

            <a
              href="/auth/login"
              className="px-6 py-3 border border-purple-700 text-purple-700 rounded-md hover:bg-purple-100 transition"
            >
              Login
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/degree.jpeg" // <<--- replace with your image path
            alt="Student using laptop"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* SUBJECTS / WHAT I TEACH */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Do I Teach?
        </h2>

        <p className="text-gray-700 max-w-xl mb-6">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>

        <a
          href="#"
          className="px-5 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition inline-block mb-10"
        >
          About Me
        </a>

        {/* SUBJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* English */}
          <div className="flex flex-col items-center text-center bg-[#D8CFE6] p-6 rounded-xl">
            <img src="/icons/english.png" alt="English" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">English</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          {/* Science */}
          <div className="flex flex-col items-center text-center bg-[#EDD7D7] p-6 rounded-xl">
            <img src="/icons/science.png" alt="Science" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          {/* History */}
          <div className="flex flex-col items-center text-center bg-[#DFD4E0] p-6 rounded-xl">
            <img src="/icons/history.png" alt="History" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">History</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          {/* Math */}
          <div className="flex flex-col items-center text-center bg-[#E6DCDC] p-6 rounded-xl">
            <img src="/icons/math.png" alt="Math" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Math</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
