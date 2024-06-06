import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../config/Friebase";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  try {
    const collectionRef = collection(dataBase, "products");
    const querySnapshot = await getDocs(collectionRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.unshift({ ...doc.data(), id: doc.id });
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

const dataSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    loading: false,
    error: null,
    cart: [],
    mount: 0,
    allPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        const existingItem = state.cart.find((cartItem) => cartItem.id === id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart.push({ ...item, quantity: 1 });
        }
        state.mount += 1;
        state.allPrice += +item.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        const item = state.cart[itemIndex];
        state.mount -= item.quantity;
        state.allPrice -= +item.price * item.quantity;
        state.cart.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        state.mount += 1;
        state.allPrice += +item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.mount -= 1;
        state.allPrice -= +item.price;
      } else {
        const product = state.cart[itemIndex];
        state.cart.splice(itemIndex, 1);
        state.mount -= product.quantity;
        state.allPrice -= +product.price * product.quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  dataSlice.actions;

export default dataSlice.reducer;
