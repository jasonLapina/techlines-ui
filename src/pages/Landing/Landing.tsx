import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Google, LocalShipping, Security, Support } from "@mui/icons-material";
import { motion } from "motion/react";
import Link from "../../components/Link.tsx";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Landing = () => {
  const theme = useTheme();

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      console.log(user);
    }
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          color: "white",
          py: { xs: 8, md: 12 },
          mb: 8,
          borderRadius: "20px",
          boxShadow: 3,
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
                  variant="outlined"
                  size="large"
                  sx={{
                    width: "fit-content",
                    py: 1.5,
                    px: 4,
                    backgroundColor: "secondary.main",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  Shop All Products
                </Button>
                <Button
                  onClick={() =>
                    (window.location.href = `${import.meta.env.VITE_API_URL}/users/auth/google`)
                  }
                  endIcon={<Google />}
                  size="large"
                  sx={{
                    width: "fit-content",
                    py: 1.5,
                    px: 4,
                    borderColor: "secondary.main",
                    color: "white",
                  }}
                >
                  Sign in with Google
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          Why Choose TechLines?
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <LocalShipping fontSize="large" color="primary" />,
              title: "Free Shipping",
              description: "Free shipping on all orders over $50",
            },
            {
              icon: <Security fontSize="large" color="primary" />,
              title: "Secure Payments",
              description: "All transactions are secure and encrypted",
            },
            {
              icon: <Support fontSize="large" color="primary" />,
              title: "24/7 Support",
              description: "Our support team is always available to help",
            },
          ].map((feature, index) => (
            <Box key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Ready to Upgrade Your Tech?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
            >
              Browse our extensive collection of the latest tech products and
              accessories. Find exactly what you need at competitive prices.
            </Typography>
            <Link to="/products">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  backgroundColor: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
              >
                Shop All Products
              </Button>
            </Link>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Landing;
