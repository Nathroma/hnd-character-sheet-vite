import React, { useState } from "react";
import "./CreateEquipmentModal.scss";
import { Equipment } from "@/types/itemType";

type CreateEquipmentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (equipment: Equipment) => void;
};

const CreateEquipmentModal = ({ isOpen, onClose, onCreate }: CreateEquipmentModalProps) => {
    const [equipment, setEquipment] = useState<Omit<Equipment, "id">>({
        name: "",
        action: "",
        quantity: 1,
        weight: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: name === "quantity" ? parseInt(value) : value });
    };

    const handleSubmit = () => {
        onCreate({ id: Date.now(), ...equipment });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="create-equipment-modal">
            <div className="modal-content">
                <h2>Créer un nouvel équipement</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={equipment.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="action"
                    placeholder="Action"
                    value={equipment.action}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantité"
                    value={equipment.quantity}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="weight"
                    placeholder="Poids"
                    value={equipment.weight}
                    onChange={handleChange}
                />
                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>Annuler</button>
                    <button className="validate" onClick={handleSubmit}>Créer</button>
                </div>
            </div>
        </div>
    );
};

export default CreateEquipmentModal;
