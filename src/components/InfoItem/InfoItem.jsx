import { Box, Typography, useTheme } from '@mui/material';

function InfoItem({ label, value, status }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography fontSize="13px" fontWeight="700" color="primary">
        {label}
      </Typography>
      <Typography
        fontSize="14px"
        fontWeight="500"
        color={status ? theme.palette.status[status] : '#989898'}>
        {value}
      </Typography>
    </Box>
  );
}

export default InfoItem;
