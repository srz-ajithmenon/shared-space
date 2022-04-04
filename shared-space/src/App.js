import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux'
import store from './redux/store';
import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Login from './Components/Login'
import Signup from './Components/Signup'
import SelectSlot from './Components/SelectSlot'
import DatePick from './Components/DatePick';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            
            <div>
              <Routes>
                <Route path = "/" element={ <Login /> } />
                <Route path = "/signup" element={ <Signup /> } />
                <Route path = "/home" element={ <DatePick /> } />
                <Route path = "/selectslot" element={ <SelectSlot /> } />
              </Routes>
            </div>
            
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
