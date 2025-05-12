import { DeveloperMode } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "./Link.tsx";

interface LogoProps {
  color?: string;
}

const Logo = ({ color = "inherit" }: LogoProps) => {
  return (
    <Box component={Link} to="/" sx={{ textDecoration: "none", color }}>
      <Stack flexDirection="row" alignItems="center" useFlexGap>
        <DeveloperMode sx={{ color: "inherit" }} />
        <Typography variant="h6" color="inherit">
          TechLines
        </Typography>
      </Stack>
    </Box>
  );
};

export default Logo;
