
import Collage from './Collage/Collage';
import BlockMain from './BlockMain/BlockMain';

function Main() {
   return (

      <main className="main-page" >
         <div className="main-page__container">
            <Collage />
            <BlockMain />
         </div>
      </main>
   )
}

export default Main;