import React from 'react';
import BasicMapComponent from './components/BasicMapComponent';
import SideDrawer from './components/SideDrawer';
import './App.less';
import Header from './components/Header';
import Player from './components/VideoPlayer';
import StartButton from './components/StartButton';


export const App: React.FC = (): JSX.Element => {
  return (
      <div className = "App">
        <Header />
        <Player />
        <BasicMapComponent />
        <StartButton />
        <SideDrawer />
      </div>
  );
};

export default App;
