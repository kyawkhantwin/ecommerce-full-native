import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Product", "Category", "Cart", "User", "Order", "Transaction"],
  endpoints: (builder) => ({}),
});
export default apiSlice;
