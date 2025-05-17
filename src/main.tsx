import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './Authroute.tsx'


const firebaseConfig = {
  apiKey: "AIzaSyBHwSiVsKHO8ow5SxqcUaVij_ykl06qsI8",
  authDomain: "authapp-31c57.firebaseapp.com",
  projectId: "authapp-31c57",
  storageBucket: "authapp-31c57.firebasestorage.app",
  messagingSenderId: "336700016494",
  appId: "1:336700016494:web:ca9dfbd04b55090be8637f"
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AuthRoute> <App /> </AuthRoute>} />
        <Route path='/login' element={ <Login />} />
        <Route path='/signup' element={ <Signup />} />
        <Route path='*' element={ <Navigate to='/'/> } />
    </Routes>
    </Router>
  </StrictMode>
)
