import React, { useEffect, useState } from 'react'
import './posts.css'
import { Post } from '../../components'
import { db } from '../../firebase/instance'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <div className='posts'>
      {posts.map(({ post, id }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}

export default Posts
