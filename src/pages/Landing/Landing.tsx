import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { LocalShipping, Security, Support } from "@mui/icons-material";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import Hero from "./components/Hero";

const Landing = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Hero />
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
                    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                      background: `linear-gradient(135deg, ${theme.palette.grey[50]}, ${theme.palette.background.paper})`,
                    },
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
              color: "white",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "url('/images/pattern.png')",
                backgroundSize: "cover",
                opacity: 0.05,
                zIndex: 0,
              },
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

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
                    background: `linear-gradient(45deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                  },
                }}
                onClick={() => navigate("/products")}
              >
                Shop All Products
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Landing;
