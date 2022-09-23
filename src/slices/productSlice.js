import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import { toast } from "react-toastify";

// Initial State-->

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

// Create Product

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/products`, values);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

// Fetching Product from mongo using asyncThunk

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await axios.get(`${url}/products`);
    console.log(response.data);
    return response.data;
  }
);

// Creating Slice for products-->

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "Pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "Success";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.status = "Failed";
    },
    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.createStatus = "success";
      state.items.push(action.payload);
      toast.success("Product Created!");
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default productSlice.reducer;
