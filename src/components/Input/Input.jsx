import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const InputField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.primary.main,
    fontWeight: 600
  },
  '& .MuiInputBase-root': {
    borderRadius: '10px',
    borderColor: '#C4C4C4',
    fontSize: '14px',
    height: '3.125rem'
  }
}));

function Input(props) {
  return <InputField {...props} />;
}

export default Input;
