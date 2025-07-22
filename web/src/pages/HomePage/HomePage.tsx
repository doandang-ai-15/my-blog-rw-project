// HomePage.tsx
import { MetaTags } from '@redwoodjs/web'

import NewPostForm from 'src/components/NewPostForm'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* Header Section */}
      <header
        style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '1rem 0',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>My Awesome Blog</h1>
      </header>

      <div
        style={{
          maxWidth: '960px', // Giới hạn chiều rộng nội dung
          margin: '2rem auto', // Căn giữa và thêm khoảng cách trên/dưới
          padding: '0 1rem', // Khoảng đệm hai bên
        }}
      >
        {/* New Post Section */}
        <section
          style={{
            marginBottom: '3rem',
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: '#333',
              borderBottom: '2px solid #eee',
              paddingBottom: '0.5rem',
            }}
          >
            Create New Post
          </h2>
          <NewPostForm />
        </section>

        {/* Recent Posts Section */}
        <section
          style={{
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: '#333',
              borderBottom: '2px solid #eee',
              paddingBottom: '0.5rem',
            }}
          >
            Recent Posts
          </h2>
          <PostsCell />
        </section>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          textAlign: 'center',
          padding: '1.5rem 0',
          marginTop: '3rem',
          backgroundColor: '#333',
          color: '#bbb',
          fontSize: '0.9rem',
        }}
      >
        &copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </footer>
    </>
  )
}

export default HomePage
