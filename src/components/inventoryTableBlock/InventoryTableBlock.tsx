import React, { useState } from "react";
import "./InventoryTableBlock.scss";
import { Character } from "@/types/characterType";
import { Equipment } from "@/types/itemType";
import CreateEquipmentModal from "../createEquipmentModal/CreateEquipmentModal";

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
        <div className="equipment-table-container">
            <div className="table-header">
                <button className="add-button" onClick={handleAdd}>Ajouter</button>
            </div>
            <table className="equipment-table">
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
            <CreateEquipmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div>
    );
};

export default InventoryTableBlock;