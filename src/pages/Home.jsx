import React from "react";

const exams = [
  {
    title: "Police Bharti",
    desc: "Complete Police Bharti Preparation with Mock Tests",
    icon: "👮",
  },
  {
    title: "Gramsevak",
    desc: "Full Gramsevak Course + Practice Questions",
    icon: "🏡",
  },
  {
    title: "Talati",
    desc: "Talati Bharti Latest Syllabus & PYQ Practice",
    icon: "📚",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-14 px-4 rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold">
          Spardha Director
        </h1>

        <p className="mt-3 text-blue-100">
          Maharashtra Government Exam Preparation Platform
        </p>

        <button className="mt-6 bg-white text-blue-600 font-bold px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
          Start Learning
        </button>
      </div>

      {/* COURSE CARDS */}
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-5xl mb-4">
              {exam.icon}
            </div>

            <h2 className="text-xl font-bold text-blue-700">
              {exam.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {exam.desc}
            </p>

            <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              View Course
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}