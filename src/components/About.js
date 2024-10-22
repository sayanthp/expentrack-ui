import React from 'react';
import { Box, Typography, Paper, Container, Grid, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const About = () => {
  const techStack = ['React', 'Java', 'Spring', 'PostgreDB'];
  const socialLinks = [
    { href: 'https://github.com/yourusername', icon: <GitHubIcon /> },
    { href: 'https://www.linkedin.com/in/yourprofile', icon: <LinkedInIcon /> },
    { href: 'mailto:your.email@example.com', icon: <EmailIcon /> },
    { href: 'https://yourwebsite.com', icon: <LanguageIcon /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
      <Box sx={{ padding: 3 }}>
        {/* About Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom sx={{paddingBottom:'20px'}}>
            About ExpenTrack
          </Typography>
          <Typography variant="body1">
          ExpenTrack is an intuitive and user-friendly expense tracking application designed to help you monitor your spending, stay on top of your finances, and achieve your budgeting goals. Whether you are managing personal finances or tracking expenses for a small business, ExpenTrack makes it simple to record, visualize, and understand your financial data.
          </Typography>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        {/* Tech Stack Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom color="text.primary">
            Tech Stack
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {techStack.map((tech, index) => (
              <Grid item key={index}>
                <Paper sx={{ padding: '10px', backgroundColor:'black', display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="body1">{tech}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        {/* Developer Info Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom color="text.primary">
            Developer
          </Typography>
          <Typography paragraph color="text.secondary" sx={{ marginBottom: '20px' }}>
            ExpenTrack was created by <strong>Your Name</strong>, a passionate full-stack developer. I enjoy creating
            intuitive applications with a focus on user experience and clean, scalable code.
          </Typography>

          {/* Social Links */}
          <Grid container spacing={2} justifyContent="center">
            {socialLinks.map((link, index) => (
              <Grid item key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon && React.cloneElement(link.icon, { sx: { fontSize: 30, color: 'text.secondary' } })}
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      </Paper>
    </Container>
  );
};

export default About;
