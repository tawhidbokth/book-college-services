"use client";

export default function Banner() {
  return (
    <section className="relative bg-blue-600 text-white py-10 px-6 md:px-12 rounded-lg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-blue-800 rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-800 rounded-full opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover & Book Your Perfect College
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Explore top colleges, admissions, events, research, and sports facilities all in one place.
          </p>

          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image or Illustration */}
        <div className="flex-shrink-0">
          <img
            src="/college-banner.jpg" // আপনার ছবি দিন public ফোল্ডারে
            alt="College Illustration"
            className="w-72 md:w-full rounded-3xl  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
