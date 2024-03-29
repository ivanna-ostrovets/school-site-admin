import DeleteIcon from '@mui/icons-material/Delete';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React from 'react';

interface Props {
  value: string;
  onDelete: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

function TextFieldWithDeleteAction({
  value,
  onDelete,
  onChange,
  label = '',
}: Props) {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      sx={{ mb: 2 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onDelete} edge="end">
              <DeleteIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={onChange}
    />
  );
}

export default TextFieldWithDeleteAction;
