import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../reduxToolKit/app/hook';
import { replyComment } from '../reduxToolKit/actionsCreator/commentsAction';
import TextArea from './TextArea';
import Button from './Button';

type ReplyCommentProps = {
    id: string
    text: string
    reply?: string
    user: string
}

const ReplyComment = ({ id, text, reply, user }: ReplyCommentProps) => {
    const { image, username } = useAppSelector(state => state.commentsSlice.data.currentUser);
    const dispatch = useAppDispatch();

    const [contentReply, setContentReply] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setContentReply(e.target.value)
    }
  
    const replyCommentHandler = () => {
        let replyingTo = contentReply.includes(`@${user}`) ? `@${user}` : '';
        let content = contentReply;
        content = content.replaceAll(replyingTo, '');
        
        let newReply = {
            id,
            username,
            replyingTo,
            content,
            image
        }
        dispatch(replyComment(newReply));
        setContentReply("");
    }

    return(
        <div className={`w-full h-fit mx-auto mt-2 bg-white py-5 rounded-lg shadow-xl shadow-transparent relative`}>
            <TextArea 
                placeholder={'Reply a comment...'} 
                reply={ reply}
                content={contentReply} 
                handleChange={onChangeHandler}
            />
            <div className='w-[95%] mx-auto pt-3 flex flex-row justify-between items-center md:items-stretch md:pt-5 md:absolute md:inset-0 md:z-0'>
                <img src={image.png} alt='user avatar' className='w-9 h-9 md:w-12 md:h-12' />
                <Button text={text} content={contentReply} onClickHandler={replyCommentHandler}/>
            </div>
        </div>
    )
}

export default ReplyComment;