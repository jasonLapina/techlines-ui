import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { Google, Shop } from "@mui/icons-material";

const Hero = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const userInfo = useSelector((state: RootState) => state.user.userInfo);

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
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Next-Gen Tech at Your Fingertips
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Discover the latest phones for your doom-scrolling needs.
              </Typography>
            </motion.div>
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "center",
            }}
          >
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
            <Stack useFlexGap direction="row" gap={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  width: "fit-content",
                  py: 1.5,
                  px: 4,
                  backgroundColor: "white",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white",
                  },
                  zIndex: 2,
                }}
                endIcon={<Shop />}
                onClick={() => navigate("/products")}
              >
                Shop All Products
              </Button>
              {!userInfo && (
                <Button
                  onClick={() =>
                    (window.location.href = `${import.meta.env.VITE_API_URL}/users/auth/google`)
                  }
                  endIcon={<Google />}
                  size="large"
                  variant="contained"
                  sx={{
                    width: "fit-content",
                    py: 1.5,
                    px: 4,
                    color: "white",
                    background: `linear-gradient(45deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
                    fontWeight: "bold",
                    borderRadius: "30px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
                      background: `linear-gradient(45deg, ${theme.palette.info.dark}, ${theme.palette.info.main})`,
                    },
                    zIndex: 2,
                  }}
                >
                  Sign in with Google
                </Button>
              )}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
