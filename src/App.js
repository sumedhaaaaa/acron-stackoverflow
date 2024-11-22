import React, {useState} from 'react';

import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import RightSidebar from './components/RightSidebar';
import Sidebar from './components/Sidebar';
import QuestionsSection from './components/QuestionsSection';
import { Grid, Box } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async query => {
    // setLoading(true);
    if(query!==''){
      try {
        const response = await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.items);
      } catch (err) {
        console.log(err);
      }
      console.log(query);
    }
  };

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header */}
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#ffffff',
          padding: '10px',
        }}
      >
        <Header handleSearch={handleSearch}/>
      </Grid>

      {/* Main Content */}
      <Grid
        container
        item
        xs={12}
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        {/* Sidebar */}
        <Grid
          item
          xs={2} 
          sx={{
            backgroundColor: '#ffffff',
            overflowY: 'auto',
          }}
        >
          <Sidebar />
        </Grid>

        {/* Middle Content */}
        <Grid
          item
          xs={7} 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
          }}
        >
          {/* Questions Section */}
          <Box
            sx={{
              backgroundColor: '#ffffff',
              padding: '10px',
            }}
          >
            <QuestionsSection searchData={data}/>
          </Box>

          
        </Grid>

        {/* Right Sidebar */}
        <Grid
          item
          xs={3} 
          sx={{
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            padding: '10px',
          }}
        >
          <RightSidebar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;