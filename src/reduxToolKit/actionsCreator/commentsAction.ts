import { createAsyncThunk } from '@reduxjs/toolkit';

import { ImageType, CommentsType } from '../../utils/types/types';
import { commentTemp, mappedComment } from '../../utils/newComment/newComment';
import { data } from '../../data';

//Fetch data action creator
export const getData = createAsyncThunk(
    'comments/getData',
    async () => {
      try{
        let commentsData  = await JSON.parse(localStorage.getItem("comments")!);
        if(!commentsData) {
          commentsData = data
        };
      
        commentsData  = {
          ...commentsData,
          comments: [...commentsData.comments ]
        };
        commentsData.comments.sort((a: CommentsType, b: CommentsType) => b.score - a.score);
        localStorage.setItem("comments",JSON.stringify(commentsData));

        return commentsData;

      }catch(err){
        console.log('err trying to get data from localStorage', err);
      }
    }
);

//Action creator for incrementing scores
export const incrementScore = createAsyncThunk(
  'comments/incrementScore',
  async (id: string, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);
      commentsData.comments.map((comment: CommentsType) =>{
          if(comment.id === id){
            return comment.score = comment.score + 1
          }

          return comment.replies.map(reply => reply.score = reply.id === id ? reply.score + 1: reply.score);
        })

      localStorage.setItem("comments",JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to increment score', err)
    }
  }
);

//Action creator for decrementing scores
export const decrementScore = createAsyncThunk(
  'comments/decrementScore',
  async (id: string, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);
      commentsData.comments.map((comment: CommentsType) =>{
        if(comment.id === id){
          return comment.score = comment.score - 1
        }

        return comment.replies.map(reply => reply.score = reply.id === id ? reply.score - 1: reply.score);
      });

      localStorage.setItem("comments", JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to decrement score', err)
    }
  }
);

//Action creator for deleting comments
export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (id: string, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);

      let newComments = commentsData?.comments?.filter((comment: CommentsType) => comment.id !== id )
      ?.map((comment: CommentsType) =>{
          return {
            ...comment,
            replies: comment?.replies?.filter(reply => reply.id !== id)
          }
      }) 
                  
      commentsData.comments = newComments;
      localStorage.setItem("comments",JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to delete comment', err)
    }
  }
);

//Action creator for updating comments
export const updateComment = createAsyncThunk(
  'comments/updateComment',
  async (update: {id: string, content: string}, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);

      commentsData.comments.map((comment: CommentsType) =>{
        if(comment.id === update.id){
          return comment.content = update.content
        }
        return comment.replies.map(reply => reply.content = reply.id === update.id ? update.content : reply.content);
      });

      localStorage.setItem("comments",JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to update comment', err)
    }
  }
);

//Action creator for adding comment
export const addComment = createAsyncThunk(
  'comments/addComment',
  async (comment: {username: string, content: string, image: ImageType}, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);
      const {username, content, image } = comment;
      const newComment = commentTemp(username, content, image, false)
     
      commentsData  = {
        ...commentsData,
        comments: [...commentsData.comments, newComment]
      };
    
      localStorage.setItem("comments",JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to add a comment', err)
    }
  }
);

//Action creator for replying comments
export const replyComment = createAsyncThunk(
  'comments/replyComment',
  async (reply: {id: string, username: string, content: string, replyingTo: string, image: ImageType}, thunkAPI) => {
    try{
      let commentsData  = await JSON.parse(localStorage.getItem("comments")!);
      const { id, username, content, replyingTo, image } = reply;
      const newReply = commentTemp(username, content, image, true, replyingTo);
      
      commentsData.comments = commentsData.comments.map((comment: CommentsType) => mappedComment(comment, id, newReply));

      localStorage.setItem("comments",JSON.stringify(commentsData));

      return commentsData;

    }catch(err){
      console.log('err trying to reply a comment', err)
    }
  }
);