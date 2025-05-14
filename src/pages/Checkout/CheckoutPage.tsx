import { useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddressForm from "../../components/AddressForm";
import AddressSelector from "../../components/AddressSelector";
import { Address } from "../../redux/slices/addressSlice";
import { OrderReview, PaymentForm } from "./Components";
import { PaymentDetails, PaymentFormRef } from "./Components/PaymentForm";
import { CartItem, User } from "../../types.ts";
import { useMutation } from "@tanstack/react-query";
import { clearCart } from "../../redux/slices/cartSlice.ts";

const steps = ["Shipping Information", "Payment Details", "Review Order"];

interface Order {
  user: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    id: string;
  }[];
  shippingInformation: string;
  price: number;
  isDelivered: boolean;
  deliveredAt?: Date;
}

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState<Address | undefined>(
    undefined,
  );
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOrderPlaced] = useState(false);

  const paymentFormRef = useRef<PaymentFormRef>(null);

  const { addresses, selectedAddressId } = useSelector(
    (state: RootState) => state.address,
  );
  const cart = useSelector((state: RootState) => state.cart);

  const userInfo = useSelector(
    (state: RootState) => state.user.userInfo,
  ) as unknown as User;

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

  const handlePaymentSubmit = (details: PaymentDetails) => {
    setPaymentDetails(details);
    handleNext();
  };

  const { mutate } = useMutation({
    mutationFn: async (data: Order) => {
      await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
      });
    },
    onSuccess: () => {
      setOrderPlaced(true);
      dispatch(clearCart());
      handleNext();
    },
  });

  const handlePlaceOrder = () => {
    // Get the selected address
    const selectedAddress = addresses.find(
      (addr: Address) => addr.id === selectedAddressId,
    );

    const orderTotal = cart.items.reduce(
      (total: number, item: CartItem) =>
        total + item.product.price * item.quantity,
      0,
    );

    const orderItems = cart.items.map((item: CartItem) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price * item.quantity,
      id: item.product._id,
    }));

    const payload = {
      user: userInfo._id,
      items: orderItems,
      shippingInformation: selectedAddress,
      price: orderTotal,
      isDelivered: false,
    };

    mutate(payload);
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
          <PaymentForm ref={paymentFormRef} onSubmit={handlePaymentSubmit} />
        );
      case 2:
        return <OrderReview paymentDetails={paymentDetails} />;
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
    <Container maxWidth="xl" sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 2, pb: 4 }}>
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
                Your order number is #{Math.floor(Math.random() * 10000000)}. We
                have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </Typography>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/")}
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
                {!showAddressForm && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (activeStep === steps.length - 1) {
                        handlePlaceOrder();
                      } else if (activeStep === 1) {
                        // For payment step, trigger form validation using the ref
                        if (paymentFormRef.current) {
                          paymentFormRef.current.submitForm();
                          // handleNext will be called by the form's onSubmit handler if validation passes
                        }
                      } else {
                        handleNext();
                      }
                    }}
                    disabled={
                      activeStep === 0 &&
                      !showAddressForm &&
                      addresses.length === 0
                    }
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
