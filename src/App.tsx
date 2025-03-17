import './App.scss';
import React from 'react';
import { StatType } from './types/statType';
import { skillNames, SkillType } from './types/skillType';
import { AttributeType } from './types/attributeType';
import StatBlock from './components/mainStats/StatBlock';
import SkillBlock from './components/mainSkill/SkillBlock';
import AttributeBlock from './components/mainAttribute/AttributeBlock';
import useCharacter from './hooks/useCharacter';
import ProfileBlock from './components/mainprofile/ProfileBlock';

function App() {
  const character = useCharacter();

  return (
    <div className="App">
      <div className="wrapper-profile-data">
        <ProfileBlock
          character={character}
        />
      </div>
      <div className="wrapper-all-stats">
        <div className="mainAttribute">
          {Object.values(StatType).map((statType) => (
            <StatBlock
              key={statType}
              statType={statType}
              character={character}
            />
          ))}
        </div>
        <div className="secondarySkill">
          {Object.values(SkillType)
            .sort((a, b) => skillNames[a].localeCompare(skillNames[b]))
            .map((skillType) => (
              <SkillBlock
                key={skillType}
                skillType={skillType}
                character={character}
              />
            ))}
        </div>
        <div className="SecondaryStats">
          {Object.values(AttributeType).map((attributeType) => (
            <AttributeBlock
              key={attributeType}
              attributeType={attributeType}
              character={character}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
