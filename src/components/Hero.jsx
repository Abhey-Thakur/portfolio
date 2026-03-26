import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 10 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
              Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>Abhey Thakur</Box>
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontWeight: 300 }}>
              Data Science & Full-Stack Developer
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
              I build analytical endpoints, dashboards and full-stack solutions. Seeking data science internships to apply analytical skills to real world business problems.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" size="large" onClick={() => scrollToSection('projects')} sx={{ color: 'background.default' }}>
                View My Work
              </Button>
              <Button variant="outlined" color="primary" size="large" onClick={() => scrollToSection('about')}>
                About Me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/profile.jpg"
              alt="Abhey Thakur"
              sx={{
                width: { xs: 280, md: 350 },
                height: { xs: 280, md: 350 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 30px rgba(129, 199, 132, 0.3)',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
