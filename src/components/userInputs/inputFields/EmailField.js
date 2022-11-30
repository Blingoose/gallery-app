import { TextField } from "@mui/material";

const EmailField = ({ emailRef, defaultVal = "" }) => {
  return (
    <TextField
      autoFocus
      margin="normal"
      variant="standard"
      id="email"
      label="Email"
      type="email"
      fullWidth
      required
      inputRef={emailRef}
      defaultValue={defaultVal}
    />
  );
};

export default EmailField;
