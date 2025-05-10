import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addAddress,
  Address,
  removeAddress,
  updateAddress,
} from "../redux/slices/addressSlice";

interface AddressFormProps {
  existingAddress?: Address;
  onCancel?: () => void;
  onSave?: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  existingAddress,
  onCancel,
  onSave,
}) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState<Address>(
    existingAddress || {
      id: uuidv4(),
      alias: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
      isDefault: false,
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === "isDefault") {
      setAddress({ ...address, [name]: checked });
    } else {
      setAddress({ ...address, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingAddress) {
      dispatch(updateAddress(address));
    } else {
      dispatch(addAddress(address));
    }
    if (onSave) onSave();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        {existingAddress ? "Edit Address" : "Add New Address"}
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="Address Alias (e.g., Home, Work)"
            name="alias"
            value={address.alias}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            required
            fullWidth
            label="Street Address"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="State/Province"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={address.postalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="Country"
            name="country"
            value={address.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={address.phoneNumber}
            onChange={handleChange}
            type="tel"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="isDefault"
                checked={address.isDefault}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Set as default address"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            {onCancel && (
              <Button onClick={onCancel} variant="outlined">
                Cancel
              </Button>
            )}
            <Button type="submit" variant="contained" color="primary">
              {existingAddress ? "Update Address" : "Save Address"}
            </Button>
            {existingAddress && (
              <Button
                onClick={() => dispatch(removeAddress(address.id))}
                type="submit"
                variant="text"
                color="error"
              >
                Remove address
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;
