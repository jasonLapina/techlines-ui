import { createSlice } from "@reduxjs/toolkit";

export interface Address {
  id: string;
  alias: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

const initialState = {
  addresses: JSON.parse(localStorage.getItem("addresses") ?? "[]"),
  selectedAddressId: localStorage.getItem("selectedAddressId") || "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      const newAddress = action.payload;
      
      // If this is the first address, make it default
      if (state.addresses.length === 0) {
        newAddress.isDefault = true;
      }
      
      // If this address is marked as default, unmark any other default address
      if (newAddress.isDefault) {
        state.addresses.forEach((address: Address) => {
          address.isDefault = false;
        });
      }
      
      state.addresses.push(newAddress);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
      
      // If this is the first address or it's marked as default, select it
      if (state.addresses.length === 1 || newAddress.isDefault) {
        state.selectedAddressId = newAddress.id;
        localStorage.setItem("selectedAddressId", newAddress.id);
      }
    },
    
    updateAddress: (state, action) => {
      const updatedAddress = action.payload;
      const index = state.addresses.findIndex((address: Address) => address.id === updatedAddress.id);
      
      if (index !== -1) {
        // If this address is being set as default, unmark any other default address
        if (updatedAddress.isDefault) {
          state.addresses.forEach((address: Address) => {
            address.isDefault = false;
          });
        }
        
        state.addresses[index] = updatedAddress;
        localStorage.setItem("addresses", JSON.stringify(state.addresses));
        
        // If this address is marked as default, select it
        if (updatedAddress.isDefault) {
          state.selectedAddressId = updatedAddress.id;
          localStorage.setItem("selectedAddressId", updatedAddress.id);
        }
      }
    },
    
    removeAddress: (state, action) => {
      const addressId = action.payload;
      const addressToRemove = state.addresses.find((address: Address) => address.id === addressId);
      
      state.addresses = state.addresses.filter((address: Address) => address.id !== addressId);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
      
      // If the removed address was the selected one, select another one (preferably the default)
      if (state.selectedAddressId === addressId) {
        const defaultAddress = state.addresses.find((address: Address) => address.isDefault);
        if (defaultAddress) {
          state.selectedAddressId = defaultAddress.id;
        } else if (state.addresses.length > 0) {
          state.selectedAddressId = state.addresses[0].id;
        } else {
          state.selectedAddressId = "";
        }
        localStorage.setItem("selectedAddressId", state.selectedAddressId);
      }
      
      // If the removed address was the default and there are other addresses, make another one default
      if (addressToRemove?.isDefault && state.addresses.length > 0) {
        state.addresses[0].isDefault = true;
        localStorage.setItem("addresses", JSON.stringify(state.addresses));
      }
    },
    
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
      localStorage.setItem("selectedAddressId", action.payload);
    },
    
    setDefaultAddress: (state, action) => {
      const addressId = action.payload;
      
      state.addresses.forEach((address: Address) => {
        address.isDefault = address.id === addressId;
      });
      
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
      
      // Also select this address
      state.selectedAddressId = addressId;
      localStorage.setItem("selectedAddressId", addressId);
    },
  },
});

export const {
  addAddress,
  updateAddress,
  removeAddress,
  selectAddress,
  setDefaultAddress,
} = addressSlice.actions;

export default addressSlice.reducer;