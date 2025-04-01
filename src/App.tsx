import './App.scss';
import React, { useState } from 'react';
import useCharacter from '@/hooks/useCharacter';
import ProfileBlock from '@/components/mainprofile/ProfileBlock';
import StatsPage from './pages/statsPage/StatsPage';
import TabSelector from './components/tabSelector/TabSelector';

function App() {
  const character = useCharacter();

  const [selectedTab, setSelectedTab] = useState('Profil');

  return (
    <div className="App-wrapper">
      <div className="tab-selector-wrapper">
        <TabSelector selectedTab={selectedTab} setSelectedTab={(tab) => { setSelectedTab(tab) }} />
      </div>
      <div className="App">
        {selectedTab === 'Profil' && <ProfileBlock character={character} />}
        {selectedTab === 'Stats' && <StatsPage character={character} />}
        {selectedTab === 'inventory' && <h1>Inventory</h1>}
        {selectedTab === 'spellbook' && <h1>Spellbook</h1>}
      </div>
    </div>
  );
}

export default App;
