import './App.scss';
import React, { useState } from 'react';
import useCharacter from '@/hooks/useCharacter';
import ProfileBlock from '@/components/mainprofile/ProfileBlock';
import StatsPage from './pages/statsPage/StatsPage';
import TabSelector from './components/tabSelector/TabSelector';
import InventoryPage from './pages/inventoryPage/InventoryPage';
import SpellPage from './pages/spellPage/SpellPage';

function App() {
  const character = useCharacter();

  const [selectedTab, setSelectedTab] = useState('stats');

  return (
    <div className="App">
      <div className="tab-selector-wrapper">
        <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className="app-wrapper">
        <div className="App-header">
          <h1>Character Sheet</h1>
        </div>
        <div className='App-content'>
          <div className="tab-component">
            {{
              profil: <ProfileBlock character={character} />,
              stats: <StatsPage character={character} />,
              inventory: <InventoryPage title="Inventory" />,
              spellbook: <SpellPage title="Spellbook" />,
              playerNote: <h1>Player Note</h1>
            }[selectedTab]}
          </div>
        </div>
        <div className="App-footer">
          <span>version: 0.1</span>
        </div>
      </div>
    </div>
  );
}

export default App;
