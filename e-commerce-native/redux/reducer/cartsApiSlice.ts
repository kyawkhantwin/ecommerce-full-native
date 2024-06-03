import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const cartsAdapter = createEntityAdapter({
  selectId: (cart) => cart.userId,
});

const initialState = cartsAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "/carts",
      transformResponse: (responseData) => {
        // Handle the case where responseData is null or undefined
        const data = responseData || [];
        return cartsAdapter.setAll(initialState, data);
      },
      providesTags: (result, error, arg) => {
        // Handle the case where result is undefined or empty
        if (!result || !result.ids.length) {
          return [{ type: "Cart", id: "LIST" }];
        }
        return [
          { type: "Cart", id: "LIST" },
          ...result.ids.map((id) => ({ type: "Cart", id })),
        ];
      },
    }),
  }),
});

export const { useGetCartsQuery } = extendedApiSlice;

const selectCartsResult = extendedApiSlice.endpoints.getCarts.select();

const selectCartsData = createSelector(
  selectCartsResult,
  (cartsResult) => cartsResult.data
);

export const {
  selectAll: selectAllCarts,
  selectById: selectCartByUserId,
} = cartsAdapter.getSelectors(
  (state) => selectCartsData(state) ?? initialState
);
