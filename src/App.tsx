import "./App.scss";
import React from "react";
import { statColors, statNames, StatType } from "./types/statType";
import { skillAttributes, skillNames, SkillType } from "./types/skillType";
import { attributeColors, attributeImgNames, attributeTitles, AttributeType } from "./types/attributeType";

import StatBlock from "./components/mainStats/StatBlock";
import SkillBlock from "./components/mainSkill/SkillBlock";
import AttributeBlock from "./components/mainAttribute/AttributeBlock";
// import useCharacter from "./hooks/useCharacter";

function App() {
  return (
    <div className="App">
      <div className="wapper-all-stats">
        <div className="mainAttribute">
          {Object.values(StatType).map((statType) => (
            <StatBlock
              key={statType}
              statTitle={statNames[statType]}
              color={statColors[statType]}
            />
          ))}
        </div>
        <div className="secondarySkill">
          {Object.values(SkillType)
            .sort((a, b) =>
              skillNames[a].localeCompare(skillNames[b])
            )
            .map((skillType) => (
              <SkillBlock
                key={skillType}
                skillName={skillNames[skillType]}
                attribute={skillAttributes[skillType]}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
