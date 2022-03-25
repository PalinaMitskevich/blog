import React, {useEffect, useState} from "react";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import {dataBase, auth} from "../../firebase-config";
import {collections} from "../../constants";
import "./home.css";

const Home = ({isAuth}) => {
  const postCollectionRef = collection(dataBase, collections.posts)

  const [postLists, setPostLists] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deletePost = async (id) => {
    const postDoc = doc(dataBase, collections.posts, id)
    await deleteDoc(postDoc)
    const data = await getDocs(postCollectionRef)
    setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  return (
    <div className="home-page">
      {postLists.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <div className="post-title">
              <h1>{post.title}</h1>
            </div>
            <div className="delete-post">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button className="delete-post-button" onClick={() => deletePost(post.id)}>
                  &#128465;
                </button>
              )}
            </div>
          </div>
          <div className="post-text-container">{post.postText}</div>
          <h3>@{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;