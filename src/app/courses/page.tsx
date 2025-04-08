const terms = [
  {
    title: "T1 2025",
    courses: [
      "COMP6843: Extended Web Application Security and Testing",
      "PSYC1001: Psychology 1A",
    ],
  },
  {
    title: "T3 2024",
    courses: [
      "COMP3161: Concepts of Programming Languages",
      "COMP6841: Extended Security Engineering and Cyber Security",
      "COMP3222: Digital Circuits and Systems",
    ],
  },
  {
    title: "T2 2024",
    courses: [
      "COMP3141: Software System Design and Implementation",
      "COMP9517: Computer Vision",
    ],
  },
  {
    title: "T1 2024",
    courses: [
      "COMP3891: Extended Operating Systems",
      "COMP3331: Computer Networks and Applications",
      "COMP3411: Artificial Intelligence",
    ],
  },
  {
    title: "T3 2023",
    courses: [
      "COMP1521: Computer Systems Fundamentals",
      "COMP2511: Object-Oriented Design & Programming",
      "MATH3411: Information, Codes and Ciphers",
    ],
  },
  {
    title: "T2 2023",
    courses: [
      "COMP2521: Data Structures and Algorithms",
      "COMP1531: Software Engineering Fundamentals",
      "MATH1241: Higher Mathematics 1B",
    ],
  },
  {
    title: "T1 2023",
    courses: ["MATH1081: Discrete Mathematics", "MATH1131: Mathematics 1A"],
  },
];

export default function Page() {
  return (
    <div className="mt-4">
      {terms.map((term) => (
        <div key={term.title} className="mb-4 md:mb-7">
          <div className="text-custom-green hover:text-custom-green-h text-lg md:text-xl border border-stone-500 rounded-md w-fit px-1.5 py-0.5 mb-1.5">
            {term.title}
          </div>
          <div className="space-y-3">
            {term.courses.map((course) => (
              <div className="relative" key={course}>
                <span className="absolute w-px h-full left-0 bg-gradient-to-b from-black via-custom-green to-black"></span>
                <div className="text-stone-400 text-sm pl-2 md:text-base">
                  {course}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
