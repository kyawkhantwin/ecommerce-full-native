import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const orderAdapter = createEntityAdapter({});

const initialState = orderAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      transformResponse: (responseData) => {
        return orderAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: "Order", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Order", id })),
      ],
    }),
  }),
});

export const { useGetOrderQuery } = extendedApiSlice;
const selectOrderResult = extendedApiSlice.endpoints.getOrders.select();

const selectOrderData = createSelector(
  selectOrderResult,
  (orderResult) => orderResult.data
);
export const {
  selectAll: selectAllOrders,
  selectById: selectOrderById,
  selectIds: selectOrderIds,
} = orderAdapter.getSelectors(
  (state) => selectOrderData(state) ?? initialState
);
