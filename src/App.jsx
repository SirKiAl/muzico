import './App.scss'
import './Components/assets/css/style.scss'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

import { connect, Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Header />
            <Main />
            
         </div>
      </Provider>
   );
}

export default App;
