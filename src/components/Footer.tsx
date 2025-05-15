import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Email,
  Facebook,
  Instagram,
  KeyboardArrowUp,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
  Twitter,
} from "@mui/icons-material";
import Logo from "./Logo.tsx";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scroll to top button */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Button
          onClick={scrollToTop}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "0 0 24px 24px",
            minWidth: "unset",
            px: 2,
            py: 0.5,
            boxShadow: 3,
          }}
        >
          <KeyboardArrowUp />
        </Button>
      </Box>

      {/* Main footer content */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Logo />
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              Your one-stop shop for the latest tech products and accessories.
              We provide cutting-edge technology to enhance your digital
              lifestyle.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                color="primary"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 2, sm: 6 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                position: "relative",
                pb: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover": { pl: 1, color: "primary.main" },
                }}
              >
                Home
              </Link>
              <Link
                href="/products"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover": { pl: 1, color: "primary.main" },
                }}
              >
                Products
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover": { pl: 1, color: "primary.main" },
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover": { pl: 1, color: "primary.main" },
                }}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover": { pl: 1, color: "primary.main" },
                }}
              >
                Cart
              </Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                position: "relative",
                pb: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn fontSize="small" color="primary" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Tech Street, Digital City, 10001
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" color="primary" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  support@techlines.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone fontSize="small" color="primary" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                position: "relative",
                pb: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Subscribe to receive updates on new products and special
              promotions.
            </Typography>
            <TextField
              fullWidth
              placeholder="Your email"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <Send fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} TechLines. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>

      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          opacity: 0.05,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Footer;
