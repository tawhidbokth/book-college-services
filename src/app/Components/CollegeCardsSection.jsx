const colleges = [
  {
    id: 1,
    name: "Oxford International College",
    admissionDates: "Aug 1 - Sep 30",
    events: "Orientation, Workshop",
    research: "AI and Robotics",
    sports: "Football, Basketball",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Harvard University",
    admissionDates: "Sep 1 - Oct 15",
    events: "Seminars, Alumni Meet",
    research: "Medical Sciences",
    sports: "Tennis, Swimming",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Stanford College",
    admissionDates: "Jul 15 - Aug 31",
    events: "Tech Fest, Career Fair",
    research: "Computer Science",
    sports: "Baseball, Track",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
];

export function CollegeCardsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Featured Colleges</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{college.name}</h3>
              <p><strong>Admission Dates:</strong> {college.admissionDates}</p>
              <p><strong>Events:</strong> {college.events}</p>
              <p><strong>Research:</strong> {college.research}</p>
              <p><strong>Sports:</strong> {college.sports}</p>
              <button className="mt-3 text-blue-600 hover:underline">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
