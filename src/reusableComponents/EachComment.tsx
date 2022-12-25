import { useAppSelector } from '../reduxToolKit/app/hook';
import EditComment from './EditComment';

type EachCommentProps = {
    id: string
    img: string
    username: string
    createdAt: string
    content:string
    replyingTo?:string
    isEditing?: Boolean 
}

const EachComment = ({id, img, username, createdAt, content, replyingTo, isEditing}: EachCommentProps) =>{

    const { currentUser } = useAppSelector(state => state.commentsSlice.data);

    return(
        <div className='w-[95%] mx-auto text-base text-grayish-blue pl-0 md:pl-14'>
            <div className='flex flex-row items-center'>
                <img src={img} alt='user avatar' className='w-9 h-9 md:w-12 md:h-12'/>
                <p className='text-dark-blue font-bold mx-2 xs:mx-4 h-5 flex flex-row justify-center items-center'>
                    {username}
                    {currentUser.username === username && (
                        <span className='font-normal text-white bg-moderate-blue text-center
                            text-[11px] ml-1 xs:ml-2 inline-block w-[30px] h-full rounded-sm'
                            >
                            You
                        </span>
                    )}
                </p>
                <p className=''>{createdAt}</p>
            </div>
           
            {currentUser.username === username ? (
                isEditing ? (
                    <EditComment id={id} content={content}/>
                ) : (
                    <p className='mt-5 break-words'>
                        {replyingTo && (<span className='text-moderate-blue font-bold'>{replyingTo}</span>)}
                        {" "}
                        {content}
                    </p>
                )
            ) : (
                <p className='mt-5 break-words'>
                    {replyingTo && (<span className='text-moderate-blue font-bold'>{replyingTo}</span>)}
                    {" "}
                    {content}
                </p>
            )}
        </div>
    )
}

export default EachComment;