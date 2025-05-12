import { Box, Stack } from "@mui/material";
import { motion } from "motion/react";

const ADJUSTMENT_VAL = 40;

const IMG_MAX_HEIGHT = 320;

const HeroImg = () => {
  return (
    <Stack direction={"row"} sx={{ mb: 8 }}>
      <Box
        component={motion.img}
        initial={{
          opacity: 0,
          transform: `translate(-${ADJUSTMENT_VAL * 1.5}px,-${ADJUSTMENT_VAL}px)`,
        }}
        animate={{
          opacity: 1,
          transform: `translate(${ADJUSTMENT_VAL}px,-${ADJUSTMENT_VAL}px)`,
        }}
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
        }}
      />
      <Box
        component={motion.img}
        src="/images/landing-light.jpg"
        alt="Latest tech devices"
        initial={{
          opacity: 0,
          transform: `translate(${ADJUSTMENT_VAL * 1.5}px,${ADJUSTMENT_VAL}px)`,
        }}
        animate={{
          opacity: 1,
          transform: `translate(-${ADJUSTMENT_VAL}px,${ADJUSTMENT_VAL}px)`,
        }}
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: IMG_MAX_HEIGHT,
          objectFit: "cover",
          display: "block",
          mx: "auto",
          borderRadius: 2,
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
        }}
      />
    </Stack>
  );
};

export default HeroImg;
