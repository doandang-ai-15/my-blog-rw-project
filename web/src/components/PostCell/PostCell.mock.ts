// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  post: {
    __typename: 'Post' as const,
    id: 42,
  },
})
