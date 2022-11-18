import { Card } from "antd";
import React from "react";
import { Progress } from "antd";
const Professor = () => (
  <div
    className="site-card-border-less-wrapper"
    style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
  >
    <Card
      title="Jonathon"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Rating</p>

      <div
        style={{
          width: 170,
        }}
      >
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    </Card>
  </div>
);
export default Professor;
