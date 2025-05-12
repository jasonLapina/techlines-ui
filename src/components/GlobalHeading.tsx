import { Typography, useTheme } from "@mui/material";
import React from "react";

const GlobalHeading = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h2"
      component="h1"
      fontWeight="bold"
      gutterBottom
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
};

export default GlobalHeading;
