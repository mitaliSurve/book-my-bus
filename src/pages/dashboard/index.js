import React from "react";
import "./index.css";
import "../../components/button/button.css";
import Button from "../../components/button/Button";

const Dashboard = () => {
  return (
    <div>
      <div className="display display_flex">
        <div>
          <Button className="button">operator</Button>
        </div>
        <div style={{ marginLeft: 5, marginRight: 5 }}>
          <Button className="button button_light">customer</Button>
        </div>
      </div>
      <div className="container">
        <div className="display">
          {[1, 2, 3, 4].map((seats) => (
            <div className="seat" key={seats}>
              {seats.id}
            </div>
          ))}
        </div>
        <div className="display">
          {[1, 2, 3, 4].map((seats) => (
            <div className="seat" key={seats}>
              {seats.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
