import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const transactionsAdapter = createEntityAdapter({});

const initialState = transactionsAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/transactions",
      transformResponse: (responseData) => {
        // Handle the case where responseData is null or undefined
        const data = responseData || [];
        return transactionsAdapter.setAll(initialState, data);
      },
      providesTags: (result, error, arg) => {
        // Handle the case where result is undefined or empty
        if (!result || !result.ids.length) {
          return [{ type: "Transaction", id: "LIST" }];
        }
        return [
          { type: "Transaction", id: "LIST" },
          ...result.ids.map((id) => ({ type: "Transaction", id })),
        ];
      },
    }),
  }),
});

export const { useGetTransactionsQuery } = extendedApiSlice;

const selectTransactionsResult = extendedApiSlice.endpoints.getTransactions.select();

const selectTransactionsData = createSelector(
  selectTransactionsResult,
  (transactionsResult) => transactionsResult.data
);

export const {
  selectAll: selectAllTransactions,
  selectById: selectTransactionById,
  selectIds: selectTransactionIds,
} = transactionsAdapter.getSelectors(
  (state) => selectTransactionsData(state) ?? initialState
);
