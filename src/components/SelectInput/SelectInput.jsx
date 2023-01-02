import { InputLabel, Select } from '@mui/material';

const styles = {
  selectLabel: ({ palette }) => ({
    color: palette.primary.main
  }),
  select: {
    fontSize: '14px',
    borderRadius: '10px'
  }
};

function SelectInput({ label, labelId, children, ...props }) {
  return (
    <>
      <InputLabel sx={styles.selectLabel} shrink={true} id={labelId}>
        {label}
      </InputLabel>
      <Select sx={styles.select} labelId={labelId} label={label} {...props}>
        {children}
      </Select>
    </>
  );
}

export default SelectInput;
