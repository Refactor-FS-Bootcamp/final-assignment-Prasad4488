import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen :false,
    selectdMessage:null,
  },
 
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen=true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false
    },

    openMessage: (state,action) => {
      state.selectdMessage=action.payload
    },
    
     },
 
  });

export const { openSendMessage, closeSendMessage ,openMessage} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectdMail = (state) => state.mail.selectdMessage;


export default mailSlice.reducer;
