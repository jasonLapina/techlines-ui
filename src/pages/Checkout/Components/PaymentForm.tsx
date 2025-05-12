import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { CreditCard } from "@mui/icons-material";

interface PaymentFormProps {
  onSubmit: (paymentDetails: PaymentDetails) => void;
}

export interface PaymentFormRef {
  submitForm: () => void;
}

export interface PaymentDetails {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const PaymentForm = forwardRef<PaymentFormRef, PaymentFormProps>(({ onSubmit }, ref) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Partial<PaymentDetails>>({});
  
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (validateForm()) {
        onSubmit(paymentDetails);
      }
    }
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Format card number with spaces every 4 digits
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19); // Limit to 16 digits + 3 spaces

      setPaymentDetails({ ...paymentDetails, [name]: formattedValue });
      return;
    }

    // Format expiry date as MM/YY
    if (name === "expiryDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{0,2})/, "$1/$2")
        .slice(0, 5);

      setPaymentDetails({ ...paymentDetails, [name]: formattedValue });
      return;
    }

    // Limit CVV to 3 or 4 digits
    if (name === "cvv") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 4);
      setPaymentDetails({ ...paymentDetails, [name]: formattedValue });
      return;
    }

    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<PaymentDetails> = {};

    if (!paymentDetails.cardName.trim()) {
      newErrors.cardName = "Name on card is required";
    }

    if (!paymentDetails.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (paymentDetails.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!paymentDetails.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format";
    }

    if (!paymentDetails.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (paymentDetails.cvv.length < 3) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(paymentDetails);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <CreditCard sx={{ mr: 1, color: "primary.main" }} />
        <Typography>Credit Card</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            variant="outlined"
            value={paymentDetails.cardName}
            onChange={handleChange}
            error={!!errors.cardName}
            helperText={errors.cardName}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            variant="outlined"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            placeholder="1234 5678 9012 3456"
            inputProps={{ maxLength: 19 }}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            required
            id="expiryDate"
            name="expiryDate"
            label="Expiry date"
            fullWidth
            variant="outlined"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            error={!!errors.expiryDate}
            helperText={errors.expiryDate}
            placeholder="MM/YY"
            inputProps={{ maxLength: 5 }}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            fullWidth
            variant="outlined"
            value={paymentDetails.cvv}
            onChange={handleChange}
            error={!!errors.cvv}
            helperText={errors.cvv}
            placeholder="123"
            inputProps={{ maxLength: 4 }}
          />
        </Grid>
      </Grid>

      <input type="submit" style={{ display: "none" }} />
    </Box>
  );
});

export default PaymentForm;