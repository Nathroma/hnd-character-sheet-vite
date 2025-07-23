import { Character } from "@/types/characterType";
import { Equipment } from "@/types/itemType";
import cx from 'classnames';
import React, { useState } from "react";
import CreateEquipmentModal from "../createEquipmentModal/CreateEquipmentModal";
import "./InventoryTableBlock.scss";

type InventoryTableBlockProps = {
    character: Character;
};

const InventoryTableBlock = ({ character }: InventoryTableBlockProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleCreate = (newEquipment: Equipment) => {
        character.addEquipement(newEquipment);
        setIsModalOpen(false);
    };

    return (
        <div className={cx("equipment-table-container")}>
            <div className={cx("table-header")}>
                {/* Le bouton Ajouter est déplacé plus bas */}
            </div>
            <table className={cx("equipment-table")}>
                <colgroup>
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Action</th>
                        <th>Quantité</th>
                        <th>Poids</th>
                        <th>Gestion</th>
                    </tr>
                </thead>
                <tbody>
                    {character.datas.inventory.equipments.map(equipment => (
                        <tr key={equipment.id}>
                            <td>{equipment.name}</td>
                            <td>{equipment.action}</td>
                            <td>{equipment.quantity}</td>
                            <td>{equipment.weight}</td>
                            <td>
                                <button onClick={() => alert(`Modifier id: ${equipment.id}`)}>Edit</button>
                                <button onClick={() => character.removeEquipement(equipment.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Nouveau bouton Ajouter en bas à droite */}
            {!isModalOpen && (
                <button className={cx("floating-add-button")}
                    onClick={handleAdd}
                    aria-label="Ajouter un équipement"
                >
                    +
                </button>
            )}
            <CreateEquipmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div>
    );
};

export default InventoryTableBlock;