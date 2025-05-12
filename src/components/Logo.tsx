import { DeveloperMode } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
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
