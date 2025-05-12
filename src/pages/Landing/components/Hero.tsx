import { Box, Container, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: "white",
        py: { xs: 8, md: 12 },
        mb: 8,
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 70%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg"></Container>
    </Box>
  );
};

export default Hero;
