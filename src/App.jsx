import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { selectUser, login, logout } from './features/userSlice';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser)
      if (authUser) {
        // user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
        
      ) }
      
    </div>
  );
}

export default App;
