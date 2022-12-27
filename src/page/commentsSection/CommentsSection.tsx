import { useState, useEffect } from 'react';
import { useAppSelector } from '../../reduxToolKit/app/hook';

import { CommentsState } from '../../utils/types/types';
import Comments from '../../components/Comments';
import AddComment from '../../components/AddComment';

const CommentsSection = () => {

    const data = useAppSelector(state => state.commentsSlice);

    const [commentsData, setCommentsData] = useState<CommentsState>();

    useEffect(() =>{

        setCommentsData(data)

    }, [data])
    
    return(
        <div className='w-[95%] h-full m-auto py-10 md:w-[90.5%] lg:w-[750px]'>
             {commentsData ? (
                <>
                    {commentsData?.loading === 'pending' && (
                        <p className='w-full h-screen mx-auto flex flex-col justify-center items-center text-dark-blue font-medium text-2xl'>
                            Loading...
                        </p>
                    )}
                    {commentsData?.loading === 'rejected' && (
                        <p className='w-full h-screen mx-auto flex flex-col justify-center items-center text-soft-red font-medium text-2xl'>
                            Please check your internet connection!
                        </p>
                    )}
                    {commentsData?.loading === 'fulfilled' &&  (
                        <>
                            {commentsData.data.comments.length > 0 ? (
                                commentsData.data.comments.map(comment => {
                                    return(
                                        <Comments key={comment.id} comment={comment}/>
                                    ) 
                                })  
                            ) : (
                                <p className='w-full mx-auto mb-6 flex flex-col justify-center items-center text-dark-blue font-medium text-2xl'>
                                    No comments yet...
                                </p>
                            )}
                            <AddComment />
                        </>
                    )}
                </>
            ) : (
                <p className='w-full h-screen mx-auto flex flex-col justify-center items-center text-dark-blue font-medium text-2xl'>
                    Fetching data...
                </p>
            )}
        </div>
    )
}

export default CommentsSection;