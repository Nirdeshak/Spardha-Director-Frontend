// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import Login from "./pages/Login";
// // // import Profile from "./pages/Profile";
// // // import ChangePassword from "./pages/ChangePassword";
// // // import AdminDashboard from "./pages/AdminDashboard";
// // // import AdminUsers from "./pages/AdminUsers";

// // import Layout from "./Layout";
// // import Home from "./pages/Home";
// // import Courses from "./pages/Courses";
// // import MyCourses from "./pages/MyCourses";
// // import Profile from "./pages/Profile";


// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/courses" element={<Courses />} />
// //           <Route path="/mycourses" element={<MyCourses />} />
// //           <Route path="/profile" element={<Profile />} />

// //         {/* <Route path="/" element={<Login />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/change-password" element={<ChangePassword />} />
// //         <Route path="/admin" element={<AdminDashboard />} />
// //         <Route path="/admin/users" element={<AdminUsers />} /> */}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;






// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import MyCourses from "./pages/MyCourses";
// import Profile from "./pages/Profile";

// import PoliceBhartiTests from "./PoliceBharti/PoliceBhartiTests";
// import QuizPage from "./PoliceBharti/QuizPage";
// import ResultPage from "./PoliceBharti/ResultPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 👇 Layout wrapper */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="courses" element={<Courses />} />
//             <Route path="courses/police-bharti" element={<PoliceBhartiTests />} />
//                     {/* <Route path="/quiz/:testId" element={<QuizPage />} /> */}
//                     <Route path="quiz/:testId/:subject" element={<QuizPage />} />
//                             <Route path="/result" element={<ResultPage />} />
//           <Route path="mycourses" element={<MyCourses />} />
//           <Route path="profile" element={<Profile />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PaymentPage from "./pages/PaymentPage";

import CourseTests from "./CourseTests/CourseTests";
import QuizPage from "./PoliceBharti/QuizPage";
import ResultPage from "./PoliceBharti/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Payment Page (OUTSIDE Layout) */}
        <Route path="/pay" element={<PaymentPage />} />

        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseId" element={<CourseTests />} />
          <Route path="quiz/:testId/:subject" element={<QuizPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="mycourses" element={<MyCourses />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;