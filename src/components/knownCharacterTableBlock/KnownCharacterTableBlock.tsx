import { Character } from "@/types/characterType";
import { KnownCharacter } from "@/types/noteType";
import cx from 'classnames';
import React, { useState } from "react";
import AddKnownCharacter from "../addKnownCharacterModal/AddKnownCharacterModal";
import "./KnownCharacterTableBlock.scss";

type KnownCharacterTableBlockProps = {
    character: Character;
};

const tableIconsPath = "/assets/icons/tableIcons/";

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
        <div className={cx("known-character-table-container")}>
            <div className={cx("table-header")}>
                {/* Le bouton Ajouter est déplacé plus bas */}
            </div>
            <table className={cx("known-character-table")}>
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
                                <button onClick={() => alert(`Modifier id: ${knownCharacter.id}`)}>
                                    <img src={tableIconsPath + "edit.svg"} alt="Modifier" />
                                </button>
                                <button onClick={() => character.removeKnownCharacter(knownCharacter.id)}>
                                    <img src={tableIconsPath + "delete.svg"} alt="Supprimer" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Nouveau bouton Ajouter en bas à droite */}
            {!isModalOpen && (
                <button className={cx("floating-add-button")}
                    onClick={handleAdd}
                    aria-label="Ajouter un personnage connu"
                >
                    +
                </button>
            )}
            <AddKnownCharacter
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div>
    );
};

export default KnownCharacterTableBlock;