import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import './Home.css';
import { dataBase, auth } from "../firebase-config";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([])

  const postCollectionRef = collection(dataBase, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getPosts()
  })

  const deletePost = async (id) => {
    const postDoc = doc(dataBase, 'posts', id)
    await deleteDoc(postDoc)
  }

  return (
    <div className='home-page'>
      {postLists.map((post) => {
        return (
          <div className='post'>
            <div className='post-header'>
              <div className='post-title'>
                <h1>{post.title}</h1>
              </div>
              <div className='delete-post'>
                {isAuth && post.author.id === auth.currentUser.uid &&
                  (<button className='delete-post-button' onClick={() => {
                  deletePost(post.id)
                }}>
                  &#128465;
                </button>
                )}
              </div>
            </div>
            <div className='post-text-container'>{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default Home;