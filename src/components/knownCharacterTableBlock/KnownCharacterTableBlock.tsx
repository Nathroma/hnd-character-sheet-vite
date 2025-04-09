import React, { useState } from "react";
import "./KnownCharacterTableBlock.scss";
import AddKnownCharacter from "../addKnownCharacterModal/AddKnownCharacterModal";
import { KnownCharacter } from "@/types/noteType";
import { Character } from "@/types/characterType";

type KnownCharacterTableBlockProps = {
    character: Character;
};

const KnownCharacterTableBlock = ({ character }: KnownCharacterTableBlockProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleCreate = (newKnownCharacter: KnownCharacter) => {
        character.addKnownCharacter(newKnownCharacter);
        setIsModalOpen(false);
    };

    return (
        <div className="equipment-table-container">
            <div className="table-header">
                <button className="add-button" onClick={handleAdd}>Ajouter</button>
            </div>
            <table className="equipment-table">
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '30%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Nom</th>
                        <th>Lieu</th>
                        <th>Relation</th>
                        <th>Gestion</th>
                    </tr>
                </thead>
                <tbody>
                    {character.datas.playerNotes.knownCharacters.map(knownCharacter => (
                        <tr key={knownCharacter.id}>
                            <td>{knownCharacter.player}</td>
                            <td>{knownCharacter.name}</td>
                            <td>{knownCharacter.location}</td>
                            <td>{knownCharacter.relationship}</td>
                            <td>
                                <button onClick={() => alert(`Modifier id: ${knownCharacter.id}`)}>Edit</button>
                                <button onClick={() => character.removeKnownCharacter(knownCharacter.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddKnownCharacter
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div>
    );
};

export default KnownCharacterTableBlock;