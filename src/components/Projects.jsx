import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton, Chip } from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const projectsData = [
  {
    title: 'IPL 2024 Dataset Analysis',
    description: 'Analyzed IPL 2024 match data to uncover player performance trends and team statistics. Cleaned and transformed raw datasets using Pandas and created visualizations to identify match-winning patterns.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Abhey-Thakur/PythonProject'
  },
  {
    title: 'MS Excel Netflix Dashboard',
    description: 'Built an interactive Excel dashboard to analyze Netflix content distribution across genres, years, and ratings. Used formulas, pivot tables, and slicers to enable easy filtering and quick insights.',
    tech: ['MS Excel', 'Pivot Tables', 'Dashboards'],
    github: 'https://github.com/Abhey-Thakur/Excel_Project'
  },
  {
    title: 'Study Buddy Chatbot',
    description: 'Developed a desktop-based chatbot to help students answer queries and manage study schedules. Integrated Gemini for intelligent responses and designed a user-friendly interface using Tkinter.',
    tech: ['Python', 'Google Gemini API', 'Tkinter'],
    github: 'https://github.com/Abhey-Thakur/Study-Buddy-Chatbot'
  }
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
          My <Box component="span" sx={{ color: 'primary.main' }}>Projects</Box>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <FolderOpenOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    <IconButton href={project.github} target="_blank" color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map((t) => (
                      <Chip key={t} label={t} size="small" sx={{ fontFamily: 'monospace', color: 'primary.main', backgroundColor: 'transparent' }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
