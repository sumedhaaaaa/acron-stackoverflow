import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import QuestionsList from './QuestionsList';

const QuestionsSection = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, settab] = useState('interesting');

  useEffect(() => {
    // Fetch questions using the fetch API
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data.items); // Set the fetched questions in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '10px 20px',
          borderRadius: '8px',
        }}
      >
        {/* Left Section */}
        <Box>
          <Typography
            variant='h6'
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Top Question
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#F48024',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#E57300',
                },
              }}
            >
              Interesting
            </Button>
            {['Bountied', 'Hot', 'Week', 'Month'].map(label => (
              <Button
                key={label}
                variant='text'
                sx={{
                  color: '#555',
                  textTransform: 'none',
                  fontWeight: 'normal',
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Right Section */}
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '5px 20px',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Ask Question
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#ffffff',
          padding: '10px',
          overflowY: 'auto',
        }}
      >
        <QuestionsList questions={questions} loading={loading} />
      </Box>
    </div>
  );
};

export default QuestionsSection;