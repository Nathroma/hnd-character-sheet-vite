import React, { useState } from "react";
import "./InventoryTableBlock.scss";

type InventoryTableBlockProps = {
};

interface Equipment {
    id: number;
    name: string;
    quantity: number;
    weight: string;
}

const InventoryTableBlock = ({ }: InventoryTableBlockProps) => {
    const [equipments, setEquipments] = useState<Equipment[]>([
        { id: 1, name: 'Épée', quantity: 1, weight: '1kg' },
        { id: 2, name: 'Bouclier', quantity: 1, weight: '3kg' },
    ]);

    const handleAdd = () => {
        // Modal de création d'un nouvel équipement
        const newEquipment: Equipment = {
            id: Date.now(),
            name: 'Nouvel Équipement',
            quantity: 1,
            weight: '1kg',
        };
        setEquipments([...equipments, newEquipment]);
    };

    const handleEdit = (id: number) => {
        // todo: Modal de modifcation de l'objet
        alert(`Impossible de modifer l'object id: ${id}, fonctionnalité à implémenter`);
    };

    const handleDelete = (id: number) => {
        // Todo: Ajoute ici une confirmation
        setEquipments(equipments.filter(equipment => equipment.id !== id));
    };

    return (
        <div className="equipment-table-container">
            <div className="table-header">
                <button className="add-button" onClick={handleAdd}>Ajouter</button>
            </div>
            <table className="equipment-table">
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                        <th>Poids</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map(equipment => (
                        <tr key={equipment.id}>
                            <td>{equipment.name}</td>
                            <td>{equipment.quantity}</td>
                            <td>{equipment.weight}</td>
                            <td>
                                <button onClick={() => handleEdit(equipment.id)}>Edit</button>
                                <button onClick={() => handleDelete(equipment.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default InventoryTableBlock;