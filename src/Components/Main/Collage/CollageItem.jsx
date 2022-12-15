import image from "./3.png"

function CollageItem() {
   return (
      <div className="collage__item">
            <img src={image} alt="yppsss" />
            <div className="collage__blackout blackout">
               <div className="blackout__text">Музыка - это язык эмоций</div>
               <div className="blackout__autohor">- Иммануил Кант</div>
            </div>
      </div>
   )
}

export default CollageItem;