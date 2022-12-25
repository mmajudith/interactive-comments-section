import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { toggleModals } from '../../utils/reducersToggleLogic/ReducersToggleLogic';
import {  getData, incrementScore, 
          decrementScore, deleteComment,
          updateComment, addComment, replyComment } from '../actionsCreator/commentsAction';
import { CommentsState } from '../../utils/types/types';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {} as CommentsState,
  reducers: {
    toggleDeleteModal: (state, action: PayloadAction<string>) => {
        toggleModals(state.data, action.payload, 'delete');
    },
    toggleReplyInput: (state, action: PayloadAction<string>) => {
      toggleModals(state.data, action.payload, 'reply');
    },
    toggleEditInput: (state, action: PayloadAction<string>) => {
      toggleModals(state.data, action.payload, 'edit');
    },
  },
  extraReducers: (builder) => {
    //Get data 
    builder.addCase(getData.pending, (state) =>{
        state.loading = 'pending';
    })
    .addCase(getData.rejected, (state) =>{
        state.loading = 'rejected';
    })
    .addCase(getData.fulfilled, (state, { payload }) =>{
        state.loading = 'fulfilled';
        state.data = payload;
    });

    //Incrementing scores state
    builder.addCase(incrementScore.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });

    //decrementing scores state
    builder.addCase(decrementScore.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });

    //deleting comment
    builder.addCase(deleteComment.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });

    //updating comment
    builder.addCase(updateComment.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });

    //adding comment
    builder.addCase(addComment.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });

    //replying comment
    builder.addCase(replyComment.fulfilled, (state, { payload }) =>{
      state.data = payload;
    });
  },
})

export const { toggleDeleteModal, toggleReplyInput, toggleEditInput } = commentsSlice.actions

export default commentsSlice.reducer