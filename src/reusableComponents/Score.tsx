import { useAppDispatch } from '../reduxToolKit/app/hook';
import { incrementScore, decrementScore } from '../reduxToolKit/actionsCreator/commentsAction';

import { ReactComponent as PlusIcon } from '../assets/icon-plus.svg';
import { ReactComponent as MinusIcon } from '../assets/icon-minus.svg';

type ScoresProps = {
    score: number
    id: string
}

const Scores = ({ score, id }: ScoresProps) => {
    // console.log(id)
    const dispatch = useAppDispatch();
    
    return(
        <div className='w-32 h-10 md:w-9 md:h-fit flex flex-row md:flex-col justify-around items-center bg-very-light-gray rounded-lg'>
            <div onClick={() => dispatch(incrementScore(id))} className='hover-state'>
                <PlusIcon className='plus' />
            </div>    
            <p className='text-moderate-blue text-sm font-medium md:w-full h-full md:h-[52px] flex flex-col justify-center items-center'>
                {score}
            </p>
            <div onClick={() => dispatch(decrementScore(id))} className='hover-state'>
                <MinusIcon className='minus'/>
            </div>
        </div>
    )
}

export default Scores;