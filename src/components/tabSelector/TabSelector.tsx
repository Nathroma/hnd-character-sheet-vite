import React from "react";
import "./TabSelector.scss";

const tabs: Array<string> = ["profil", "stats", "inventory", "spellbook"];

type TabSelectorProps = {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
};

const TabSelector = ({ selectedTab, setSelectedTab }: TabSelectorProps) => {
    return (
        <div className="tab-selector">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${selectedTab === tab ? "active" : ""}`}
                    onClick={() => setSelectedTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default TabSelector;