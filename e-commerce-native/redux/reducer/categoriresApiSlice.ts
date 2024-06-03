import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";

const categoriesAdapter = createEntityAdapter({
  selectId: (category) => category.id,
});

const initialState = categoriesAdapter.getInitialState({});

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (responseData) => {
        // Handle the case where responseData is null or undefined
        const data = responseData || [];
        return categoriesAdapter.setAll(initialState, data);
      },
      providesTags: (result, error, arg) => {
        // Handle the case where result is undefined or empty
        if (!result || !result.ids.length) {
          return [{ type: "Category", id: "LIST" }];
        }
        return [
          { type: "Category", id: "LIST" },
          ...result.ids.map((id) => ({ type: "Category", id })),
        ];
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = extendedApiSlice;

const selectCategoriesResult =
  extendedApiSlice.endpoints.getCategories.select();

const selectCategoriesData = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data
);

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = categoriesAdapter.getSelectors(
  (state) => selectCategoriesData(state) ?? initialState
);

// TODO: create a category with id, image, and name
