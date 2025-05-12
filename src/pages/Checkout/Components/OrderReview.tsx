import React from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CartItem } from "../../../types";
import { Address } from "../../../redux/slices/addressSlice";
import { PaymentDetails } from "./PaymentForm";

interface OrderReviewProps {
  paymentDetails: PaymentDetails;
}

const OrderReview: React.FC<OrderReviewProps> = ({ paymentDetails }) => {
  const { cart, address } = useSelector((state: RootState) => state);
  const { addresses, selectedAddressId } = address;

  const selectedAddress = addresses.find(
    (addr: Address) => addr.id === selectedAddressId
  );

  // Calculate subtotal
  const subtotal = cart.items.reduce((acc: number, item: CartItem) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  // Fixed shipping cost
  const shippingCost = 5;

  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Order Review
      </Typography>

      <Grid container spacing={3}>
        {/* Shipping Address */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Shipping Address
            </Typography>
            {selectedAddress ? (
              <Box>
                <Typography variant="body1">
                  {selectedAddress.alias} {selectedAddress.isDefault && "(Default)"}
                </Typography>
                <Typography variant="body2">
                  {selectedAddress.street}
                </Typography>
                <Typography variant="body2">
                  {selectedAddress.city}, {selectedAddress.state} {selectedAddress.postalCode}
                </Typography>
                <Typography variant="body2">
                  {selectedAddress.country}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Phone: {selectedAddress.phoneNumber}
                </Typography>
              </Box>
            ) : (
              <Typography variant="body1" color="error">
                No shipping address selected
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Payment Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
            <Typography variant="body1">
              Card: **** **** **** {paymentDetails.cardNumber.slice(-4)}
            </Typography>
            <Typography variant="body2">
              Name: {paymentDetails.cardName}
            </Typography>
            <Typography variant="body2">
              Expires: {paymentDetails.expiryDate}
            </Typography>
          </Paper>
        </Grid>

        {/* Order Items */}
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Items
            </Typography>

            <Stack spacing={2} sx={{ maxHeight: "300px", overflowY: "auto" }}>
              {cart.items.map((item: CartItem) => (
                <Box key={item.product._id}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 2, sm: 1 }}>
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        style={{ width: "100%", maxWidth: "50px" }} 
                      />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 7 }}>
                      <Typography variant="body1">
                        {item.product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.product.subtitle}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 2, sm: 2 }} textAlign="right">
                      <Typography variant="body2">
                        {item.quantity} x ${item.product.price}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 2, sm: 2 }} textAlign="right">
                      <Typography variant="body1" fontWeight="bold">
                        ${(item.quantity * item.product.price).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </Stack>

            {/* Order Summary */}
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12 }}>
                  <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
                  </Stack>

                  <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="body1">Shipping</Typography>
                    <Typography variant="body1">${shippingCost.toFixed(2)}</Typography>
                  </Stack>

                  <Divider sx={{ my: 1 }} />

                  <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6" color="primary">
                      ${total.toFixed(2)}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderReview;
