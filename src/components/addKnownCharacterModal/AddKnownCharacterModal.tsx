import React, { useState } from "react";
import "./AddKnownCharacterModal.scss";
import { KnownCharacter } from "@/types/noteType";

type AddKnownCharacterProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (knownCharacter: KnownCharacter) => void;
};

const AddKnownCharacter = ({ isOpen, onClose, onCreate }: AddKnownCharacterProps) => {
    const [character, setCharacter] = useState<Omit<KnownCharacter, "id">>({
        name: "",
        age: 0,
        player: false,
        location: "",
        relationship: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCharacter({ ...character, [name]: name === "age" ? parseInt(value) || 0 : value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCharacter({ ...character, [name]: checked });
    };

    const handleSubmit = () => {
        onCreate({ id: Date.now(), ...character });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="add-known-character-modal">
            <div className="modal-content">
                <h2>Ajouter un personnage connu</h2>
                <div className="div-input">
                    <span>Nom</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={character.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Âge</span>
                    <input
                        type="number"
                        name="age"
                        placeholder="Âge"
                        value={character.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Joueur</span>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="player"
                        checked={character.player}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Lieu</span>
                    <input
                        type="text"
                        name="location"
                        placeholder="Lieu"
                        value={character.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Relation</span>
                    <input
                        type="text"
                        name="relationship"
                        placeholder="Relation"
                        value={character.relationship}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Description</span>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={character.description}
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

export default AddKnownCharacter;