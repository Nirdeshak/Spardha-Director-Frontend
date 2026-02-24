import { useState } from "react";
import API from "../api";

export default function ChangePassword() {
  const [oldPassword, setOld] = useState("");
  const [newPassword, setNew] = useState("");

  const changePassword = async () => {
    try {
      await API.post("/profile/change-password", {
        oldPassword,
        newPassword,
      });
      alert("Password changed");
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 shadow rounded w-96">
        <h2 className="text-lg font-bold mb-4">Change Password</h2>
        <input
          type="password"
          placeholder="Old Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setOld(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setNew(e.target.value)}
        />
        <button
          onClick={changePassword}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
}