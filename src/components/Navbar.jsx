import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['About', 'Skills', 'Projects', 'Experience'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
        AT
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={() => scrollToSection(item.toLowerCase())}>
            <ListItemText primary={item} sx={{ textAlign: 'center', color: 'text.primary', cursor: 'pointer' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(18, 18, 18, 0.9)', backdropFilter: 'blur(10px)', backgroundImage: 'none', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" onClick={() => scrollToSection('hero')} sx={{ color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }}>
            AT
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item} onClick={() => scrollToSection(item.toLowerCase())} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'background.default' } }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
