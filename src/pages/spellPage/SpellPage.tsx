import React from "react";
import "./SpellPage.scss";
import SpellTableBlock from "@/components/spellTableBlock/SpellTableBlock";
import { Character } from "@/types/characterType";

type SpellPageProps = {
    title: string;
    character: Character;
};

const SpellPage = ({ title }: SpellPageProps) => {
    return (
        <div className="spell-page">
            <h1>{title}</h1>
            <div className="spell-content">
                <SpellTableBlock />
            </div>
        </div>
    );
};

export default SpellPage;