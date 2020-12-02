import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app = action.payload;
    },
    // setChannelName: (state, action) => {
    //   state.channelName = action.payload;
    // }
   
  },
});

export const { setChannelId } = appSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectChannelId = state => state.app.ChannelId;
export const selectChannelName = state => state.app.ChannelName;

export default appSlice.reducer;
