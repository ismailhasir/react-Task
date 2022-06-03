import { Button } from "@mui/material";

export const BuyButton = ({ saleClosed }) => {
  const text = saleClosed ? " TELEFONLA SATIN AL" : "SATIN AL";
  return (
    <Button
      size="large"
      fullWidth
      variant="contained"
      disabled={saleClosed}
      text={text}
    >
      {text}
    </Button>
  );
};

export default BuyButton;
