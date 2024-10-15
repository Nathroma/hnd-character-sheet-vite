import "./App.scss";
import React from "react";
import { StatType } from "./types/statType";
import { SkillType } from "./types/skillType";
import { AttributeType } from "./types/attributeType";
import {
  statAssociations,
  SkillAssociations,
  AttributeAssociations,
} from "../configs";

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
              statTitle={statAssociations[statType].name}
              color={statAssociations[statType].color}
            />
          ))}
        </div>
        <div className="secondarySkill">
          {Object.values(SkillType)
            .sort((a, b) =>
              SkillAssociations[a].name.localeCompare(SkillAssociations[b].name)
            )
            .map((skillType) => (
              <SkillBlock
                key={skillType}
                skillName={SkillAssociations[skillType].name}
                attribute={SkillAssociations[skillType].relatedStat}
              />
            ))}
        </div>
        <div className="SecondaryStats">
          {Object.values(AttributeType).map((attributeType) => (
            <AttributeBlock
              key={attributeType}
              attributeTitle={AttributeAssociations[attributeType].name}
              color={AttributeAssociations[attributeType].color}
              imgName={AttributeAssociations[attributeType].imgName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
