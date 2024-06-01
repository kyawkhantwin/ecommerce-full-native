import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
})

const initialState = productsAdapter.getInitialState({});

 const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (responseData) => {
        return productsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: 'Product', id: "LIST" },
        ...result.ids.map(id => ({ type: 'Product', id }))
    ]
    })
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
  selectIds: selectProductIds,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);



