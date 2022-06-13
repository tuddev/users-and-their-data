import React from 'react';
import { UserDetail, UsersList } from './pages';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UsersList />} />
        <Route path="user-detail/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
