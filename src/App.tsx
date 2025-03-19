import './App.scss';
import React from 'react';
import { StatType } from './types/statType';
import { skillNames, SkillType } from './types/skillType';
import { AttributeType } from './types/attributeType';
import { ProfileType, ProfileNames } from './types/profileType';

import StatBlock from './components/mainStats/StatBlock';
import SkillBlock from './components/mainSkill/SkillBlock';
import AttributeBlock from './components/mainAttribute/AttributeBlock';
import useCharacter from './hooks/useCharacter';
import ProfileBlock from './components/mainprofile/ProfileBlock';

function App() {
  const { character, setStatValue, setStatMastered, switchSkillProficiencyLevel, setAttributeValue } =
    useCharacter();

  return (
    <div className="App">
      <div className="wrapper-profile-data">
        {Object.values(ProfileType).map((profileType) => (
          <ProfileBlock 
          key={profileType} 
          label={ProfileNames[profileType]} 
          icon={undefined} 
          />
        ))}
      </div>
      <div className="wrapper-all-stats">
        <div className="mainAttribute">
          {Object.values(StatType).map((statType) => (
            <StatBlock
              key={statType}
              statType={statType}
              character={character}
              onStatChange={(value) => setStatValue(statType, value)}
              onMasteryChange={(mastered) => setStatMastered(statType, mastered)}
            />
          ))}
        </div>
        <div className="secondarySkill">
          {Object.values(SkillType)
            .sort((a, b) => skillNames[a].localeCompare(skillNames[b]))
            .map((skillType) => (
              <SkillBlock
                key={skillType}
                character={character}
                skillType={skillType}
                onProficiencyChange={() => switchSkillProficiencyLevel(skillType)}
              />
            ))}
        </div>
        <div className="SecondaryStats">
          {Object.values(AttributeType).map((attributeType) => (
            <AttributeBlock
              key={attributeType}
              character={character}
              attributeType={attributeType}
              onAttributeChange={(attributeValue) => setAttributeValue(attributeType, attributeValue)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
