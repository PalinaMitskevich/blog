import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { dataBase, auth } from "../../firebase-config";
import { collections, paths } from "../../constants";
import "./createPost.css";

const CreatePost = ({ isAuth }) => {
  const navigate = useNavigate()
  const postCollectionRef = collection(dataBase, collections.posts)

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

  useEffect(() => {
    if(!isAuth) {
      navigate(paths.HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    })
    navigate(paths.HOME)
  }

  return (
    <div className="create-post-page">
      <div className="create-post-container">
        <h1>Create A Post</h1>
        <div className="input-group">
          <label>Title:</label>
          <input
            placeholder="Title..."
            className="input-title"
            onChange={(event) => {
              setTitle(event.target.value)
            }}/>
        </div>
        <div className="input-group">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            className="textarea-post"
            onChange={(event) => {
              setPostText(event.target.value)
          }}/>
        </div>
        <button className="submit-post-button" onClick={createPost}>Submit Post</button>
      </div>
    </div>

  );
};

export default CreatePost;