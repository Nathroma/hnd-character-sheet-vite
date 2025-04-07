import React from "react";
import "./InventoryPage.scss";
import InventoryTableBlock from "@/components/inventoryTableBlock/InventoryTableBlock";
import { Character } from "@/types/characterType";

type InventoryPageProps = {
    title: string;
    character: Character;
};

const InventoryPage = ({ title, character }: InventoryPageProps) => {
    return (
        <div className="inventory-page">
            <h1>{title}</h1>
            <div className="inventory-content">
                <InventoryTableBlock character={character} />
            </div>
        </div>
    );
};

export default InventoryPage;