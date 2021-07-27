import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/profile/:username' exact component={Profile} />
    </>
  );
}

export default App;
