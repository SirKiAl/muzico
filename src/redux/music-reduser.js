import { musicAPI } from "../api/api";
import MusicControl from "../logicLayer/playMusicLogic";


const SET_MUSIC = 'SET_MUSIC';
const PLAYBACK_STOP = 'PLAYBACK_STOP';
const PALYBACK_CONTINUE = 'PALYBACK_CONTINUE';
const TURN_ON_MUSIC = 'TURN_ON_MUSIC';

export const setMusic = (musicItems) => ({ type: SET_MUSIC, musicItems })
export const playbackStop = () => ({ type: PLAYBACK_STOP })
export const playbackContinue = () => ({ type: PALYBACK_CONTINUE })
export const turnMusic = (newPlayingItem) => ({ type: TURN_ON_MUSIC, newPlayingItem })




let initialState = {
   itemsMusic: [],
   playingItem: null,
   playing: false,
}


const musicReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_MUSIC: {
         return { ...state, itemsMusic: action.musicItems }
      }
      case PLAYBACK_STOP: {
         return { ...state, playing: false }
      }
      case PALYBACK_CONTINUE: {
         return { ...state, playing: true };
      }
      case TURN_ON_MUSIC: {
         return { ...state, playingItem: action.newPlayingItem, playing: true }
      }

      default:
         return state;
   }
}



// Санка
export const requestMusic = () => {

   return async (dispatch) => {
      let data = await musicAPI.getMusic();
      let musicArr = Object.values(data)
      dispatch(setMusic(musicArr))
   }
}

function listnerNextPlayingItem(newItem, dispatch) {
   console.log('next song play');
   dispatch(turnMusic(newItem));
}


let musControl = '';

export const initMus = () => {
   return async (dispatch) => {
      musControl = new MusicControl(listnerNextPlayingItem, dispatch)
   }
}



export const setPlay = (item) => {
   return async (dispatch, getState) => {
      let state = { ...getState(), ...getState().music }

      if (state.playingItem && state.playingItem.id == item.id) {
         if (state.playing) {
            musControl.stop();
            dispatch(playbackStop(PLAYBACK_STOP));
         }
         else {
            musControl.play();
            dispatch(playbackContinue(PALYBACK_CONTINUE));
         }
      }
      else {
         musControl.stop();
         dispatch(playbackStop(PLAYBACK_STOP));

         musControl.newItemPlay(state, item);
         dispatch(turnMusic(item));
      }
   }
}




export default musicReducer;