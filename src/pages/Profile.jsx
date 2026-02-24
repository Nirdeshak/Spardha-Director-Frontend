import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/profile/me")
      .then((res) => setUser(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="bg-white shadow-md p-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">My Profile</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>
    </div>
  );
}