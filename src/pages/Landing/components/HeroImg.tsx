import { Box, Stack } from "@mui/material";

const ADJUSTMENT_VAL = "40px";

const IMG_MAX_HEIGHT = 320;

const HeroImg = () => {
  return (
    <Stack direction={"row"} sx={{ mb: 8 }}>
      <Box
        component="img"
        src="/images/landing-dark.jpg"
        alt="Latest tech devices"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: IMG_MAX_HEIGHT,
          objectFit: "cover",
          display: "block",
          mx: "auto",
          borderRadius: 2,
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
          transform: `translate(${ADJUSTMENT_VAL},-${ADJUSTMENT_VAL})`,
        }}
      />
      <Box
        component="img"
        src="/images/landing-light.jpg"
        alt="Latest tech devices"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: IMG_MAX_HEIGHT,
          objectFit: "cover",
          display: "block",
          mx: "auto",
          borderRadius: 2,
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
          transform: `translate(-${ADJUSTMENT_VAL},${ADJUSTMENT_VAL})`,
        }}
      />
    </Stack>
  );
};

export default HeroImg;
