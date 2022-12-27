import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../reduxToolKit/app/hook';
import { addComment } from '../reduxToolKit/actionsCreator/commentsAction';
import TextArea from '../reusableComponents/TextArea';
import Button from '../reusableComponents/Button'

const AddComment = () => {

    const { image, username } = useAppSelector(state => state.commentsSlice.data.currentUser);
    const dispatch = useAppDispatch();

    const [content, setContent] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setContent(e.target.value)
    }

    const addCommentHandler = () =>{
        let newComment = {
            username,
            content,
            image,
        }
        dispatch(addComment(newComment));
        setContent("");
    }

    return(
        <div className={`w-full h-fit mx-auto mt-0 bg-white py-5 rounded-lg shadow-xl shadow-transparent relative`}>
            <TextArea 
                placeholder={'Add a comment...'}  
                content={content} 
                handleChange={onChangeHandler}
            />
            <div className='w-[95%] mx-auto pt-3 flex flex-row justify-between items-center md:items-stretch md:pt-5 md:absolute md:inset-0 md:z-0'>
                <img src={image.png} alt='user avatar' className='w-9 h-9 md:w-12 md:h-12' />
                <Button text={'Send'} content={content} onClickHandler={addCommentHandler} />
            </div>
        </div>
    )
}

export default AddComment;