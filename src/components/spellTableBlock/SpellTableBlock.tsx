import { Character } from "@/types/characterType";
import { SpellType } from "@/types/spellType";
import cx from 'classnames';
import React, { useState } from "react";
import CreateSpellModal from "../createSpellModal/CreateSpellModal";
import "./SpellTableBlock.scss";

type SpellTableBlockProps = {
    character: Character;
};

const tableIconsPath = "/assets/icons/tableIcons/";
const checkIcon = tableIconsPath + "check.svg";
const crossIcon = tableIconsPath + "cross.svg";

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
        <div className={cx('spell-table-container')}>
            <div className={cx('table-header')}>
                {/* Le bouton Ajouter est déplacé plus bas */}
            </div>
            <table className={cx('spell-table')}>
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
                            <td>{spell.concentration ? <img src={checkIcon} alt="Yes" /> : <img src={crossIcon} alt="No" />}</td>
                            <td>{spell.ritual ? <img src={checkIcon} alt="Yes" /> : <img src={crossIcon} alt="No" />}</td>
                            <td>{spell.components ? spell.components.join(", ") : "/"}</td>
                            <td>
                                <button onClick={() => alert(`Modifier id: ${spell.id}`)}>
                                    <img src={tableIconsPath + "edit.svg"} alt="Modifier" />
                                </button>
                                <button onClick={() => character.removeSpell(spell.id)}>
                                    <img src={tableIconsPath + "delete.svg"} alt="Supprimer" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Nouveau bouton Ajouter en bas à droite */}
            {!isModalOpen && (
                <button className={cx('floating-add-button')}
                    onClick={handleAdd}
                    aria-label="Ajouter un sort"
                >
                    +
                </button>
            )}
            <CreateSpellModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </div >
    );
};


export default SpellTableBlock;