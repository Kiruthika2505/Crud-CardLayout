import 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RegistrationForm} from './Components/RegistrationForm';
import { LoginForm } from './Components/LoginForm';
import { Dashboard } from './Components/Dashboard';
import {Update} from './Components/Update';

function App() {
  return (
    <div>
          <BrowserRouter>
            <Routes>
              
               <Route path='/' element={<RegistrationForm/>}/>
               <Route path='/LoginForm' element={<LoginForm/>}/>
               <Route path='/Dashboard' element={<Dashboard/>}/>
               <Route path="/Update/:id" element={<Update/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
