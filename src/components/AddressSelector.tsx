import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Address, selectAddress } from "../redux/slices/addressSlice";
import { RootState } from "../redux/store";
import { User } from "../types.ts";

interface AddressSelectorProps {
  onAddNew: () => void;
  onEdit: (address: Address) => void;
}

const AddressSelector: React.FC<AddressSelectorProps> = ({
  onAddNew,
  onEdit,
}) => {
  const dispatch = useDispatch();
  const { addresses, selectedAddressId } = useSelector(
    (state: RootState) => state.address,
  );

  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(selectAddress(event.target.value));
  };

  const selectedAddress = addresses.find(
    (address: Address) => address.id === selectedAddressId,
  );
  const userInfo = useSelector(
    (state: RootState) => state.user.userInfo,
  ) as unknown as User;

  if (addresses.length === 0) {
    return (
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          You don't have any saved addresses yet.
        </Typography>
        <Button variant="contained" color="primary" onClick={onAddNew}>
          Add New Address
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Typography>
        <strong>Email:</strong> {userInfo?.email}
      </Typography>
      <Typography>
        <strong>Phone:</strong> {selectedAddress?.phoneNumber || "Not provided"}
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6" gutterBottom>
        Delivery Address
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="address-select-label">Select Address</InputLabel>
        <Select
          labelId="address-select-label"
          id="address-select"
          value={selectedAddressId}
          label="Select Address"
          onChange={handleChange}
        >
          {addresses.map((address: Address) => (
            <MenuItem key={address.id} value={address.id}>
              {address.alias} {address.isDefault && "(Default)"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedAddress && (
        <Box sx={{ mt: 2, p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
          <Typography variant="subtitle1" gutterBottom color={"info"}>
            {selectedAddress.alias} {selectedAddress.isDefault && "(Default)"}
          </Typography>
          <Typography variant="body1">
            <strong>Street:</strong> {selectedAddress.street}
          </Typography>
          <Typography variant="body1">
            <strong>City:</strong> {selectedAddress.city}
          </Typography>
          <Typography variant="body1">
            <strong>State:</strong> {selectedAddress.state}
          </Typography>
          <Typography variant="body1">
            <strong>Postal Code:</strong> {selectedAddress.postalCode}
          </Typography>
          <Typography variant="body1">
            <strong>Country:</strong> {selectedAddress.country}
          </Typography>

          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => onEdit(selectedAddress)}
          >
            Edit
          </Button>
        </Box>
      )}
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
        onClick={onAddNew}
      >
        Add New Address
      </Button>
    </Box>
  );
};

export default AddressSelector;
