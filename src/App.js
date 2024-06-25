import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Navbar' element={<Navbar />} />
        </Routes>
        </BrowserRouter>

    </>
      );
}
export default App;
