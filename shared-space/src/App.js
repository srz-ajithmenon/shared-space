import './App.css';

import {Provider} from 'react-redux'
import store from './redux/store';
import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Login from './Components/Login'
import Home from './Components/Home'
import Drawers from './Components/Drawers'
import Signup from './Components/Signup'
import SelectSlot from './Components/SelectSlot'
import SelectedSlot from './Components/SelectedSlot'
import DatePick from './Components/DatePick';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            
            <div>
              <Drawers />
              <Routes>
                <Route path = "/" element={ <Login /> } />
                <Route path = "/home" element={ <Home /> } />
                <Route path = "/signup" element={ <Signup /> } />
                <Route path = "/book" element={ <DatePick /> } />
                <Route path = "/selectslot" element={ <SelectSlot /> } />
                <Route path = "/booked" element={ <SelectedSlot /> } />
              </Routes>
            </div>
            
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
