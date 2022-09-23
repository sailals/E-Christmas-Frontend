import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

const initialState = {
  orderPostStatus: null,
};

export const ordersPost = createAsyncThunk(
  "orders/ordersPost",
  async (order, { rejectWithValue }) => {
    try {
      const order_r = await axios.post(`${url}/orders`, {
        userId: order.userId,
        cartItems: order.cartItems,
        total: order.total,
        fullName: order.fullName,
        address: order.address,
        city: order.city,
        cardno: order.cardno,
      });
      console.log(order_r.data);
      return order_r.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ordersPost.pending, (state, action) => {
      state.orderPostStatus = "Pending";
    });

    builder.addCase(ordersPost.fulfilled, (state, action) => {
      state.orderPostStatus = "Fulfilled";
    });
    builder.addCase(ordersPost.rejected, (state, action) => {
      state.orderPostStatus = "failed";
    });
  },
});

export default orderSlice.reducer;
