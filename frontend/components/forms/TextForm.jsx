import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm(props) {
  const { label, value, name, onChange, onBlur, error, helperText } = props;

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
}