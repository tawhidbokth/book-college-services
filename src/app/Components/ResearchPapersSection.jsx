const researchPapers = [
  {
    id: 1,
    title: "AI in Healthcare",
    url: "https://arxiv.org/pdf/2107.08919.pdf",
  },
  {
    id: 2,
    title: "Climate Change Impact",
    url: "https://www.ipcc.ch/site/assets/uploads/2018/03/WGIIAR5-Chap3_FINAL.pdf",
  },
  {
    id: 3,
    title: "Advanced Robotics",
    url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9184103",
  },
];

export function ResearchPapersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Research Papers</h2>
      <ul className="list-disc list-inside space-y-3 text-blue-700">
        {researchPapers.map((paper) => (
          <li key={paper.id}>
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {paper.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
