import { v4 as uuidv4 } from "uuid";

import { ImageType } from "../types/types";

export const commentTemp = (username: string, content: string, image: ImageType) =>{
    const date = new Date().getTime();

    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate();
    // let currentDate = `${year}-${month}-${day}`;

    return {
            id: uuidv4(),
            content,
            createdAt: date,
            score: 0,
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

export const replyTemp = (username: string, content: string, replyingTo: string, image: ImageType) => {
  const date = new Date().getTime();

  // let year = date.getFullYear();
  // let month = date.getMonth() + 1;
  // let day = date.getDate();
  // let currentDate = `${year}-${month}-${day}`;

  return {
          id: uuidv4(),
          content,
          createdAt: date,
          score: 0,
          replyingTo,
          user: {
            image: { 
              png: image.png,
              webp: image.webp
            },
            username
          }
    }
}