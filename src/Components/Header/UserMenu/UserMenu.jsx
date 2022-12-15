
function UserActionMenu() {
   return (
      <div className="main-header__user user">
         <button className="user__icon">US name</button>
         <div className="user__dropdown-content">
            <a href="#">Настройки</a>
            <a href="#">Добавить трек</a>
            <a href="#">Выход</a>
         </div>
      </div>
   )
}

export default UserActionMenu;