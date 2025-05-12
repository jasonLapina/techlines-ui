import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";
import { Business, Group, History, Lightbulb } from "@mui/icons-material";
import GlobalHeading from "../../components/GlobalHeading.tsx";

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          textAlign: "center",
          mb: 6,
          pt: 4,
        }}
      >
        <GlobalHeading>About TechLines</GlobalHeading>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
        >
          Your trusted partner for cutting-edge technology products since 2010
        </Typography>
        <Divider sx={{ mb: 6 }} />
      </Box>

      {/* Our Story Section */}
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Typography variant="h1">Our story</Typography>
        <Typography>
          TechLines was founded in 2010 with a simple mission: to provide
          high-quality tech products to consumers at affordable prices. What
          started as a small online store has grown into a trusted retailer of
          the latest smartphones, laptops, and accessories. Our journey began
          when our founder, Jane Smith, recognized a gap in the market for a
          tech retailer that prioritized customer education alongside sales. She
          believed that informed customers make better purchasing decisions,
          leading to higher satisfaction and loyalty. Today, we serve thousands
          of customers worldwide, maintaining our commitment to quality
          products, competitive pricing, and exceptional customer service.
        </Typography>
      </Grid>

      {/* Our Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Our Values
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              icon: <Lightbulb fontSize="large" />,
              title: "Innovation",
              description:
                "We constantly seek out the latest technologies and products to offer our customers cutting-edge solutions.",
            },
            {
              icon: <Group fontSize="large" />,
              title: "Customer Focus",
              description:
                "Our customers are at the heart of everything we do. We strive to exceed expectations in service and support.",
            },
            {
              icon: <Business fontSize="large" />,
              title: "Integrity",
              description:
                "We operate with honesty and transparency in all our business practices and customer interactions.",
            },
            {
              icon: <History fontSize="large" />,
              title: "Reliability",
              description:
                "We stand behind our products and services, ensuring consistent quality and dependability.",
            },
          ].map((value, index) => (
            <Grid size={{ xs: 12, md: 6, sm: 3 }} key={value.title}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 60,
                    height: 60,
                    mb: 2,
                  }}
                >
                  {value.icon}
                </Avatar>
                <Typography variant="h6" component="h3" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Our Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Jane Smith",
              role: "Founder & CEO",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
              bio: "Jane founded TechLines in 2010 with a vision to make technology accessible to everyone.",
            },
            {
              name: "Michael Johnson",
              role: "CTO",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              bio: "Michael leads our technology strategy and ensures we stay at the cutting edge of tech retail.",
            },
            {
              name: "Sarah Williams",
              role: "Head of Customer Experience",
              image: "https://randomuser.me/api/portraits/women/68.jpg",
              bio: "Sarah ensures that every customer interaction with TechLines exceeds expectations.",
            },
          ].map((member, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={member.name}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Stack direction="column" alignItems="center" spacing={2}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mb: 2 }}
                  />
                  <Typography variant="h6" component="h3">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    fontWeight="medium"
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    {member.bio}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Company Facts */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        sx={{ mb: 6 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            TechLines at a Glance
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[
              { label: "Founded", value: "2010" },
              { label: "Products", value: "1,000+" },
              { label: "Customers", value: "50,000+" },
              { label: "Countries", value: "25+" },
            ].map((fact) => (
              <Grid size={{ xs: 6, sm: 3 }} key={fact.label}>
                <Box textAlign="center">
                  <Typography variant="h4" fontWeight="bold">
                    {fact.value}
                  </Typography>
                  <Typography variant="body2">{fact.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
