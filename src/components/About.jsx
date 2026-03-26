import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
          About <Box component="span" sx={{ color: 'primary.main' }}>Me</Box>
        </Typography>
        <Card elevation={0} sx={{ backgroundColor: 'transparent', maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 400, color: 'text.primary', lineHeight: 1.6 }}>
              BTech CSE student with hands-on experience in data science and full-stack development. Built multiple data science and analytics projects using Python and MS Excel.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Proficient in the end-to-end data analysis pipeline, from data cleaning with Pandas to visualization with Matplotlib and Seaborn. Passionate about applying analytical skills to solve real-world business problems and collaborating with teams to deliver impactful solutions.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default About;
