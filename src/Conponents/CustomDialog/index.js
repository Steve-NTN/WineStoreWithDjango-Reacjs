import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import React from 'react';
// import useStyles from './styles';


const CustomDialog = ({
  openDialog, closeDialog, dialogTitle, dialogContent
}) => {
  // const classes = useStyles();

  return (
    <Dialog open={openDialog} onClose={closeDialog}>
      <DialogTitle>
        {dialogTitle}
      </DialogTitle>
      <DialogContent>
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;