export type ImageType = {
    png: string
    webp: string
}

type ProfileType = {
    image: ImageType
    username: string
}

export type CommentsType = {
    id: string
    content: string 
    createdAt: string
    score: number
    replyingTo?: string
    showReply?: Boolean
    isDelete?: Boolean
    isEditing?: Boolean
    user: ProfileType
    replies: {
        id: string
        content: string 
        createdAt: string
        score: number
        replyingTo?: string
        showReply?: Boolean
        isDelete?: Boolean
        isEditing?: Boolean
        user: ProfileType
    }[];          
}

export type DataType = {
    currentUser: ProfileType
    comments: CommentsType[]      
}

export interface CommentsState {
    data: DataType
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}