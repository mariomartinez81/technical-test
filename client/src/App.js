import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/auth/github' exact component={Home} />
    </>
  );
}

export default App;
//`https://api.github.com/users/${username}/repos`
