import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function SelectForm({ label, options, value, name, onChange, onBlur, error, helperText }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={value}
        name={name}
        error={error}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error>{Error}</FormHelperText>
    </FormControl>
  );
}