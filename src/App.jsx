import { useState } from 'react'
import UserContaxProvider from './Contex/UserContexProv'
import Login from './Component/login';
import Profile from './Component/profile';




function App() {

  return (
    <UserContaxProvider>
     <Login/>
     <Profile/>
    </UserContaxProvider>
  )
}

export default App;
