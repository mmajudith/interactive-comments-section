import { v4 as uuidv4 } from 'uuid';

export const data = {
    currentUser: {
      image: { 
        png: "/image-juliusomo.png",
        webp: "/image-juliusomo.webp"
      },
      username: "juliusomo"
    },
    comments: [
      {
        id: uuidv4(),
        content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "2022-11-1",
        score: 12,
        user: {
          image: { 
            png: "/image-amyrobson.png",
            webp: "/image-amyrobson.webp"
          },
          username: "amyrobson"
        },
        replies: []
      },
      {
        id: uuidv4(),
        content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2022-11-19",
        score: 5,
        user: {
          image: { 
            png: "/image-maxblagun.png",
            webp: "/image-maxblagun.webp"
          },
          username: "maxblagun"
        },
        replies: [
          {
            id: uuidv4(),
            content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "2022-11-28",
            score: 4,
            replyingTo: "@maxblagun",
            user: {
              image: { 
                png: "/image-ramsesmiron.png",
                webp: "/image-ramsesmiron.webp"
              },
              username: "ramsesmiron"
            }
          },
          {
            id: uuidv4(),
            content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2022-12-2",
            score: 2,
            replyingTo: "@ramsesmiron",
            user: {
              image: { 
                png: "/image-juliusomo.png",
                webp: "/image-juliusomo.webp"
              },
              username: "juliusomo"
            }
          }
        ]
      }
    ]
  }