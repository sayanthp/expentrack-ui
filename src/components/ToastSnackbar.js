import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ToastSnackbar = ({ toastOpen, toastMessage, toastType, handleToastClose }) => {
  const anchorOrigin = { vertical: 'top', horizontal: 'right' };
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleToastClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={toastOpen}
      autoHideDuration={3000}
      onClose={handleToastClose}
      message={toastMessage}
      sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: toastType === 'success' ? 'green' : '#f44336',
          color: 'white',
        },
      }}
      action={action}
    />
  );
};

export default ToastSnackbar;
