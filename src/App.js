import './App.css';
import { Provider } from 'react-redux';
import { store } from './component/redux/store';
import CakeHook from './component/cake/cakeHook';
import Icecream from './component/iceCream/icecream';
import IcecreamHook from './component/iceCream/icecreamHook';
import Cake from './component/cake/cake';


function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Cake /> <br/>
        <CakeHook />
        <p>*********************</p>
        <Icecream/><br/>
        <IcecreamHook/>
      </Provider>
    </div>
  );
}

export default App;
