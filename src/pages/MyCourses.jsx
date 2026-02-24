import { useEffect, useState } from "react";
import API from "../api";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/user/my-courses")
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Courses</h2>

      {courses.length === 0 && (
        <p>No active courses</p>
      )}

      <div className="grid gap-4">
        {courses.map(course => (
          <div key={course.id}
            className="bg-white shadow p-4 rounded-xl">
            <p className="font-semibold">{course.name}</p>
            <p className="text-sm text-gray-500">
              Valid till: {new Date(course.expiryDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}