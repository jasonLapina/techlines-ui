import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LocalShipping, Security, Support } from "@mui/icons-material";
import { motion } from "motion/react";
import { useTheme } from "@mui/material/styles";

const Features = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        Why Choose TechLines?
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 3,
        }}
      >
        {[
          {
            icon: <LocalShipping fontSize="large" color="primary" />,
            title: "Free Shipping",
            description: "You pay a grand total of $0 for shipping",
          },
          {
            icon: <Security fontSize="large" color="primary" />,
            title: "Secure Payments",
            description: "All transactions are secure and encrypted",
          },
          {
            icon: <Support fontSize="large" color="primary" />,
            title: "24/7 Support",
            description: "Our support team is always available",
          },
        ].map((feature) => (
          <Box key={feature.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
      </Box>
    </Container>
  );
};
export default Features;
