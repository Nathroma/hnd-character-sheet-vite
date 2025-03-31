import './App.scss';
import React from 'react';
import { StatType } from './types/statType';
import { skillNames, SkillType } from './types/skillType';
import { DerivedValueType } from './types/derivedValueType';
import StatBlock from './components/mainStats/StatBlock';
import SkillBlock from './components/mainSkill/SkillBlock';
import DerivedValueBlock from './components/mainDerivedValue/DerivedValueBlock';
import useCharacter from './hooks/useCharacter';
import ProfileBlock from './components/mainprofile/ProfileBlock';
import HealthPointBlock from './components/mainHp/hpBlock';
import ArmorClassBlock from './components/mainAc/AcBlock';

function App() {
  const character = useCharacter();

  return (
    <div className="App">
      <div className="wrapper-profile-data">
        <ProfileBlock character={character} />
      </div>
      <div className="wrapper-all-stats">
        <div className="mainAttribute">
          {Object.values(StatType).map((statType) => (
            <StatBlock key={statType} statType={statType} character={character} />
          ))}
        </div>
        <div className="secondarySkill">
          {Object.values(SkillType)
            .sort((a, b) => skillNames[a].localeCompare(skillNames[b]))
            .map((skillType) => (
              <SkillBlock key={skillType} skillType={skillType} character={character} />
            ))}
        </div>
        <div className="additionalValues">
          <div className="derivedValue">
            {Object.values(DerivedValueType).map((attributeType) => (
              <DerivedValueBlock key={attributeType} derivedValueType={attributeType} character={character} />
            ))}
          </div>
          <div className="healthPoint">
            <HealthPointBlock character={character} />
          </div>
          <div className="armorClass">
            <ArmorClassBlock character={character} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
