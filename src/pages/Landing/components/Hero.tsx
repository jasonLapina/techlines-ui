import { Container, Stack } from "@mui/material";
import HeroImg from "./HeroImg.tsx";
import HeroText from "./HeroText.tsx";
import HeroCta from "./HeroCta.tsx";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Stack useFlexGap alignItems={"center"}>
        <HeroImg />
        <HeroText />
        <HeroCta />
      </Stack>
    </Container>
  );
};

export default Hero;
