import React, { useState } from "react";
import "./CreateEquipmentModal.scss";
import { EquipementAction, Equipment } from "@/types/itemType";

type CreateEquipmentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (equipment: Equipment) => void;
};

const CreateEquipmentModal = ({ isOpen, onClose, onCreate }: CreateEquipmentModalProps) => {
    const [equipment, setEquipment] = useState<Omit<Equipment, "id">>({
        name: "",
        action: EquipementAction.ACTION,
        quantity: 1,
        weight: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: name === "quantity" ? parseInt(value) : value });
    };

    const handleSubmit = () => {
        if (equipment.name === "") {
            alert("Le nom de l'objet est requis.");
            return;
        }
        if (!(Object.values(EquipementAction).includes(equipment.action))) {
            alert("Veuillez sélectionner une action.");
            return;
        }
        if (!equipment.weight) {
            equipment.weight = "0";
        }
        onCreate({ id: Date.now(), ...equipment });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="create-equipment-modal">
            <div className="modal-content">
                <h2>Créer un nouvel équipement</h2>
                <div className="div-input">
                    <span>
                        Nom de l'équipement
                    </span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={equipment.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="div-input">
                    <span>Type d'action</span>
                    <select
                        name="action"
                        onChange={handleChange}>
                        {Object.values(EquipementAction).map((action) => (
                            <option key={action} value={action}>
                                {action}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="div-input">
                    <span>
                        Quantité
                    </span>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantité"
                        value={equipment.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="div-input">
                    <span>Poid d'une unité</span>
                    <input
                        type="text"
                        name="weight"
                        placeholder="Poids"
                        value={equipment.weight}
                        onChange={handleChange}
                        />
                </div>
                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>Annuler</button>
                    <button className="validate" onClick={handleSubmit}>Créer</button>
                </div>
            </div>
        </div>
    );
};

export default CreateEquipmentModal;
