export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EDE6F2]">
      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-6 px-10 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 drop-shadow-sm">
            EduCore <br /> Platform
          </h1>

          <p className="text-gray-700 text-xl mb-8 opacity-90">
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

        <div className="flex justify-center">
          <img
            src="/degree.jpeg"
            alt="Student using laptop"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* SUBJECTS */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center bg-[#D8CFE6] p-6 rounded-xl">
            <img src="/icons/english.png" alt="English" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">English</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#EDD7D7] p-6 rounded-xl">
            <img src="/icons/science.png" alt="Science" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#DFD4E0] p-6 rounded-xl">
            <img src="/icons/history.png" alt="History" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">History</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#E6DCDC] p-6 rounded-xl">
            <img src="/icons/math.png" alt="Math" className="w-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Math</h3>
            <p className="text-gray-700 text-sm">
              I'm a paragraph. Click here to add your own text.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS + CONTACT SECTION */}
      <section className="grid md:grid-cols-2 gap-12 px-10 py-20">
        {/* LEFT SIDE – REVIEWS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
          <p className="text-gray-700 max-w-sm mb-10">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>

          <div className="max-w-xl">
            <p className="text-gray-800 text-lg italic mb-6">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>

            <p className="font-semibold text-gray-700 tracking-wide">
              Lisa, Dina’s mom
            </p>

            {/* TESTIMONIAL DOTS */}
            <div className="flex gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Contact Me &
          </h2>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Get Started
          </h2>

          <p className="text-gray-700 max-w-sm mb-6">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>

          <button className="px-5 py-2 border border-purple-700 text-purple-700 rounded-md hover:bg-purple-100 transition mb-10">
            Introduction Call
          </button>

          {/* FORM */}
          <form className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First name *</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-700 bg-transparent outline-none py-1"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Last name *</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-700 bg-transparent outline-none py-1"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                className="w-full border-b border-gray-700 bg-transparent outline-none py-1"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea className="w-full border-b border-gray-700 bg-transparent outline-none py-1 h-24"></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-200 transition mt-4 w-max"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
