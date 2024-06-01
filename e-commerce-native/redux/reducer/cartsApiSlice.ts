import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const cartsAdapter = createEntityAdapter({
  selectId: (carts) => carts.userId,
});

const initialState = cartsAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => `/carts`,
      transformResponse: (responseData) => {
        // FIXME: change to responseData
        return cartsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: "Cart", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Cart", id })),
      ],
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
