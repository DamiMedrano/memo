import React from 'react';
import { Routes, Route } from 'react-router-dom';

//screens
import Menu from '../Screens/Menu/Menu';
import Game from '../Screens/Game/Game';
import LeaderBoard from '../Screens/LeaderBoard';

const ScreenManager = () => {
  return (
    <div>
      <Routes>
        <Route path='/Game' element={<Game />} />
        <Route path='/' element={<Menu />} />
        <Route path='/Leaderboard' element={<LeaderBoard />} />
      </Routes>
    </div>
  );
};

export default ScreenManager;
