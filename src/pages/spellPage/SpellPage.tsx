import SpellTableBlock from "@/components/spellTableBlock/SpellTableBlock";
import { Character } from "@/types/characterType";
import cx from 'classnames';
import React from "react";
import "./SpellPage.scss";

type SpellPageProps = {
    title: string;
    character: Character;
};

const SpellPage = ({ title, character }: SpellPageProps) => {
    return (
        <div className={cx('spell-page')}>
            <h1>{title}</h1>
            <div className={cx('spell-content')}>
                <SpellTableBlock character={character} />
            </div>
        </div>
    );
};

export default SpellPage;