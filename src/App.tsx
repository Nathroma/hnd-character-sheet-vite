import './App.scss';
import React, { useState } from 'react';
import useCharacter from '@/hooks/useCharacter';
import ProfileBlock from '@/components/mainprofile/ProfileBlock';
import StatsPage from './pages/statsPage/StatsPage';
import TabSelector from './components/tabSelector/TabSelector';
import InventoryPage from './pages/inventoryPage/InventoryPage';
import SpellPage from './pages/spellPage/SpellPage';
import PlayerNotePage from './pages/playerNotePage/PlayerNotePage';
import ProfilPage from './pages/profilPage/ProfilPage';

function App() {
  const character = useCharacter();

  const [selectedTab, setSelectedTab] = useState('stats');

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="App-header">
          <h1>Character Sheet</h1>
        </div>
        <div className='App-content'>
          <div className="tab-selector-wrapper">
            <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <div className="tab-component">
            {{
              profil: <ProfilPage character={character} />,
              stats: <StatsPage character={character} />,
              inventory: <InventoryPage title="Inventory" character={character} />,
              spellbook: <SpellPage title="Spellbook" character={character} />,
              playerNote: <PlayerNotePage title="Player Note" character={character} />,
            }[selectedTab]}
          </div>
        </div>
        <div className="App-footer">
          <span>version: 0.2</span>
        </div>
      </div>
    </div>
  );
}

export default App;
