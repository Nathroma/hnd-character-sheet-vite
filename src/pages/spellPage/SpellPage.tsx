import React from "react";
import "./SpellPage.scss";
import SpellTableBlock from "@/components/spellTableBlock/SpellTableBlock";

type SpellPageProps = {
    title: string;
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