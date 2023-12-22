import { toast } from 'react-toastify';

import { useAppDispatch } from '../reduxToolKit/app/hook';
import { toggleDeleteModal } from '../reduxToolKit/features/commentsReducer';
import { deleteComment } from '../reduxToolKit/actionsCreator/commentsAction';

type DeleteCommentProps = {
    id: string
}

const DeleteComment = ({id}: DeleteCommentProps) => {

    const dispatch = useAppDispatch();

    const deleteCommentHandler = (id: string) => {
        dispatch(deleteComment(id))
        dispatch(toggleDeleteModal(id));
        toast.success('Comment successfully deleted!')
    }

    return(
        <div className='w-screen h-screen bg-black-opacity fixed inset-0 z-20'>
            <div className='w-full h-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-[90%] sm:w-[380px] h-fit mx-auto bg-white rounded-lg'>
                    <p className='w-[88%] mx-auto my-5 text-dark-blue font-semibold text-lg'>
                        Delete comment
                    </p>
                    <div className='w-[88%] mx-auto'>
                        <p className='w-11/12 text-sm text-grayish-blue'>
                            Are you sure you want to delete this comment?
                            This will remove the comment and can't be undone.
                        </p>
                    </div>
                    <div className='w-[88%] mx-auto my-5 flex flex-row justify-between items-center'>
                        <p onClick={() => dispatch(toggleDeleteModal(id))} 
                            className='cursor-pointer w-[45%] h-10 bg-grayish-blue text-white rounded-lg text-base
                                flex flex-col justify-center items-center'
                        >
                            No, Cancel
                        </p>
                        <p onClick={() => deleteCommentHandler(id)}
                            className='cursor-pointer w-[45%] h-10 bg-soft-red text-white rounded-lg text-base
                            flex flex-col justify-center items-center'
                        >
                            Yes, Delete
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteComment;