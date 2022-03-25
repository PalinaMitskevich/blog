import React, { useState, useEffect } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase, auth } from '../firebase-config';
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')

  const postCollectionRef = collection(dataBase, 'posts')
  const navigate = useNavigate()

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    })
    navigate('/')
  }

  useEffect(() => {
    if(!isAuth) {
      navigate('/')
    }
  }, [])

  return (
    <div className='create-post-page'>
      <div className='create-post-container'>
        <h1>Create A Post</h1>
        <div className='input-group'>
          <label>Title:</label>
          <input
            placeholder='Title...'
            className='input-title'
            onChange={(event) => {
              setTitle(event.target.value)
            }}/>
        </div>
        <div className='input-group'>
          <label>Post:</label>
          <textarea
            placeholder='Post...'
            className='textarea-post'
            onChange={(event) => {
              setPostText(event.target.value)
          }}/>
        </div>
        <button className='submit-post-button' onClick={createPost}>Submit Post</button>
      </div>
    </div>

  );
};

export default CreatePost;