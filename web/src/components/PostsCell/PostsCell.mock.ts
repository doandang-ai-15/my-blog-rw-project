// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  posts: [
    {
      __typename: 'Post' as const,
      id: 42,
    },
    {
      __typename: 'Post' as const,
      id: 43,
    },
    {
      __typename: 'Post' as const,
      id: 44,
    },
  ],
})
