import { Typography } from "@mui/material";
import GlobalHeading from "../../../components/GlobalHeading.tsx";

const HeroText = () => {
  return (
    <>
      <GlobalHeading>TechLines</GlobalHeading>
      <Typography textAlign="center" variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Discover the latest phones for your doom-scrolling needs.
      </Typography>
    </>
  );
};
export default HeroText;
