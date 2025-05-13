import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import Hero from "./components/Hero";
import Features from "./components/Features.tsx";

const Landing = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
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
