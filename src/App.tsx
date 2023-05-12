import { useSelector } from 'react-redux';
import Login from './page/Login';
import './App.css';
import store from './redux/store';
import Home from './page/Home';
export type RootState = ReturnType<typeof store.getState>;

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated);
  return (
    <div>
      {isAuthenticated ? <Home/> : <Login />}
    </div>
  );
}

export default App;