import { CommentsType } from '../utils/types/types';
import { getTimeStamp } from '../utils/timeStampGenerator/timeStampGenerator';

import Scores from '../reusableComponents/Score';
import EachComment from '../reusableComponents/EachComment';
import EditReplyDelete from '../reusableComponents/EditReplyDelete';
import DeleteModal from '../reusableComponents/DeleteModal';
import ReplyComment from '../reusableComponents/ReplyComment';

type CommentProps = {
    comment: CommentsType
}

const Comments = ({ comment }: CommentProps) => {
    const {id, content, createdAt, score, user, replies} = comment;
    const createdTime = getTimeStamp(createdAt);
    const { png } = user.image;

    return(
        <div className='w-full h-auto mx-auto flex flex-col gap-y-6'>
            <div className=''>
                <div className='comments-wrapper shadow-xl shadow-transparent'>
                    <EachComment 
                        id={id}
                        img={png}
                        username={user?.username}
                        createdAt={createdTime} 
                        content={content}
                        isEditing={comment?.isEditing}
                    />

                    <div className='scores-del-wrapper'>
                        <Scores score={score} id={id}/>
                        <EditReplyDelete username={user?.username} id={id}/>
                    </div>

                </div>

                {comment?.showReply && (<ReplyComment id={id} text={'Reply'} user={user?.username}/>)}
                {comment?.isDelete && (<DeleteModal id={id}/>)}

            </div>

            <div className='w-full md:w-[95%] h-auto mb-5 pl-2 xs:pl-4 md:pl-9 flex flex-col gap-y-6 self-end border-l-light-gray border-l-[2px]'>
            {replies.length ? (
                    replies.map(reply =>{
                        let createdAt = getTimeStamp(reply.createdAt);
                        let { png } = reply.user.image
                        return (
                            <div key={reply.id}>
                                <div className='comments-wrapper shadow-xl shadow-transparent'>
                                    <EachComment 
                                        id={reply.id}
                                        img={png}
                                        username={reply.user?.username}
                                        createdAt={createdAt}
                                        content={reply.content}
                                        replyingTo={reply.replyingTo} 
                                        isEditing={reply?.isEditing}
                                    />

                                    <div className='scores-del-wrapper'>
                                        <Scores score={reply.score} id={reply.id}/>
                                        <EditReplyDelete username={reply.user.username} id={reply.id}/>
                                    </div> 

                                </div>

                                {reply?.showReply && (<ReplyComment id={reply.id} text={'Reply'} reply={'reply'} user={reply.user.username}/>)}
                                {reply?.isDelete && (<DeleteModal id={reply.id}/>)}

                            </div>
                        )
                    })) : ( 
                        null 
                )}
            </div>
        </div>
    )
}

export default Comments;