import React, { useEffect, useState } from "react";
import { fetchLeadersFromApi } from "../services/api";
import LeaderItem from "../components/LeaderItem";

export default function Leaders() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeadersFromApi().then(setLeaders).catch(console.error);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-light text-center mb-4">👑 Leaders</h1>

      <div className="row g-4">
        {leaders.map((leader) => (
          <div className="col-6 col-md-4 col-lg-3" key={leader.id}>
            <LeaderItem leader={leader} />
          </div>
        ))}
      </div>
    </div>
  );
}
