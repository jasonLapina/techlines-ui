import { DeveloperMode } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "./Link.tsx";

const Logo = () => {
  return (
    <Box component={Link} to="/" sx={{ textDecoration: "none" }}>
      <Stack flexDirection="row" alignItems="center" useFlexGap>
        <DeveloperMode />
        <Typography variant="h6">TechLaps</Typography>
      </Stack>
    </Box>
  );
};

export default Logo;
