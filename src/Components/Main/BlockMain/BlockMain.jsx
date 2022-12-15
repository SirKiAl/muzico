import recom from "./recomendation.png"
import MusicList from './MusicList/MusicList';

function BlockMain() {
   return (
      <div className="main-page__muzic-block">
         <MusicList />
         <div className="main-page__recomendations recomendations">
            <div className="recomendations__item">
                  <img src={recom} alt="" />
            </div>
         </div>
      </div>
   )
}

export default BlockMain;