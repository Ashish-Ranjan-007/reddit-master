import React from 'react';
import {post} from '../../Utils/Posts/postdata';
import "./Posts.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';



function Posts() {

const [like,setLike]= useState(0);
const [dislike,setDislike]= useState(0);

const [likeactive,setLikeactive]= useState(false);
const [dislikeactive,setDislikeactive]= useState(false);



function likefunc(e){
if(likeactive){ 
    document.querySelector(".upvote").classList.remove("upvote-button-stat");
    setLikeactive(false);
    setLike(like-1);
   } else {
    document.querySelector(".upvote").classList.add("upvote-button-stat");
    setLikeactive(true);
    setLike(like+1);
    if(dislikeactive){
        document.querySelector(".downvote").classList.remove("downvote-button-stat");
        setDislikeactive(false);
        setLike(like+1);
        setDislike(dislike-1);
    }
  }
}

function dislikefunc(e){
    if(dislikeactive){ 
        document.querySelector(".downvote").classList.remove("downvote-button-stat");
        setDislikeactive(false);
        setDislike(dislike-1);
       } else {
        document.querySelector(".downvote").classList.add("downvote-button-stat");
        setDislikeactive(true);
        setDislike(dislike+1);
        if(likeactive){
            document.querySelector("").classList.remove("upvote-button-stat");
            setLikeactive(false);
            setLike(like-1);
            setDislike(dislike+1);
        }
      }
    
}


   const postdata = post;



   console.log(postdata)
  return (
    
    <>
      { postdata.map((post,index)=>(
    <div key={index+1}className='card'>
    <div className="name-field">{post.userName}</div>
    <div className="text-field"><p>{post.text}</p></div>
    <div className='interactives'>
        <span className="interactives-item" ><button className={post.userID} onClick={likefunc}>&#10084;{like+post.upvotes}</button></span>
        <span className="interactives-item"><button className={post.userID} onClick={dislikefunc}><span>💔{dislike+post.downvotes}</span></button></span>
    </div>
    </div>
      ))}

    </>
    //
    
    

  )
}

export default Posts