import { KnownCharacter } from "@/types/noteType";
import cx from 'classnames';
import React, { useState } from "react";
import "./AddKnownCharacterModal.scss";

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
        <div className={cx("add-known-character-modal")}>
            <div className={cx("modal-content")}>
                <h2>Ajouter un personnage connu</h2>
                <div className={cx("div-input")}>
                    <span>Nom</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={character.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("horizontal-separator")} />
                <div className={cx("div-input")}>
                    <span>Âge</span>
                    <input
                        type="number"
                        name="age"
                        placeholder="Âge"
                        value={character.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("horizontal-separator")} />
                <div className={cx("div-input")}>
                    <span>Joueur</span>
                    <input
                        className={cx("checkbox")}
                        type="checkbox"
                        name="player"
                        checked={character.player}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className={cx("horizontal-separator")} />
                <div className={cx("div-input")}>
                    <span>Lieu</span>
                    <input
                        type="text"
                        name="location"
                        placeholder="Lieu"
                        value={character.location}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("horizontal-separator")} />
                <div className={cx("div-input")}>
                    <span>Relation</span>
                    <input
                        type="text"
                        name="relationship"
                        placeholder="Relation"
                        value={character.relationship}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("horizontal-separator")} />
                <div className={cx("div-input")}>
                    <span>Description</span>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={character.description}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("modal-actions")}>
                    <button className={cx("cancel")} onClick={onClose}>Annuler</button>
                    <button className={cx("validate")} onClick={handleSubmit}>Créer</button>
                </div>
            </div>
        </div>
    );
};

export default AddKnownCharacter;