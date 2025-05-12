import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Logo from "./Logo.tsx";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Box>
            <Stack spacing={2}>
              <Box sx={{ mb: 2 }}>
                <Logo />
              </Box>
              <Typography variant="body2">
                Your one-stop shop for the latest tech products and accessories.
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/products" color="inherit" underline="hover">
                Products
              </Link>
              <Link href="/cart" color="inherit" underline="hover">
                Cart
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Stack>
          </Box>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 2,
            borderTop: "1px solid",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} TechLines. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
