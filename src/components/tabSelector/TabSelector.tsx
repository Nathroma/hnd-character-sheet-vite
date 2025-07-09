import { tabSelectorIcons, tabSelectorTitles, TabSelectorType } from "@/types/tabSelectorType";
import cx from 'classnames';
import React from "react";
import "./TabSelector.scss";

const tabs: Array<TabSelectorType> = Object.values(TabSelectorType);

type TabSelectorProps = {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
};

const TabSelector = ({ selectedTab, setSelectedTab }: TabSelectorProps) => {
    return (
        <div className={cx('tab-selector')}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={cx('tab-button', { 'active': selectedTab === tab })}
                    onClick={() => setSelectedTab(tab)}>
                    <span>{tabSelectorTitles[tab]}</span>
                    <img src={`/assets/icons/tabSelectorIcons/${tabSelectorIcons[tab]}`} alt={tabSelectorIcons[tab]} className={cx('tab-icon')} />
                </button>
            ))}
        </div>
    );
}

export default TabSelector;