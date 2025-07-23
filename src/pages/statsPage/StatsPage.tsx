import { HealthPointBlock } from '@/components/hpBlock/HealthPointBlock';
import ArmorClassBlock from '@/components/mainAc/AcBlock';
import DerivedValueBlock from '@/components/mainDerivedValue/DerivedValueBlock';
import SkillBlock from '@/components/mainSkill/SkillBlock';
import StatBlock from '@/components/mainStats/StatBlock';
import { Character } from '@/types/characterType';
import { DerivedValueType } from '@/types/derivedValueType';
import { skillNames, SkillType } from '@/types/skillType';
import { StatType } from '@/types/statType';
import cx from 'classnames';
import React from 'react';
import './StatsPage.scss';

type StatPageProps = {
    character: Character;
};

const StatsPage = ({ character }: StatPageProps) => {
    return (
        <div className={cx('wrapper-all-stats')}>
            <div className={cx('mainAttribute')}>
                {Object.values(StatType).map((statType) => (
                    <StatBlock key={statType} statType={statType} character={character} />
                ))}
            </div>
            <div className={cx('secondarySkill')}>
                {Object.values(SkillType)
                    .sort((a, b) => skillNames[a].localeCompare(skillNames[b]))
                    .map((skillType) => (
                        <SkillBlock key={skillType} skillType={skillType} character={character} />
                    ))}
            </div>
            <div className={cx('additionalValues')}>
                <div className={cx('derivedValue')}>
                    {Object.values(DerivedValueType).map((attributeType) => (
                        <DerivedValueBlock key={attributeType} derivedValueType={attributeType} character={character} />
                    ))}
                </div>
                <div className={cx('healthPoint')}>
                    <HealthPointBlock character={character} />
                </div>
                <div className={cx('armorClass')}>
                    <ArmorClassBlock character={character} />
                </div>
            </div>
        </div>
    );
}

export default StatsPage;