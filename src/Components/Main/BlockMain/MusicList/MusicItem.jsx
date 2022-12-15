

function MusicItem(props) {
   if (props.item) {
      let cla = props.playing ? 'muzic-list__item-muzic item-muzic _active' : 'muzic-list__item-muzic item-muzic'
      let fav = props.item.fav ? 'item-muzic__like-btn _like' : 'item-muzic__like-btn '
      return (
         <li id={props.item.id} className={cla}>
            <div className="item-muzic__icon" onClick={() => props.setPlay(props.item)}>
               <picture>
                  <img src={props.item.image} alt="album image" />
               </picture>
               <div className="item-muzic__image-dotted"></div>
            </div>
            <div className="item-muzic__text">
               <div className="item-muzic__name">{props.item.name}</div>
               <a className="item-muzic__author" href={props.item.artistID}>{props.item.musician}</a>
            </div>
            <div className="item-muzic__options">
               <div className="item-muzic__song-time">{(props.item.duration / 60).toFixed(2)}</div>
               <div className={fav}></div>
            </div>
         </li>
      )
   }
}

export default MusicItem;