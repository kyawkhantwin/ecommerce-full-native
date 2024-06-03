import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const initialState = productsAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (responseData) => {
        // Handle the case where responseData is null or undefined
        const data = responseData || [];
        return productsAdapter.setAll(initialState, data);
      },
      providesTags: (result, error, arg) => {
        // Handle the case where result is undefined or empty
        if (!result || !result.ids.length) {
          return [{ type: "Product", id: "LIST" }];
        }
        return [
          { type: "Product", id: "LIST" },
          ...result.ids.map((id) => ({ type: "Product", id })),
        ];
      },
    }),
  }),
});

export const { useGetProductsQuery } = extendedApiSlice;

const selectProductsResult = extendedApiSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
