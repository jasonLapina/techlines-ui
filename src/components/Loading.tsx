import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt={16}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
