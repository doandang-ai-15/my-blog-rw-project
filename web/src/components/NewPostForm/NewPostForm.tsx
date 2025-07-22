import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const CREATE_POST = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`

const NewPostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [createPost, { loading }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      toast.success('Post created successfully!')
      setTitle('')
      setBody('')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!title.trim() || !body.trim()) {
      toast.error('Title and body are required')
      return
    }

    createPost({
      variables: {
        input: { title: title.trim(), body: body.trim() },
      },
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '500px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            disabled={loading}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            disabled={loading}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  )
}

export default NewPostForm
