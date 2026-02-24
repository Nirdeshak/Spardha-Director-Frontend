// // // import { useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";

// // // export default function PoliceBhartiTests() {
// // //   const navigate = useNavigate();
// // //   const [completed, setCompleted] = useState({});

// // //   const tests = [
// // //     { id: 1, name: "Police Bharti Test" },
// // //     { id: 2, name: "Police Bharti Test 1" },
// // //     { id: 3, name: "Police Bharti Test 2" },
// // //   ];

// // //   const subjects = ["Marathi", "English", "Math", "Current Affairs"];

// // //   useEffect(() => {
// // //     const saved = JSON.parse(localStorage.getItem("completedTests")) || {};
// // //     setCompleted(saved);
// // //   }, []);

// // //   return (
// // //     <div className="max-w-5xl mx-auto px-4 py-6">

// // //       <h2 className="text-2xl font-bold text-gray-800 mb-8">
// // //         Police Bharti Tests
// // //       </h2>

// // //       <div className="space-y-8">

// // //         {tests.map((test) => (
// // //           <div
// // //             key={test.id}
// // //             className="bg-white rounded-3xl shadow-lg p-6"
// // //           >

// // //             {/* Test Title */}
// // //             <h3 className="text-xl font-semibold mb-6">
// // //               {test.name}
// // //             </h3>

// // //             {/* Subjects Inside One Card */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

// // //               {subjects.map((subject, index) => {
// // //                 const key = `${test.id}-${subject}`;
// // //                 const isCompleted = completed[key];

// // //                 return (
// // //                   <div
// // //                     key={index}
// // //                     onClick={() =>
// // //                       navigate(`/quiz/${test.id}/${subject}`)
// // //                     }
// // //                     className="cursor-pointer bg-gray-100 
// // //                                rounded-xl p-4 
// // //                                hover:bg-blue-100 transition
// // //                                flex justify-between items-center"
// // //                   >

// // //                     <span className="font-medium">
// // //                       {subject}
// // //                     </span>

// // //                     {isCompleted && (
// // //                       <span className="text-green-600 font-bold">
// // //                         ✔
// // //                       </span>
// // //                     )}

// // //                   </div>
// // //                 );
// // //               })}

// // //             </div>

// // //           </div>
// // //         ))}

// // //       </div>

// // //     </div>
// // //   );
// // // }









// // import { useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";

// // export default function PoliceBhartiTests() {
// //   const navigate = useNavigate();
// //   const [completed, setCompleted] = useState({});

// //   const tests = [
// //     { id: 1, name: "Police Bharti Test 1" },
// //     { id: 2, name: "Police Bharti Test 2" },
// //     { id: 3, name: "Police Bharti Test 3" },
// //     { id: 4, name: "Police Bharti Test 4" },
// //     { id: 5, name: "Police Bharti Test 5" },
// //     { id: 6, name: "Police Bharti Test 6" },
// //     { id: 7, name: "Police Bharti Test 7" },
// //     { id: 8, name: "Police Bharti Test 8" },
// //     { id: 9, name: "Police Bharti Test 9" },
// //     { id: 10, name: "Police Bharti Test 10" },


// //   ];

// //   // 🔥 IMPORTANT: label Marathi, key English
// //   const subjects = [
// //     { label: "मराठी", key: "Marathi" },
// //     { label: "गणित", key: "Math" },
// //     { label: "सामान्य ज्ञान", key: "GeneralKnowledge" },
// //     { label: "बुद्धिमत्ता चाचणी", key: "Reasoning" },
// //   ];

// //   useEffect(() => {
// //     const saved = JSON.parse(localStorage.getItem("completedTests")) || {};
// //     setCompleted(saved);
// //   }, []);

// //   return (
// //     <div className="max-w-5xl mx-auto px-4 py-6">
// //       <h2 className="text-2xl font-bold mb-8">Police Bharti Tests</h2>

