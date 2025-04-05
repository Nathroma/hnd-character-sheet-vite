import React, { useState } from "react";
import "./SpellTableBlock.scss";

type SpellTableBlockProps = {
};

interface spell {
    id: number;
    name: string;
    componant: string;
    spellLevel: string;
}

const SpellTableBlock = ({ }: SpellTableBlockProps) => {
    const [spells, setSpells] = useState<spell[]>([
        { id: 1, name: 'Préstidigitation', componant: "V S M", spellLevel: ' Sort Mineur' },
        { id: 2, name: 'Déguisement', componant: "V C R", spellLevel: 'Niveau 1' },
    ]);

    const handleAdd = () => {
        // Modal de création d'un nouveau sort
        const newspell: spell = {
            id: Date.now(),
            name: 'Nouveau sort',
            componant: " V S M",
            spellLevel: 'Sort mineur',
        };
        setSpells([...spells, newspell]);
    };

    const handleEdit = (id: number) => {
        // todo: Modal de modifcation de l'objet
        alert(`Impossible de modifer l'object id: ${id}, fonctionnalité à implémenter`);
    };

    const handleDelete = (id: number) => {
        // Todo: Ajoute ici une confirmation
        setSpells(spells.filter(spell => spell.id !== id));
    };

    return (
        <div className="spell-table-container">
            <div className="table-header">
                <button className="add-button" onClick={handleAdd}>Ajouter</button>
            </div>
            <table className="spell-table">
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
                    {spells.map(spell => (
                        <tr key={spell.id}>
                            <td>{spell.name}</td>
                            <td>{spell.componant}</td>
                            <td>{spell.spellLevel}</td>
                            <td>
                                <button onClick={() => handleEdit(spell.id)}>Edit</button>
                                <button onClick={() => handleDelete(spell.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default SpellTableBlock;