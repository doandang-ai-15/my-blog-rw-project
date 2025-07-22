import type { PostQuery, PostQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query PostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading post...</div>

export const Empty = () => <div>Post not found.</div>

export const Failure = ({ error }: CellFailureProps<PostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  post,
}: CellSuccessProps<PostQuery, PostQueryVariables>) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
      <small>Created: {new Date(post.createdAt).toLocaleDateString()}</small>
    </article>
  )
}
