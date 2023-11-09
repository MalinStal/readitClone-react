import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePosts } from "../api/fetch";
import { getAllComments } from "../api/fetch";
import { AsideLeft } from "../components/asideleft";
import { AsideRight } from "../components/asideright";
import { useRecoilState } from "recoil";
import {
  postState,
  allDatasState,
  commentState,
 
  likePostState,
} from "../states/atoms";
import "./pages.css";
import { AddComment } from "../components/commetsAdd";
import { ArrowFatDown, ArrowFatUp } from "@phosphor-icons/react";


export function OnePost() {
  const { id, firstName, lastName, index } = useParams();
  const [onePost, setOnePost] = useState({});
  const [allComments, setAllComments] = useRecoilState(commentState);

  const [likes, setLikes] = useRecoilState(likePostState);

  const [allData, setAllData] = useRecoilState(allDatasState);
  const [isClicked, setIsClicked] = useState(false);

  const handelClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (id != 151) {
      getOnePosts({ id }).then((result) => setOnePost(result));
    }
  }, [id]);


  useEffect(() => {
    if (onePost.reactions !== undefined) {
      setLikes(onePost.reactions);
    }
  }, [onePost]);

  //kopplad till post// Uppdaterar bara nya posts likes, då vi fetchar onePost så resettas liksen varje gång.
  useEffect(() => {
    if (likes !== undefined) {
      const tempCopy = [...allData];
      tempCopy[index] = {
        ...tempCopy[index],
        reactions: likes,
      };
      setAllData(tempCopy);
    }
  }, [likes, index]);


  const increase = () => {
    setLikes((like) => like + 1);
  };

  const decrease = () => {
    setLikes((like) => like - 1);
  };

  const likeComment = (comment) => {
    //om kommentaren matchar någonting i listan så kommer den valda kommentaren kopieras och lägga till + 1 på likes
   setAllComments(allComments.map((all) =>{
   
     if( all === comment){
        return {...comment, like: comment.like + 1}}
        return all;
    
   }))
 
 }

 const disLikeComment = (comment) => {
  //om kommentaren matchar någonting i listan så kommer den valda kommentaren kopieras och lägga till + 1 på likes
    setAllComments(allComments.map((all) =>{
 
   if( all === comment){
      return {...comment, like: comment.like - 1}}
      return all;
  
 }))
   }


 if (id == 151) {
    return (
      <>
        <div className="Post-container">
          <div className="Mid-Post-container">
            <li
              style={{
                borderBottom: "1px solid black",
                listStyle: "none",
                minWidth: "110vh",
              }}
            >
              <h4>by {firstName + " " + lastName}</h4>

              <h1>Title: {allData[index]?.title}</h1>
              <main>Body: {allData[index]?.body}</main>

              <div className="Reaction-container">
                <button onClick={increase}>
                  <ArrowFatUp size={30} />
                </button>
                <span>{likes}</span>
                <button onClick={decrease}>
                  <ArrowFatDown size={30} />
                </button>
              </div>
              <h4>
                Tags:{" "}
                {Array.isArray(allData[index]?.tags)
                  ? allData[index].tags.map((tag) => tag + " / ")
                  : "Life / History / Random"}
              </h4>
            </li>

            <AddComment />
            <ul style={{ listStyle: "none" }}>
              {allComments.map((comment, index) => (
                <li key={index} className="Comment-container">
                  <h4 style={{ fontWeight: "1200", fontSize: "larger" }}>
                    User: {comment.user?.username}
                  </h4>
                  <h5>Comment: {comment.body}</h5>
                  <div className="Reaction-container">
                    <button >
                      <ArrowFatUp size={25} />
                    </button>
                    <span></span>
                    <button >
                      <ArrowFatDown size={25} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Post-container">
          <div className="Mid-Post-container">
            <li style={{ borderBottom: "1px solid black", listStyle: "none" }}>
              <h4>by {firstName + " " + lastName}</h4>
              <h1>{onePost.title}</h1>
              <main>{onePost.body}</main>

              <div className="Reaction-container">
                <button
                  className={`like-btn-positive ${isClicked ? "grow-btn" : ""}`}
                  onClick={() => {
                    increase();
                    handelClick();
                  }}
                >
                  <ArrowFatUp size={30} style={{ color: "green" }} />
                </button>
                <span>{likes}</span>
                <button
                  className={`like-btn-negative ${isClicked ? "grow-btn" : ""}`}
                  onClick={() => {
                    decrease();
                    handelClick();
                  }}
                >
                  <ArrowFatDown size={30} style={{ color: "red" }} />
                </button>
              </div>
              <h4>
                Tags:{" "}
                {Array.isArray(onePost.tags)
                  ? onePost.tags.map((tag) => tag + " / ")
                  : "Life / History / Random"}
              </h4>
            </li>

            <AddComment />
           <ul>
              {allComments.map((comment, index) => (
                <li key={index} className="Comment-container">
                  <h4 style={{ fontWeight: "1200", fontSize: "larger" }}>
                    User: {comment && comment.user?.username}
                  </h4>
                  <h5>Comment: {comment && comment.body}</h5>
                  <div className="Reaction-container">
                    <button><ArrowFatUp size={25} onClick={() => likeComment(comment)} /></button>
    
                    <span>{comment.like}</span>
                    <button>
                      <ArrowFatDown size={25} onClick={() => disLikeComment(comment)}/>
                    </button>
                      
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
