import React from 'react';
import Switch from '@mui/material/Switch';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Switch
      checked={themeMode === 'light'}
      onChange={toggleTheme}
      color="default"
      inputProps={{ 'aria-label': 'Toggle theme' }}
      icon={<Brightness4Icon />}
      checkedIcon={<Brightness7Icon />}
    />
  );
};

export default ThemeToggleButton;