// //       <div className="space-y-8">
// //         {tests.map((test) => (
// //           <div key={test.id} className="bg-white rounded-3xl shadow-lg p-6">
// //             <h3 className="text-xl font-semibold mb-6">{test.name}</h3>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               {subjects.map((subject) => {
// //                 const key = `${test.id}-${subject.key}`;
// //                 const isCompleted = completed[key];

// //                 return (
// //                   <div
// //                     key={subject.key}
// //                     onClick={() =>
// //                       navigate(`/quiz/${test.id}/${subject.key}`)
// //                     }
// //                     className="cursor-pointer bg-gray-100 rounded-xl p-4 hover:bg-blue-100 flex justify-between"
// //                   >
// //                     <span>{subject.label}</span>
// //                     {isCompleted && (
// //                       <span className="text-green-600 font-bold">✔</span>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }






// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../api";

// export default function PoliceBhartiTests() {

//   const navigate = useNavigate();

//   const [completed, setCompleted] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isPurchased, setIsPurchased] = useState(false);

//   const COURSE_ID = 1; // Police Bharti

//   const tests = [
//     { id: 1, name: "Police Bharti Test 1" },
//     { id: 2, name: "Police Bharti Test 2" },
//     { id: 3, name: "Police Bharti Test 3" },
//     { id: 4, name: "Police Bharti Test 4" },
//     { id: 5, name: "Police Bharti Test 5" },
//     { id: 6, name: "Police Bharti Test 6" },
//     { id: 7, name: "Police Bharti Test 7" },
//     { id: 8, name: "Police Bharti Test 8" },
//     { id: 9, name: "Police Bharti Test 9" },
//     { id: 10, name: "Police Bharti Test 10" },
//   ];

//   const subjects = [
//     { label: "मराठी", key: "Marathi" },
//     { label: "गणित", key: "Math" },
//     { label: "सामान्य ज्ञान", key: "GeneralKnowledge" },
//     { label: "बुद्धिमत्ता चाचणी", key: "Reasoning" },
//   ];

//   /* =================================================
//      CHECK PURCHASE STATUS
//      ================================================= */
//   useEffect(() => {

//     const checkPurchase = async () => {
//       try {
//         const res = await API.get("/user/my-courses");

//         const purchased = res.data.some(
//           (c) => c.courseId === COURSE_ID
//         );

//         setIsPurchased(purchased);

//       } catch {
//         navigate("/login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkPurchase();

//     const saved =
//       JSON.parse(localStorage.getItem("completedTests")) || {};
//     setCompleted(saved);

//   }, [navigate]);

//   /* =================================================
//      RAZORPAY PAYMENT
//      ================================================= */
//   const handleBuy = async () => {
//     try {

//       const res = await API.post(`/payment/create/${COURSE_ID}`);
//       const order = res.data;

//       const options = {
//         key: "rzp_test_yourKeyHere", // 🔴 Replace
//         amount: order.amount,
//         currency: order.currency,
//         name: "Spardha Director",
//         description: "Police Bharti Full Access",
//         order_id: order.id,
//         handler: async function (response) {

//           await API.post("/payment/verify", {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//             courseId: COURSE_ID
//           });

