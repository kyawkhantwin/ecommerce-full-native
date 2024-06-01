import { createEntityAdapter } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const authAdapter = createEntityAdapter({
  selectId: (user) => {
    console.log("selectId", user);
    return user.id;
  },
});
const initialState = authAdapter.getInitialState({});
const authApiExtended = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
      transformResponse: (responseData) => {
        return authAdapter.setAll(initialState, responseData);
      },
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: { ...credentials },
      }),
      transformResponse: (responseData) => {
        return authAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiExtended;
