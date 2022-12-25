import { DataType } from "../types/types"

export const toggleModals = (state: DataType, action: string, isTrue: string) =>{
    state.comments.forEach(comment =>{
        if(isTrue === 'reply'){
            comment.showReply = comment.id === action && !comment.showReply;
            comment.replies.forEach(reply => reply.showReply = reply.id === action && !reply.showReply);
        }

        if(isTrue === 'delete'){
            comment.isDelete = comment.id === action && !comment.isDelete;
            comment.replies.forEach(reply => reply.isDelete = reply.id === action && !reply.isDelete);
        }

        if(isTrue === 'edit'){
            comment.isEditing = comment.id === action && !comment.isEditing;
            comment.replies.forEach(reply => reply.isEditing = reply.id === action && !reply.isEditing);
        }   
    });
}