import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <Box
      sx={{
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        p: 1,
        width: "fit-content",
        mt: 1,
      }}
    >
      <Stack alignItems="center" direction="row" useFlexGap gap={2}>
        <QtyButton onClick={handleDecrement} />
        <Typography sx={{ pointerEvents: "none" }}>{quantity}</Typography>
        <QtyButton onClick={() => setQuantity((prev) => prev + 1)} increment />
      </Stack>
    </Box>
  );
};

interface QtyButtonProps {
  increment?: boolean;
  onClick: () => void;
}
const QtyButton = ({ increment = false, onClick }: QtyButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      {increment ? <Add /> : <Remove />}
    </IconButton>
  );
};

export default QuantityInput;
