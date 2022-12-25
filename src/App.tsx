import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch } from './reduxToolKit/app/hook';
import { getData } from './reduxToolKit/actionsCreator/commentsAction';
import CommentsSection from './page/commentsSection/CommentsSection';

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() =>{
    
    dispatch(getData())

  }, [dispatch]);
  
  return (
    <div className='w-full h-full m-auto'>
       <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <CommentsSection />
    </div>
  );
}

export default App;
