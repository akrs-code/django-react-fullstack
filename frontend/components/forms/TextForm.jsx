import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm(props) {
  const { label } = props;

  return (
    <TextField 
      label={label} 
      variant="outlined" 
      fullWidth
    />
  );
}