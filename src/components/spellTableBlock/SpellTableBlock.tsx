import React, { useState } from "react";
import "./SpellTableBlock.scss";
import { SpellType } from "@/types/spellType";
import { Character } from "@/types/characterType";
import CreateSpellModal from "../createSpellModal/CreateSpellModal";

type SpellTableBlockProps = {
    character: Character;
};

const SpellTableBlock = ({ character }: SpellTableBlockProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleCreate = (newSpell: SpellType) => {
        if (!newSpell.name) {
            alert("Le nom est requis.");
            return;
        }
        if (!newSpell.level) {
            alert("Le niveau est requis.");
            return;
        }
        if (!newSpell.incantationTime) {
            alert("Le temps d'incantation est requis.");
            return;
        }
        if (!newSpell.duration) {
            alert("La durée est requise.");
            return;
        }
        character.addSpell(newSpell);
        setIsModalOpen(false);
    };

    return (
        <div className="spell-table-container">
            <div className="table-header">
                <button className="add-button" onClick={handleAdd}>Ajouter</button>
            </div>
            <table className="spell-table">
                <colgroup>
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>niveau</th>
                        <th>Temps d'incantation</th>
                        <th>Durée</th>
                        <th>Concentration</th>
                        <th>Rituel</th>
                        <th>Composantes</th>
                        <th>Gestion</th>
                    </tr>
                </thead>
                <tbody>
                    {character.datas.spells.map(spell => (
                        <tr key={spell.id}>
                            <td>{spell.name}</td>
                            <td>{spell.level}</td>
                            <td>{spell.incantationTime}</td>
                            <td>{spell.duration}</td>
                            <td>{spell.concentration ? "Concentration" : ""}</td>
                            <td>{spell.ritual ? "Rituel" : ""}</td>
                            <td>{spell.components}</td>
                            <td>
                                <button onClick={() => alert(`Modifier id: ${spell.id}`)}>Edit</button>
                                <button onClick={() => character.removeSpell(spell.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CreateSpellModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div >
    );
};


export default SpellTableBlock;