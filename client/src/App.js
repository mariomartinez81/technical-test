import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/auth/github' exact component={Home} />
      <Route path='/Profile' exact component={Profile} />
    </>
  );
}

export default App;
//`https://api.github.com/users/${username}/repos`
