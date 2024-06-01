import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const TransactionsAdapter = createEntityAdapter({});

const initialState = TransactionsAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/transactions",
      transformResponse: (responseData) => {
        return TransactionsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: "Transaction", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Transaction", id })),
      ],
    }),
  }),
});

export const { useGetTransactionsQuery } = extendedApiSlice;
const selectTransactionsResult =
  extendedApiSlice.endpoints.getTransactions.select();

const selectTransactionsData = createSelector(
  selectTransactionsResult,
  (TransactionsResult) => TransactionsResult.data
);
export const {
  selectAll: selectAllTransactions,
  selectById: selectTransactionById,
  selectIds: selectTransactionIds,
} = TransactionsAdapter.getSelectors(
  (state) => selectTransactionsData(state) ?? initialState
);
