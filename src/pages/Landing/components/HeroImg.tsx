import { Box } from "@mui/material";

const HeroImg = () => {
  return (
    <Box
      component="img"
      src="/images/landing-light.jpg"
      alt="Latest tech devices"
      sx={{
        width: "100%",
        height: "auto",
        maxHeight: 400,
        objectFit: "cover",
        display: "block",
        mx: "auto",
        borderRadius: 2,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};

export default HeroImg;
