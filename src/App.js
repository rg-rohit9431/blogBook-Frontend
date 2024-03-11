import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

//pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Dashboard from "./pages/Dashboard"
import Blog from './pages/Blog';




function App() {

  const [login, setLogin] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout login={login} setLogin={setLogin}/>}>
          <Route index element={<Home />} />
          {/* login signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* normal Routes */}
          <Route path="/blog" element={<Blog />} />

          {/* dashborad */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
