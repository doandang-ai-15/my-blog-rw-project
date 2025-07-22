import type { PostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading posts...</div>

export const Empty = () => <div>No posts yet.</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<PostsQuery>) => {
  return (
    <div>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            border: '1px solid #ccc',
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>
            Created: {new Date(post.createdAt).toLocaleDateString()}
          </small>
        </article>
      ))}
    </div>
  )
}
