import React from "react";
import "./TabSelector.scss";
import { tabSelectorIcons, tabSelectorTitles, TabSelectorType } from "@/types/tabSelectorType";

const tabs: Array<TabSelectorType> = Object.values(TabSelectorType);
const imgPath = "./src/assets/icons/tabSelectorIcons/";

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
                    <span>{tabSelectorTitles[tab]}</span>
                    <img src={imgPath + tabSelectorIcons[tab]} alt={tabSelectorIcons[tab]} className="tab-icon" />
                </button>
            ))}
        </div>
    );
}

export default TabSelector;