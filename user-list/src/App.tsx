import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import NewUser from './pages/NewUser';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewUser />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;