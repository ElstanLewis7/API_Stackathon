import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">News from Alan the AI</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