//           alert("Payment Successful! All Tests Unlocked 🎉");
//           setIsPurchased(true);
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch {
//       alert("Payment Failed");
//     }
//   };

//   /* ================================================= */
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg font-semibold">
//         Loading...
//       </div>
//     );
//   }

//   /* ================================================= */
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">

//       <h2 className="text-2xl font-bold mb-8">
//         Police Bharti Tests
//       </h2>

//       {!isPurchased && (
//         <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-xl mb-6 text-center">
//           <p className="mb-3">
//             🔒 Unlock all tests for ₹49
//           </p>
//           <button
//             onClick={handleBuy}
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
//           >
//             Buy Now ₹49
//           </button>
//         </div>
//       )}

//       <div className="space-y-8">

//         {tests.map((test) => {

//           const isLocked = !isPurchased && test.id !== 1;

//           return (
//             <div
//               key={test.id}
//               className="bg-white rounded-3xl shadow-lg p-6"
//             >

//               <h3 className="text-xl font-semibold mb-6">
//                 {test.name}
//                 {isLocked && (
//                   <span className="ml-2 text-red-500 text-sm">
//                     🔒 Locked
//                   </span>
//                 )}
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                 {subjects.map((subject) => {

//                   const key = `${test.id}-${subject.key}`;
//                   const isCompleted = completed[key];

//                   return (
//                     <div
//                       key={subject.key}
//                       onClick={() => {
//                         if (isLocked) {
//                           handleBuy();
//                         } else {
//                           navigate(`/quiz/${test.id}/${subject.key}`);
//                         }
//                       }}
//                       className={`rounded-xl p-4 flex justify-between items-center transition
//                       ${isLocked
//                           ? "bg-gray-200 cursor-pointer"
//                           : "bg-gray-100 hover:bg-blue-100 cursor-pointer"}
//                       `}
//                     >

//                       <span className="font-medium">
//                         {subject.label}
//                       </span>

//                       {isLocked ? (
//                         <span>🔒</span>
//                       ) : (
//                         isCompleted && (
//                           <span className="text-green-600 font-bold">
//                             ✔
//                           </span>
//                         )
//                       )}

//                     </div>
//                   );
//                 })}

//               </div>

//             </div>
//           );
//         })}

//       </div>

//     </div>
//   );
// }














import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

export default function PoliceBhartiTests() {

  const navigate = useNavigate();
  const [completed, setCompleted] = useState({});
  const [isPurchased, setIsPurchased] = useState(false);
  const COURSE_ID = 1;

  const tests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Police Bharti Test ${i + 1}`
  }));

  const subjects = [
    { label: "मराठी", key: "Marathi" },
    { label: "गणित", key: "Math" },
    { label: "सामान्य ज्ञान", key: "GeneralKnowledge" },
    { label: "बुद्धिमत्ता चाचणी", key: "Reasoning" },
  ];

  useEffect(() => {
    checkPurchase();
    const saved =
      JSON.parse(localStorage.getItem("completedTests")) || {};
    setCompleted(saved);
  }, []);

  const checkPurchase = async () => {
    try {
      const res = await API.get("/user/my-courses");
      const purchased = res.data.some(
        c => c.courseId === COURSE_ID
      );
      setIsPurchased(purchased);
    } catch {
      navigate("/login");
    }
  };

  const handleBuyRedirect = () => {
    navigate("/courses");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <h2 className="text-2xl font-bold mb-8">
        Police Bharti Tests
      </h2>

      <div className="space-y-8">

        {tests.map(test => {

          const isLocked = !isPurchased && test.id !== 1;

          return (
            <div
              key={test.id}
              className="bg-white rounded-3xl shadow-lg p-6"
            >

              <h3 className="text-xl font-semibold mb-6">
                {test.name}
                {isLocked && (
                  <span className="ml-2 text-red-500 text-sm">
                    🔒 Locked
                  </span>
                )}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {subjects.map(subject => {

                  const key = `${test.id}-${subject.key}`;
                  const isCompleted = completed[key];

                  return (
                    <div
                      key={subject.key}
                      onClick={() => {
                        if (isLocked) {
                          handleBuyRedirect();
                        } else {
                          navigate(`/quiz/${test.id}/${subject.key}`);
                        }
                      }}
                      className={`rounded-xl p-4 flex justify-between items-center transition
                      ${isLocked
                          ? "bg-gray-200 cursor-pointer"
                          : "bg-gray-100 hover:bg-blue-100 cursor-pointer"}
                      `}
                    >
                      <span>{subject.label}</span>

                      {isLocked
                        ? "🔒"
                        : isCompleted && (
                          <span className="text-green-600 font-bold">
                            ✔
                          </span>
                        )}
                    </div>
                  );
                })}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}