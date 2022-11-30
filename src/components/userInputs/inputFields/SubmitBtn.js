import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";

export const SubmitBtn = () => {
  return (
    <Button variant="contained" endIcon={<Send />} type="submit">
      Submit
    </Button>
  );
};
