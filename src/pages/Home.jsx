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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100">

      {/* Hero Section */}
      <div className="text-center px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
          Spardha Director
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Maharashtra Government Exam Preparation Platform.
          Police Bharti, Gramsevak, Talati & More.
        </p>

        <button className="mt-6 sm:mt-8 bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition duration-300">
          Start Learning
        </button>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-8 pb-14">
        <div className="grid gap-6 sm:gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3">

          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-4">
                {exam.icon}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700">
                {exam.title}
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                {exam.desc}
              </p>

              <button className="mt-5 bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition duration-300">
                View Course
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}