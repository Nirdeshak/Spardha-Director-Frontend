import { useEffect, useState } from "react";
import API from "../api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="text-center border-t">
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.verified ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}