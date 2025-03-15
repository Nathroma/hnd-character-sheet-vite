import "./App.scss";
import React from "react";
import { statColors, statNames, StatType } from "./types/statType";
import { ProficiencyLevel, skillAttributes, skillNames, SkillType } from "./types/skillType";
import {
  attributeColors,
  attributeImgNames,
  attributeTitles,
  AttributeType,
} from "./types/attributeType";
import { ProfileType, ProfileNames } from "./types/profileType";

import StatBlock from "./components/mainStats/StatBlock";
import SkillBlock from "./components/mainSkill/SkillBlock";
import AttributeBlock from "./components/mainAttribute/AttributeBlock";
import useCharacter from "./hooks/useCharacter";
import ProfileBlock from "./components/mainprofile/ProfileBlock";

function App() {

  const {
    character,
    setStatValue,
    setStatMastered,
    switchSkillProficiencyLevel,
    setAttributeValue,
  } = useCharacter();  

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
              statTitle={statNames[statType]}
              color={statColors[statType]}
              imgName={statType}
              stat={character.stats[statType]}
              proficiencyBonus={character.attributes.proficiency.value}
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
                skillName={skillNames[skillType]}
                attribute={skillAttributes[skillType]}
                stat={character.stats[skillAttributes[skillType]]}
                proficiencyLevel={character.skills[skillType].proficiencyLevel ?? ProficiencyLevel.default}
                proficiencyBonus={character.attributes.proficiency.value}
                onProficiencyChange={() => switchSkillProficiencyLevel(skillType)}
              />
            ))}
        </div>
        <div className="SecondaryStats">
          {Object.values(AttributeType).map((attributeType) => (
            <AttributeBlock
              key={attributeType}
              attributeTitle={attributeTitles[attributeType]}
              color={attributeColors[attributeType]}
              imgName={attributeImgNames[attributeType]} 
              attributeValue={character.attributes[attributeType].value} 
              onAttributeChange={(attributeValue) => setAttributeValue(attributeType, attributeValue)}         
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
