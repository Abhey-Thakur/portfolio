import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const timelineContainer = {
  position: 'relative',
  borderLeft: '2px solid rgba(129, 199, 132, 0.3)',
  paddingLeft: '1.5rem',
  marginLeft: '1rem',
};

const timelineItem = {
  position: 'relative',
  marginBottom: '2.5rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '14px',
    height: '14px',
    backgroundColor: '#81C784',
    borderRadius: '50%',
    left: '-1.5rem',
    top: '5px',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 0 4px #121212',
  }
};

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 10 }}>
      <Container>
        <Grid container spacing={6}>
          {/* Education & Certs */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <SchoolIcon sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h4" fontWeight="bold">Education & Certs</Typography>
            </Box>
            <Box sx={timelineContainer}>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">BTech. CSE</Typography>
                <Typography variant="body1" color="text.secondary">Lovely Professional University</Typography>
                <Typography variant="subtitle2" color="primary.main" sx={{ mb: 1 }}>Expected Completion: July 2027</Typography>
                <Typography variant="body2" color="text.secondary">Coursework: Data Structures & Algorithms, DBMS, Machine Learning, Software Engineering.</Typography>
              </Box>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">Mastering Data Structures and Algorithms</Typography>
                <Typography variant="body1" color="text.secondary">BOARD INFINITY (40 hours live sessions)</Typography>
              </Box>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">Computer Communications</Typography>
                <Typography variant="body1" color="text.secondary">Coursera (University of Colorado)</Typography>
              </Box>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">The Bits and Bytes of Computer Networking</Typography>
                <Typography variant="body1" color="text.secondary">Coursera (Google)</Typography>
              </Box>
            </Box>
          </Grid>
          
          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <EmojiEventsIcon sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h4" fontWeight="bold">Achievements</Typography>
            </Box>
            <Box sx={timelineContainer}>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">Hackathon Participant (24 Hour)</Typography>
                <Typography variant="body1" color="text.secondary">CodingBlocks LPU</Typography>
                <Typography variant="subtitle2" color="primary.main" sx={{ mb: 1 }}>Feb - March 2024</Typography>
                <Typography variant="body2" color="text.secondary">Competed among 150+ participants. Developed full-stack website addressing food wastage with responsive design. Presented solution to panel of 5 industry judges.</Typography>
              </Box>
              <Box sx={timelineItem}>
                <Typography variant="h6" fontWeight="bold">Community Service Volunteer</Typography>
                <Typography variant="body1" color="text.secondary">The Suket Senior Citizen Home Nyas</Typography>
                <Typography variant="subtitle2" color="primary.main" sx={{ mb: 1 }}>June 2024</Typography>
                <Typography variant="body2" color="text.secondary">Completed 30+ hours providing daily assistance. Organized recreational activities improving resident engagement by 60% as measured by participation rates.</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
