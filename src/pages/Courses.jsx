// // import { Link } from "react-router-dom";

// // export default function Courses() {
// //   const courses = [
// //     {
// //       title: "Police Bharti",
// //       description: "Complete preparation with Mock Tests & Practice Sets",
// //       icon: "👮",
// //       price: "₹99",
// //       link: "/courses/police-bharti"
// //     },
// //     {
// //       title: "Gramsevak",
// //       description: "Full syllabus coverage + Previous Year Questions",
// //       icon: "🏡",
// //       price: "₹99",
// //     },
// //     {
// //       title: "Talati",
// //       description: "Latest syllabus + Daily practice questions",
// //       icon: "📚",
// //       price: "₹99",
// //     },
// //   ];

// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// //       {courses.map((course, index) => {
// //         const CardContent = (
// //           <div className="bg-white rounded-3xl shadow-md 
// //                           hover:shadow-xl hover:-translate-y-1
// //                           transition duration-300 
// //                           p-6 flex flex-col justify-between">

// //             <div>
// //               <div className="flex justify-between items-center">
// //                 <div className="text-5xl">{course.icon}</div>
// //                 <span className="bg-blue-600 text-white 
// //                                  px-3 py-1 text-sm 
// //                                  rounded-full font-semibold">
// //                   {course.price}
// //                 </span>
// //               </div>

// //               <h3 className="mt-4 text-lg font-semibold text-gray-800">
// //                 {course.title}
// //               </h3>

// //               <p className="text-gray-500 text-sm mt-2">
// //                 {course.description}
// //               </p>
// //             </div>

// //             <button className="mt-6 w-full bg-blue-600 
// //                                text-white py-3 rounded-xl 
// //                                font-medium">
// //               View Tests
// //             </button>
// //           </div>
// //         );

// //         return course.link ? (
// //           <Link key={index} to={course.link}>
// //             {CardContent}
// //           </Link>
// //         ) : (
// //           <div key={index}>{CardContent}</div>
// //         );
// //       })}
// //     </div>
// //   );
// // }







// import { useEffect, useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";

// export default function Courses() {

//   const [myCourses, setMyCourses] = useState([]);
//   const [loadingCourseId, setLoadingCourseId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchMyCourses();
//   }, []);

//   const fetchMyCourses = async () => {
//     try {
//       const res = await API.get("/user/my-courses");
//       setMyCourses(res.data);
//     } catch {
//       setMyCourses([]);
//     }
//   };

//   const handleBuy = async (courseId) => {
//     try {
//       setLoadingCourseId(courseId);

//       const res = await API.post(`/payment/create/${courseId}`);
//       const order = res.data;

//       const options = {
//         key: "rzp_test_YOUR_REAL_KEY", // 🔴 Replace
//         amount: order.amount,
//         currency: order.currency,
//         name: "Spardha Director",
//         description: "Course Purchase",
//         order_id: order.id,
//         handler: async function (response) {

//           await API.post("/payment/verify", {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//             courseId
//           });

//           alert("Payment Successful 🎉");

//           setMyCourses(prev => [
//             ...prev,
//             { courseId }
//           ]);

//           setLoadingCourseId(null);
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch {
//       alert("Payment failed");
//       setLoadingCourseId(null);
//     }
//   };

//   const courses = [
//     { id: 1, title: "Police Bharti", icon: "👮", link: "/courses/police-bharti" },
//     { id: 2, title: "Gramsevak", icon: "🏡" },
//     { id: 3, title: "Talati", icon: "📚" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//       {courses.map(course => {

//         const isActive = myCourses.some(
//           c => c.courseId === course.id
//         );

//         return (
//           <div
//             key={course.id}
//             className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
//           >

//             <div>
//               <div className="text-5xl">{course.icon}</div>
//               <h3 className="mt-4 text-lg font-semibold">
//                 {course.title}
//               </h3>
//               <p className="text-sm text-gray-500 mt-2">
//                 3 Months Validity • ₹49 Only
//               </p>
//             </div>

//             {isActive ? (
//               <button
//                 onClick={() => navigate(course.link)}
//                 className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
//               >
//                 Start Learning
//               </button>
//             ) : (
//               <button
//                 onClick={() => handleBuy(course.id)}
//                 disabled={loadingCourseId === course.id}
//                 className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl disabled:opacity-60"
//               >
//                 {loadingCourseId === course.id
//                   ? "Processing..."
//                   : "Buy Now ₹49"}
//               </button>
//             )}

//           </div>
//         );
//       })}

//     </div>
//   );
// }






import { useNavigate } from "react-router-dom";

export default function Courses() {

  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "Police Bharti", icon: "👮" },
    { id: 2, title: "Gramsevak", icon: "🏡" },
    { id: 3, title: "Talati", icon: "📚" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {courses.map(course => (
        <div
          key={course.id}
          onClick={() => navigate(`/courses/${course.id}`)}
          className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 cursor-pointer"
        >
          <div className="text-5xl">{course.icon}</div>
          <h3 className="mt-4 text-lg font-semibold">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Click to view tests
          </p>
        </div>
      ))}

    </div>
  );
}