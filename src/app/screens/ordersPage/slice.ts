import { createSlice } from "@reduxjs/toolkit";
import { OrderPageState } from "../../../lib/types/screen";

const initialState: OrderPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const homePageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  homePageSlice.actions;

const OrdersPageReducer = homePageSlice.reducer;
export default OrdersPageReducer;
