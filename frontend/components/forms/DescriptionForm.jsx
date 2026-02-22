import TextField from '@mui/material/TextField';

export default function DescriptionForm({ label, rows = 9, value, name, onChange, onBlur, helperText, error }) {
  return (
    <TextField
      id="standard-multiline-static"
      label={label}
      multiline
      fullWidth
      rows={rows}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
        error = {error}
      helperText={helperText}
    />
  );
}