
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './Pages/Dashboard';

import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Auth from './Components/Auth';


function App() {
  return (
    <div>
   <Routes>
    {/* Logininn vendi ulla view aan nammal create chheyunnath,aa same sadanathine kurachkoodi features additionally add cheythann register undakunnath(like Name of the user).so same content aan randilum.athukond nammal Auth enna component(i.e a part of webpage not a page like Login/Register) create cheyunnu */}
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>
    {/*Since Register page contains some extra features when compared to login page we should pass the path of Register page ('/register') as a props into Auth component i.e <Auth register/>.Since when user redirects to the register path,the register props is also passed with it. */}
    {/* <Auth register/> which implies that register is being set to true.i.e passing a props to a component selector without assigning any value to it,it means that it's value is boolean and being set to true initially.So, when Auth receives the prop register, it will have the value true since it's being passed down explicitly in this manner. In the component itself, it checks whether register is truthy or falsy with the ternary expression*/}
    {/* It can be read as "if register is truthy, assign true to isRegisterForm; otherwise, assign false". Since register is explicitly passed as <Auth register/>, it will be truthy, and isRegisterForm will be set to true.i.e whenever and only when user follows /register path,register props passed to Auth component and isRegisterForm becomes true*/}
    {/* We can also use any other name as props+ (eg: Register) instead of register */}
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/projects' element={<Projects/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
