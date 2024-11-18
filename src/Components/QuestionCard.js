import React from "react";

const QuestionCard = ({ title, tags, votes, answers, views }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "15px", marginBottom: "15px" }}>
      <h4 style={{ color: "#0074cc", cursor: "pointer" }}>{title}</h4>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#e1ecf4",
              color: "#39739d",
              padding: "5px 10px",
              borderRadius: "3px",
              fontSize: "12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p style={{ fontSize: "14px", color: "#555" }}>
        <strong>{votes}</strong> votes • <strong>{answers}</strong> answers • <strong>{views}</strong> views
      </p>
    </div>
  );
};

export default QuestionCard;