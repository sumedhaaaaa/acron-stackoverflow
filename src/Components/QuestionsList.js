import React from 'react';
import QuestionCard from './QuestionCard';
import { Grid } from '@mui/material';

const QuestionsList = ({ questions, loading }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        questions.map(question => (
          <QuestionCard key={question.question_id} question={question} />
        ))
      )}
    </div>
  );
};

export default QuestionsList;