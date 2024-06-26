import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (id) => ({
        url: `/products/${id ? id : ""}`,
      }),
      providesTags: ["Product"],
    }),
    // // Post request
    // createProduct: build.mutation({
    //   query: (body) => ({
    //     url: "/",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // // Patch request
    // updateProduct: build.mutation({
    //   query: ({ _id, body }) => ({
    //     url: `/`,
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // // Delete request
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `/`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
  }),
});

export const {
  useGetProductsQuery,
  //   useDeleteProductMutation,
  //   useCreateProductMutation,
  //   useUpdateProductMutation,
} = productApi;
