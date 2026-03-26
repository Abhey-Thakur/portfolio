import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.paper', borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Let's Connect
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          I'm currently seeking data science internships and opportunities.<br/>
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
          <IconButton href="mailto:abheythakur101@gmail.com" color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/abhey-thakur" target="_blank" color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/Abhey-Thakur" target="_blank" color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
          &copy; 2024 Abhey Thakur. Designed & Built in React.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
