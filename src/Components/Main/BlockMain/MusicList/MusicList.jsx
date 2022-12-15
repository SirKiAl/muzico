import MusicItem from './MusicItem';
import React from 'react';
import { connect } from 'react-redux';
import { requestMusic, setPlay, initMus } from '../../../../redux/music-reduser';

function MusicList(props) {

   let playingItemId;
   if(props.playingItem){
      playingItemId = props.playingItem.id;
   }

   return (
      <div className="main-page__muzic-list muzic-list">
         <div className="muzic-list__title">Главное</div>
         <ul className="muzic-list__items">
            {props.musicItems.map((u) => <MusicItem key={u.id} item={u} playing={(props.playing & u.id == playingItemId)  ? true : false} setPlay={props.setPlay} />)}
         </ul>
      </div>
   )
}

class MusicListContainer extends React.Component {

   componentDidMount() {
      this.props.getMusic();
      this.props.initMus();

      // <button onClick={() => props.getMusic()}>  Load Music </button>
   }


   render() {

      return (
         <MusicList musicItems={this.props.musicItems} playingItem={this.props.playingItem} 
         playing = {this.props.playing} setPlay={this.props.setPlay} />
      )
   }
}


let mapStateToProps = (state) => {
   return {
      musicItems: state.music.itemsMusic,
      playingItem: state.music.playingItem,
      playing: state.music.playing,
   }
}


export default connect(mapStateToProps, { getMusic: requestMusic, setPlay, initMus })(MusicListContainer)