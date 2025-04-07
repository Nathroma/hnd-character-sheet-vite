export type Equipment = {
    id: number;
    name: string;
    action: EquipementAction;
    quantity: number;
    weight: string;
};

export enum EquipementAction {
    ACTION = "Action",
    BONUS_ACTION = "Action Bonus",
    REACTION = "Réaction",
    OTHER = "Autre",
};

export type Inventory = {
    equipments: Equipment[];
};
