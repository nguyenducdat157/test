import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/config.js';

export const getListMessage = createAsyncThunk('chat/get-list-message', async (id) => {
  try {
    console.log('res: ', await axiosInstance.get(`/api/chat/get-list-message/${id}`));
    return await axiosInstance.get(`/api/chat/get-list-message/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const addMessage = createAsyncThunk('chat/get-list-message', async (body) => {
  try {
    return await axiosInstance.post(`/api/chat/inbox/`, body);
  } catch (error) {
    console.log(error);
  }
});

export const getRooms = createAsyncThunk('chat/get-rooms', async () => {
  try {
    return await axiosInstance.get(`/api/chat/get-rooms`);
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  loading: false,
  error: '',
  listMessage: { code: 0, data: {} },
  rooms: { code: 0, data: {} },
  countNewMess: 0,
  idFriend: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    updateCountMess(state, action) {
      const count = action.payload;
      if (count === 0) state.countNewMess = 0;
      else state.countNewMess = state.countNewMess + 1;
    },
    setIdFriend(state, action) {
      state.idFriend = action.payload;
    },
  },
  extraReducers: {
    [`${getListMessage.pending}`]: (state) => {
      state.loading = true;
    },
    [`${getListMessage.rejected}`]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [`${getListMessage.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.listMessage = action.payload;
    },

    // get rooms
    [`${getRooms.pending}`]: (state) => {
      state.loading = true;
    },
    [`${getRooms.rejected}`]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [`${getRooms.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
    },
  },
});
export const { updateCountMess, setIdFriend } = chatSlice.actions;
export const { reducer: chatReducer } = chatSlice;
export default chatReducer;
