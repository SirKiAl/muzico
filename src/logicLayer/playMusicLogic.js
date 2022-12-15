

export default class MusicControl {

   constructor(submitFunc, dispatch) {

      this.localState.audio.onended = () =>
         submitFunc(this.nextItemPlay(), dispatch);


      console.log('Init compleate!!');
      window.__localState__ = this.getlocalState;
   }



   localState = {
      musicList: [],
      playingItem: null,
      audio: new Audio()
   }

   getlocalState = () => {
      return this.localState;
   }

   stop = () => {
      this.localState.audio.pause();
   }

   play = () => {
      this.localState.audio.play();
   }

   nextItemPlay = () => {

      this.stop();

      let index = this.localState.musicList.indexOf(this.localState.playingItem) + 1;
      let newPlayingItem = this.localState.musicList[index];

      if (newPlayingItem) {
         this.localState = { ...this.localState, playingItem: newPlayingItem }
         this.localState.audio.src = newPlayingItem.src;

         this.play()
      }

      return newPlayingItem;
   }

   newItemPlay = (state, item) => {
      this.stop();

      this.localState = {
         ...this.localState, musicList: state.itemsMusic,
         playingItem: item
      }
      this.localState.audio.src = item.src;

      this.play();
   }
}


