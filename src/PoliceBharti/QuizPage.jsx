// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { POLICE_QUESTIONS } from "../data/policeQuestions";
// import { ENGLISH_QUESTIONS } from "../data/englishQuestions";
// import { MATH_QUESTIONS } from "../data/mathQuestions";
// import { CURRENT_AFFAIRS_QUESTIONS } from "../data/currentAffairsQuestions";

// export default function QuizPage() {
//   const navigate = useNavigate();
//   const { testId, subject } = useParams();

//   // 🔥 SUBJECT BASED QUESTIONS
//   let QUESTIONS = [];

//   if (subject === "Marathi") {
//     QUESTIONS = POLICE_QUESTIONS;
//   } else if (subject === "English") {
//     QUESTIONS = ENGLISH_QUESTIONS;
//   } else if (subject === "Math") {
//     QUESTIONS = MATH_QUESTIONS;
//   } else if (subject === "Current Affairs") {
//     QUESTIONS = CURRENT_AFFAIRS_QUESTIONS;
//   }

//   const [index, setIndex] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [resultType, setResultType] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0);

//   const question = QUESTIONS[index];
//   const letters = ["A", "B", "C", "D"];

//   const handleSelect = (option) => {
//     if (resultType) return;
//     setSelected(option);
//   };

//   const checkAnswer = () => {
//     if (!selected) return;

//     if (selected === question.correctAnswer) {
//       setCorrectCount((prev) => prev + 1);
//       setResultType("correct");
//     } else {
//       setResultType("wrong");
//     }
//   };

//   const saveCompletion = () => {
//     const key = `${testId}-${subject}`;
//     const data = JSON.parse(localStorage.getItem("completedTests")) || {};
//     data[key] = true;
//     localStorage.setItem("completedTests", JSON.stringify(data));
//   };

//   const goNext = () => {
//     if (index < QUESTIONS.length - 1) {
//       setIndex(index + 1);
//       setSelected(null);
//       setResultType(null);
//     } else {
//       saveCompletion();

//       navigate("/result", {
//         state: {
//           total: QUESTIONS.length,
//           correct: correctCount,
//           wrong: QUESTIONS.length - correctCount
//         }
//       });
//     }
//   };

//   if (!question) return <div>No Questions Found</div>;

//   return (
//     <div className="min-h-screen bg-slate-100 flex justify-center px-4 pt-6 pb-12">

//       <div className="w-full max-w-4xl">

//         <div className="bg-white rounded-3xl px-8 py-12 shadow-xl mb-8">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
//             {question.question}
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           {question.options.map((option, i) => (
//             <button
//               key={i}
//               onClick={() => handleSelect(option)}
//               className={`p-5 rounded-2xl text-left shadow
//               ${selected === option
//                 ? "bg-pink-500 text-white"
//                 : "bg-white hover:bg-slate-100"}
//               `}
//             >
//               {letters[i]}. {option}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={checkAnswer}
//           className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-2xl"
//         >
//           Check
//         </button>
//       </div>

//       {resultType && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">

//           <div className="bg-white rounded-2xl px-6 py-6 text-center w-full max-w-md">

//             <div className="text-xl font-bold mb-3">
//               {resultType === "correct"
//                 ? "✅ बरोबर आहे!"
//                 : "❌ थोडं चुकलं आहे!"}
//             </div>

//             <div className="mb-3">
//               योग्य उत्तर:
//               <div className="font-semibold mt-1">
//                 {question.correctAnswer}
//               </div>
//             </div>

//             <button
//               onClick={goNext}
//               className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg"
//             >
//               पुढील प्रश्न
//             </button>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TEST1 } from "../data/police/policeTests1";
import { TEST2 } from "../data/police/policeTests2";
import { TEST3 } from "../data/police/policeTests3";
import { TEST4 } from "../data/police/policeTests4";
import { TEST5 } from "../data/police/policeTests5";
import { TEST6 } from "../data/police/policeTests6";
import { TEST7 } from "../data/police/policeTests7";
import { TEST8 } from "../data/police/policeTests8";
import { TEST9 } from "../data/police/policeTests9";
import { TEST10 } from "../data/police/policeTests10";



export default function QuizPage() {
  const navigate = useNavigate();
  const { testId, subject } = useParams();

  let QUESTIONS = [];

  if (testId === "1") QUESTIONS = TEST1[subject] || [];
  if (testId === "2") QUESTIONS = TEST2[subject] || [];
  if (testId === "3") QUESTIONS = TEST3[subject] || [];
  if (testId === "4") QUESTIONS = TEST4[subject] || [];
  if (testId === "5") QUESTIONS = TEST5[subject] || [];
  if (testId === "6") QUESTIONS = TEST6[subject] || [];
  if (testId === "7") QUESTIONS = TEST7[subject] || [];
  if (testId === "8") QUESTIONS = TEST8[subject] || [];
  if (testId === "9") QUESTIONS = TEST9[subject] || [];
  if (testId === "10") QUESTIONS = TEST10[subject] || [];


  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [resultType, setResultType] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  const totalQuestions = QUESTIONS.length;
  const question = QUESTIONS[index];

  if (!question) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        No Questions Found
      </div>
    );
  }

  const handleSelect = (option) => {
    if (!resultType) setSelected(option);
  };

  const checkAnswer = () => {
    if (!selected) return;

    if (selected === question.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
      setResultType("correct");
    } else {
      setResultType("wrong");
    }
  };

  const goNext = () => {
    if (index < totalQuestions - 1) {
      setIndex(index + 1);
      setSelected(null);
      setResultType(null);
    } else {
      navigate("/result", {
        state: {
          total: totalQuestions,
          correct: correctCount,
          wrong: totalQuestions - correctCount,
        },
      });
    }
  };

  const progressPercent = ((index + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center px-4 pt-10 pb-16">
      <div className="w-full max-w-4xl">

        {/* Question Number + Total */}
        <div className="mb-4 flex justify-between text-gray-600 font-semibold text-lg">
          <span>
            Question {index + 1} / {totalQuestions}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl px-8 py-12 mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              className={`p-5 rounded-2xl text-left shadow-md transition
              ${
                selected === option
                  ? "bg-pink-500 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Check Button */}
        <button
          onClick={checkAnswer}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Check Answer
        </button>
      </div>

      {/* Result Modal */}
      {resultType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl px-8 py-8 text-center w-full max-w-md shadow-2xl">

            <div className="text-2xl font-bold mb-4">
              {resultType === "correct"
                ? "✅ बरोबर आहे!"
                : "❌ थोडं चुकलं आहे!"}
            </div>

            <div className="mb-4">
              योग्य उत्तर:
              <div className="font-semibold text-lg mt-2">
                {question.correctAnswer}
              </div>
            </div>

            <button
              onClick={goNext}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
            >
              पुढील प्रश्न
            </button>
          </div>
        </div>
      )}
    </div>
  );
}