import { useAppDispatch, useAppSelector } from '../reduxToolKit/app/hook';
import { toggleDeleteModal, toggleReplyInput, toggleEditInput } from '../reduxToolKit/features/commentsReducer';

import  { ReactComponent as ReplyIcon } from '../assets/icon-reply.svg';
import  { ReactComponent as DeleteIcon } from '../assets/icon-delete.svg';
import  { ReactComponent as EditIcon } from '../assets/icon-edit.svg';

type EditReplyDeleteProps = {
    username: string 
    id: string
}

const EditReplyDelete = ({ username, id }: EditReplyDeleteProps) => {

    const { currentUser } = useAppSelector(state => state.commentsSlice.data);
    const dispatch = useAppDispatch();

    return(
        <>
            {currentUser.username === username ? 
                (
                    <div className='w-fit h-fit flex flex-row justify-center items-center'>
                        <div 
                            onClick={() => dispatch(toggleDeleteModal(id))}
                            className='delete-edit-reply'
                        >
                            <DeleteIcon /> 
                            <span className='text-soft-red text-base ml-1 font-medium'>Delete</span>
                        </div>
                        <div
                            onClick={() => dispatch(toggleEditInput(id))}
                            className='delete-edit-reply'
                        >
                            <EditIcon /> 
                            <span className='text-moderate-blue text-base ml-1 font-medium'>Edit</span>
                        </div>
                    </div>
                ) : (
                    <div 
                        onClick={() => dispatch(toggleReplyInput(id))}
                        className='w-fit h-fit delete-edit-reply'
                    >
                        <ReplyIcon /> 
                        <span className='text-moderate-blue text-base ml-1 font-medium'>Reply</span>
                    </div>
                )
            }
        </>
    ) 
}

export default EditReplyDelete;