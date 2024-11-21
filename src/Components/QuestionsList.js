import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionsList = () => {
  const questions = [
    {
      title: "I am not able to use view binding in activity in Kotlin android where I have also used companion object",
      tags: ["Android", "Kotlin", "Android-Activity", "Android-Viewbinding", "Companion-Object"],
      votes: 7,
      answers: 7,
      views: 7,
    },
    {
      title: "How to handle API calls efficiently in React with Redux?",
      tags: ["React", "Redux", "JavaScript", "API"],
      votes: 12,
      answers: 9,
      views: 24,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {questions.map((question, index) => (
        <QuestionCard key={index} {...question} />
      ))}
    </div>
  );
};

export default QuestionsList;