export const SET_RESIZE = 'SET_RESIZE';

const setResize = (state, payload) => ({
  ...state,
  isDesignState: !payload.dismissHistory,
  resize: {
    ...state.resize,
    // width, height, ratioUnlocked (locked by default).
    ...payload,
  },
});

export default setResize;
