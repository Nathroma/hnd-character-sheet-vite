import InventoryTableBlock from "@/components/inventoryTableBlock/InventoryTableBlock";
import { Character } from "@/types/characterType";
import cx from 'classnames';
import React from "react";
import "./InventoryPage.scss";

type InventoryPageProps = {
    title: string;
    character: Character;
};

const InventoryPage = ({ title, character }: InventoryPageProps) => {
    return (
        <div className={cx('inventory-page')}>
            <h1>{title}</h1>
            <div className={cx('inventory-content')}>
                <InventoryTableBlock character={character} />
            </div>
        </div>
    );
};

export default InventoryPage;