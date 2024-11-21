import React from 'react';
import { Card, CardContent, Typography, Chip, Grid } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function QuestionCard({ question }) {
  return (
    <Card
      style={{
        margin: '16px 0',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: 'none'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <CardContent>
        {/* Question Title */}
        <a
            href={question.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', }}
          >
          <Typography variant='h6' gutterBottom color='textSecondary' style={{ fontWeight: 'bold' }}>
          
            {question.title}
            </Typography>
          </a>
        

        {/* Tags */}
        <div
          style={{
            marginBottom: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {question.tags.map(tag => (
            <Chip
              key={tag}
              label={<Typography gutterBottom color='textSecondary'>{tag}</Typography>}
              size='small'
              style={{
                backgroundColor: '#eef2f7',
                color: '#007acc',
                fontWeight: 'bold',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '70%' }}>
            {/* Stats (Votes, Comments, Views) */}
            <Grid container spacing={2} alignItems='center'>
              <Grid item>
                <ArrowUpwardIcon
                  style={{ color: '#f28b00', verticalAlign: 'middle' }}
                />
                <Typography
                  variant='body2'
                  component='span'
                  style={{ fontWeight: 'bold', marginLeft: '4px' }}
                >
                  {question.score}
                </Typography>
              </Grid>
              <Grid item>
                <ChatBubbleOutlineIcon
                  style={{ color: '#6c757d', verticalAlign: 'middle' }}
                />
                <Typography
                  variant='body2'
                  component='span'
                  style={{ marginLeft: '4px' }}
                >
                  {question.answer_count}
                </Typography>
              </Grid>
              <Grid item>
                <VisibilityIcon
                  style={{ color: '#6c757d', verticalAlign: 'middle' }}
                />
                <Typography
                  variant='body2'
                  component='span'
                  style={{ marginLeft: '4px' }}
                >
                  {question.view_count}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* Metadata */}
            <Typography
              variant='caption'
              color='textSecondary'
              style={{ display: 'flex' }}
            >
              Asked {new Date(question.creation_date * 1000).toLocaleString()} :{' '}
              <a
                href={`https://stackoverflow.com/users/${question.owner.user_id}`}
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: '#007acc' }}
              >
                {' ' + question.owner.display_name}
              </a>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}