import { musicAPI } from "../api/api";


const SET_MUSIC_LIST = 'SET_MUSIC_LIST';


export const setMusicList = (musicItems) => ({ type: SET_MUSIC_LIST, musicItems })




let initialState = {
   displayMusicList: [],

}


const musicReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_MUSIC_LIST: {
         return { ...state, displayMusicList: action.musicItems }
      }

      default:
         return state;
   }
}




export const requestMusic = () => {

   return async (dispatch) => {
      let data = await musicAPI.getMusic();
      let musicArr = Object.values(data)
      dispatch(setMusicList(musicArr))
   }
}





export default musicReducer;