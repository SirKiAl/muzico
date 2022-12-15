
function Search() {
   return (
      <form action="/search" method="get" className="main-header__search search">
         <input className="search__input" autocomplete="off" type="text" name="search" placeholder="Поиск" />
      </form>
   )
}

export default Search;