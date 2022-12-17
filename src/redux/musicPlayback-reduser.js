
const PLAYBACK_STOP = 'PLAYBACK_STOP';
const PALYBACK_CONTINUE = 'PALYBACK_CONTINUE';
const TURN_ON_MUSIC = 'TURN_ON_MUSIC';
const SET_PLAYING_LIST = 'SET_PLAYING_LIST';

export const playbackStop = () => ({ type: PLAYBACK_STOP })
export const playbackContinue = () => ({ type: PALYBACK_CONTINUE })
export const turnMusic = (newPlayingItem) => ({ type: TURN_ON_MUSIC, newPlayingItem })
export const setPlayingList = (newPlayingList) => ({ type: SET_PLAYING_LIST, newPlayingList })


let initialState = {
   playingMusicList: [],
   playingItem: null,
   playing: false,
   audio: new Audio(),
}

const musicPlaybackReduser = (state = initialState, action) => {
   switch (action.type) {

      case PLAYBACK_STOP: {
         return { ...state, playing: false }
      }
      case PALYBACK_CONTINUE: {
         return { ...state, playing: true };
      }
      case TURN_ON_MUSIC: {
         return { ...state, playingItem: action.newPlayingItem, audio: new Audio(action.newPlayingItem.src) }
      }
      case SET_PLAYING_LIST: {
         return { ...state, playingMusicList: action.newPlayingList }
      }

      default:
         return state;
   }
}





const listenerNextPlayingItem = (getState, dispatch) => {
   let state = { ...getState(), ...getState().playback }

   let index = state.playingMusicList.indexOf(state.playingItem) + 1;
   let newPlayingItem = state.playingMusicList[index];

   if (newPlayingItem) {
      setPlayingNewItem(dispatch, getState, newPlayingItem)
   }
}

const setPlayingNewItem = (dispatch, getState, item, newPlayingList = null) => {

   let state = { ...getState(), ...getState().playback }
   state.audio.pause();
   dispatch(playbackStop());


   dispatch(turnMusic(item));
   if (newPlayingList) {
      dispatch(setPlayingList(newPlayingList))
   }

   state = { ...getState(), ...getState().playback }
   dispatch(playbackContinue())
   state.audio.play();
   state.audio.onended = () => listenerNextPlayingItem(getState, dispatch)
}


export const setMusicPlayback = (item) => {
   return async (dispatch, getState) => {
      
      let state = { ...getState(), ...getState().music, ...getState().playback }
      
      if (state.playingItem && state.playingItem.id == item.id) {

         if (state.playing) {
            state.audio.pause();
            dispatch(playbackStop());
         }
         else {
            dispatch(playbackContinue());
            state.audio.play()
         }
      }
      else {

         if (state.displayMusicList == state.playingMusicList) {
            setPlayingNewItem(dispatch, getState, item)
         }
         else {
            setPlayingNewItem(dispatch, getState, item, state.displayMusicList)
         }
      }
   }
}


export default musicPlaybackReduser;