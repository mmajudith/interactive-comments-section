import { v4 as uuidv4 } from "uuid";

import { ImageType, CommentsType } from "../types/types";

export const commentTemp = (
    username: string,
    content: string, 
    image: ImageType, 
    reply: Boolean,
    replyingTo?: string, 
  ) => {
    const date = new Date().getTime();

    return {
            id: uuidv4(),
            content,
            createdAt: date,
            score: 0,
            ...(reply && { replyingTo }),
            user: {
              image: { 
                png: image.png,
                webp: image.webp
              },
              username
            },
            replies: []
    }
}

export const mappedComment = (comment: CommentsType, id: string, newReply: CommentsType) => {
  if(comment.id === id){
      return {...comment, replies: [newReply, ...comment.replies] }
  }

  if(comment.id !== id){
      return {
      ...comment,
      replies: comment?.replies?.map(reply => reply.id === id ? [reply, newReply] : [reply])?.reduce((allReply, reply) => [...allReply, ...reply], [])
      }
  }
  
  return comment;
}