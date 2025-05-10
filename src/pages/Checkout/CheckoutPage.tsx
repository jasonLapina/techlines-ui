import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddressForm from "../../components/AddressForm";
import AddressSelector from "../../components/AddressSelector";
import { Address } from "../../redux/slices/addressSlice";

const steps = ["Shipping Information", "Payment Details", "Review Order"];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState<Address | undefined>(
    undefined,
  );

  const { addresses } = useSelector((state: RootState) => state.address);
  const cart = useSelector((state: RootState) => state.cart);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddNewAddress = () => {
    setAddressToEdit(undefined);
    setShowAddressForm(true);
  };

  const handleEditAddress = (address: Address) => {
    setAddressToEdit(address);
    setShowAddressForm(true);
  };

  const handleAddressFormCancel = () => {
    setShowAddressForm(false);
    setAddressToEdit(undefined);
  };

  const handleAddressFormSave = () => {
    setShowAddressForm(false);
    setAddressToEdit(undefined);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return showAddressForm ? (
          <AddressForm
            existingAddress={addressToEdit}
            onCancel={handleAddressFormCancel}
            onSave={handleAddressFormSave}
          />
        ) : (
          <AddressSelector
            onAddNew={handleAddNewAddress}
            onEdit={handleEditAddress}
          />
        );
      case 1:
        return (
          <Typography variant="h6">
            Payment details will be implemented in a future update.
          </Typography>
        );
      case 2:
        return (
          <Typography variant="h6">
            Order review will be implemented in a future update.
          </Typography>
        );
      default:
        throw new Error("Unknown step");
    }
  };

  // If cart is empty, show a message
  if (cart.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1">
            Add some products to your cart before proceeding to checkout.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        <Paper sx={{ p: 3, mb: 3 }}>
          {activeStep === steps.length ? (
            <Box>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Button
                variant="contained"
                onClick={() => setActiveStep(0)}
                sx={{ mt: 3, ml: 1 }}
              >
                Back to Home
              </Button>
            </Box>
          ) : (
            <Box>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={
                    activeStep === 0 &&
                    !showAddressForm &&
                    addresses.length === 0
                  }
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
