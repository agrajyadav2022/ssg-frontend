import { Typography } from '@mui/material';

function ModalTitle({ children, ...props }) {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.primary.main,
        fontSize: '28px',
        fontWeight: 700
      }}
      {...props}>
      {children}
    </Typography>
  );
}

export default ModalTitle;
