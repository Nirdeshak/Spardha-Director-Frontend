import { useEffect, useState } from "react";
import API from "../api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/admin/dashboard").then((res) =>
      setStats(res.data)
    );
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      <Card title="Total Users" value={stats.totalUsers} />
      <Card title="Active Users" value={stats.activeUsers} />
      <Card title="Verified Users" value={stats.verifiedUsers} />
      <Card title="Pending" value={stats.pendingVerification} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}