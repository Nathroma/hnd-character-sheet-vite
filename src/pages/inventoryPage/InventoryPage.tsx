import React from "react";
import "./InventoryPage.scss";
import InventoryTableBlock from "@/components/inventoryTableBlock/InventoryTableBlock";

type InventoryPageProps = {
    title: string;
};

const InventoryPage = ({ title }: InventoryPageProps) => {
    return (
        <div className="inventory-page">
            <h1>{title}</h1>
            <div className="inventory-content">
                <InventoryTableBlock />
            </div>
        </div>
    );
};

export default InventoryPage;