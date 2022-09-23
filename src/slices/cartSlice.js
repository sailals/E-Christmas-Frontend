import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          { position: "bottom-left" }
        );
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.name} added to Cart`, {
          position: "bottom-left",
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`${action.payload.name} decreased from cart`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const temp = state.cartItems.filter(
          (cartItems) => cartItems._id !== action.payload._id
        );
        state.cartItems = temp;
        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );

      state.cartItems = newCartItems;
      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        // cartTotal is called accumlator which can access total,quantity
        // carrtItem is the value we get in each itreation that is contained in our state.cartitems
        (cartTotal, cartItem) => {
          // destructiing
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },

        {
          // Intial Value, it can object,array ..
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Checkout Successfull", {
        position: "bottom-left",
      });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotal, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
