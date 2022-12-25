import { useState } from 'react';

import { useAppDispatch } from '../reduxToolKit/app/hook';
import { updateComment } from '../reduxToolKit/actionsCreator/commentsAction';
import Button from './Button';

type EachCommentProps = {
    id: string
    content: string
}

const EditComment = ({id, content }: EachCommentProps) => {

    const dispatch = useAppDispatch();
    const [commentContent, setCommentContent] = useState(content);

    const updateHandler = () =>{
        let update = {
            id,
            content: commentContent
        }
        dispatch(updateComment(update));
    }

    return(
        <div className='w-full mt-4 relative z-10'>
            <textarea 
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)} 
                className='w-full h-20 pl-4 pt-3 resize-none overflow-hidden border-light-gray border-[2px] rounded-md 
                        outline-none focus:border-moderate-blue focus:border-[1px] caret-moderate-blue'
            >
            </textarea>

            <div className='w-full flex flex-col items-end mt-1'>
                <Button text={'Update'} onClickHandler={updateHandler} content={commentContent}/>
            </div>
        </div>
    )
}

export default EditComment;