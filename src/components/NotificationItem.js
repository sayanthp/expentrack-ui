// NotificationItem.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

const NotificationItem = ({ notification, onDelete }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${notification.id}-content`}
        id={`panel-${notification.id}-header`}
      >
        <Typography>{notification.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{notification.details}</Typography>
        <IconButton
          color="error"
          onClick={() => onDelete(notification.id)}
          sx={{ marginLeft: 'auto', display: 'block' }}
        >
          <DeleteIcon />
        </IconButton>
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationItem;
