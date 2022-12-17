import MusicItem from './MusicItem';
import React from 'react';
import { connect } from 'react-redux';
import { requestMusic } from '../../../../redux/music-reduser';
import { setMusicPlayback } from '../../../../redux/musicPlayback-reduser';

function MusicList(props) {

   let playingItemId;
   if (props.playingItem) {
      playingItemId = props.playingItem.id;
   }

   return (
      <div className="main-page__muzic-list muzic-list">
         <div className="muzic-list__title">Главное</div>
         <ul className="muzic-list__items">
            {props.musicItems.map((u) => <MusicItem key={u.id} item={u} playing={(props.playing & u.id == playingItemId) ? true : false} setPlay={props.setPlay} />)}
         </ul>
      </div>
   )
}

class MusicListContainer extends React.Component {

   componentDidMount() {
      this.props.getMusic();

      // <button onClick={() => props.getMusic()}>  Load Music </button>
   }


   render() {

      return (
         <MusicList musicItems={this.props.musicItems} playingItem={this.props.playingItem}
            playing={this.props.playing} setPlay={this.props.setMusicPlayback} />
      )
   }
}


let mapStateToProps = (state) => {
   return {
      musicItems: state.music.displayMusicList,
      playingItem: state.playback.playingItem,
      playing: state.playback.playing,
   }
}


export default connect(mapStateToProps, { getMusic: requestMusic, setMusicPlayback })(MusicListContainer)