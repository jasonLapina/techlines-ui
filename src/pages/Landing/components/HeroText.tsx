import { Typography } from "@mui/material";

const HeroText = () => {
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        sx={{ mb: 2 }}
        textAlign="center"
      >
        Next-Gen Tech at Your Fingertips
      </Typography>
      <Typography textAlign="center" variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Discover the latest phones for your doom-scrolling needs.
      </Typography>
    </>
  );
};
export default HeroText;
