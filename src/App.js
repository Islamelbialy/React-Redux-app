import './App.css';
import { Provider } from 'react-redux';
import { store } from './component/redux/store';
import Cake from './pages/cake';
import Icecream from './pages/icecream';
import CakeHook from './pages/cakeHook';
import IcecreamHook from './pages/icecreamHook';
import CakeAndicecream from './pages/cake&icecream';


function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Cake /> <br/>
        <CakeHook />
        <p>*********************</p>
        <Icecream/><br/>
        <IcecreamHook/>
        <p>*********************</p>
        <CakeAndicecream Cake />
        <CakeAndicecream Icecream />
      </Provider>
    </div>
  );
}

export default App;
