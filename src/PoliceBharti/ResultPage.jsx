import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { total, correct, wrong } = location.state || {
    total: 0,
    correct: 0,
    wrong: 0
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold mb-6">📊 Test Result</h2>

        <div className="space-y-4 text-lg">

          <div>📌 Total Questions: <span className="font-semibold">{total}</span></div>

          <div className="text-green-600">
            ✅ Correct Answers: <span className="font-semibold">{correct}</span>
          </div>

          <div className="text-red-600">
            ❌ Wrong Answers: <span className="font-semibold">{wrong}</span>
          </div>

        </div>

        <button
onClick={() => navigate("/courses/police-bharti", { replace: true })}
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          Restart Test
        </button>

      </div>

    </div>
  );
}