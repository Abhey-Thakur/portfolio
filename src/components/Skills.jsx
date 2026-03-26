import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const skillCategories = [
  {
    title: 'Data Science',
    icon: <PieChartIcon fontSize="large" color="primary" />,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Visualization', 'Statistical Analysis'],
  },
  {
    title: 'Programming',
    icon: <CodeIcon fontSize="large" color="primary" />,
    skills: ['Python', 'SQL', 'C++', 'C', 'Java', 'JavaScript'],
  },
  {
    title: 'Web Tech',
    icon: <LaptopMacIcon fontSize="large" color="primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Tools',
    icon: <BuildIcon fontSize="large" color="primary" />,
    skills: ['Git', 'GitHub', 'Linux', 'MySQL', 'Power BI', 'MS Excel'],
  },
  {
    title: 'Soft Skills',
    icon: <PeopleIcon fontSize="large" color="primary" />,
    skills: ['Problem-Solving', 'Team Collaboration', 'Project Mgmt', 'Analytical Thinking'],
  },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
          My <Box component="span" sx={{ color: 'primary.main' }}>Skills</Box>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{category.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>{category.title}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip key={skill} label={skill} sx={{ backgroundColor: 'rgba(129, 199, 132, 0.1)', color: 'primary.main', fontWeight: 500, border: '1px solid rgba(129, 199, 132, 0.2)' }} />
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

export default Skills;
