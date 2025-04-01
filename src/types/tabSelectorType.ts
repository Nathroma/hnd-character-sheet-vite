export enum TabSelectorType {
    profile = 'profil',
    stats = 'stats',
    inventory = 'inventory',
    spellbook = 'spellbook',
    playerNote = 'playerNote',
}

export const tabSelectorTitles: Record<TabSelectorType, string> = {
    [TabSelectorType.profile]: 'Profil',
    [TabSelectorType.stats]: 'Stats',
    [TabSelectorType.inventory]: 'Inventaire',
    [TabSelectorType.spellbook]: 'Grimoire',
    [TabSelectorType.playerNote]: 'Note'
};

export const tabSelectorIcons: Record<TabSelectorType, string> = {
    [TabSelectorType.profile]: 'profilIcon.svg',
    [TabSelectorType.stats]: 'statsIcon.svg',
    [TabSelectorType.inventory]: 'inventoryIcon.svg',
    [TabSelectorType.spellbook]: 'spellbookIcon.svg',
    [TabSelectorType.playerNote]: 'playerNote.svg'
};
