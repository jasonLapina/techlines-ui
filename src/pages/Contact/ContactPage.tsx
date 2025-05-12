import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";
import { Email, LocationOn, Phone, Send } from "@mui/icons-material";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log("Form submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Your message has been sent! We'll get back to you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{
          textAlign: "center",
          mb: 6,
          pt: 4,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
        >
          Have questions or feedback? We'd love to hear from you!
        </Typography>
        <Divider sx={{ mb: 6 }} />
      </Box>

      <Grid container spacing={6} sx={{ mb: 8 }}>
        {/* Contact Information */}
        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              We're here to help with any questions about our products,
              services, or your orders. Reach out to us using any of the methods
              below.
            </Typography>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Our Location
                  </Typography>
                  <Typography variant="body2">
                    123 Tech Street, Suite 456
                    <br />
                    San Francisco, CA 94107
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Email Us
                  </Typography>
                  <Typography variant="body2">
                    General Inquiries: info@techlines.com
                    <br />
                    Customer Support: support@techlines.com
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Call Us
                  </Typography>
                  <Typography variant="body2">
                    Customer Service: (555) 123-4567
                    <br />
                    Sales Department: (555) 765-4321
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Business Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday: 10:00 AM - 4:00 PM PST
              <br />
              Sunday: Closed
            </Typography>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
        >
          <Paper
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Send Us a Message
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={3}>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                  />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    id="message"
                    name="message"
                    label="Your Message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      px: 4,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      "&:hover": {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{ mb: 8 }}
      >
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Visit Our Store
        </Typography>
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.9847379485073!2d121.108517!3d14.312087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6345e0c2f571%3A0x4e9d1ec5a4b411a9!2sZavalla%20St%2C%20Kanluran%2C%20Santa%20Rosa%2C%20Laguna!5e0!3m2!1sen!2sph!4v1715500000000!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="TechLines Store Location"
          />
        </Paper>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
