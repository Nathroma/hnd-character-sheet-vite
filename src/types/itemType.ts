export type Equipment = {
    id: number;
    name: string;
    action: string;
    quantity: number;
    weight: string;
};

export type Inventory = {
    equipments: Equipment[];
};
