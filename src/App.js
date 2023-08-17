import './App.css';
import Singup from './signup';
import Signin from './signin';
import Welcome from './Welcome';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Singup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="Welcome" element={<Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;
