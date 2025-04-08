import React, { useState } from "react";
import "./CreateSpellModal.scss";
import { SpellComponentType, SpellLevelType, SpellType } from "@/types/spellType";
import LabeledCheckbox from "@/UI/labeledCheckBox/LabeledCheckBox";

type CreateSpellModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (Spell: SpellType) => void;
};

const CreateSpellModal = ({ isOpen, onClose, onCreate }: CreateSpellModalProps) => {
    const [spell, setSpell] = useState<Omit<SpellType, "id">>({
        name: "",
        description: "",
        level: SpellLevelType.Cantrip,
        incantationTime: "",
        duration: "",
        concentration: false,
        ritual: false,
        components: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSpell({ ...spell, [name]: value });
    };

    const handleComponentChange = (component: SpellComponentType) => {
        setSpell((prevSpell) => {
            const components = prevSpell.components.includes(component)
                ? prevSpell.components.filter((c) => c !== component)
                : [...prevSpell.components, component];
            return { ...prevSpell, components };
        });
    };

    const handleSubmit = () => {
        onCreate({ id: Date.now(), ...spell });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="create-spell-modal">
            <div className="modal-content">
                <h2>Créer un nouvel équipement</h2>
                <div className="div-input">
                    <span>
                        Nom
                    </span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={spell.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Niveau</span>
                    <select
                        name="spellLevel"
                        onChange={handleChange}>
                        {Object.values(SpellLevelType).map((action) => (
                            <option key={action} value={action}>
                                {action}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>
                        Temps d'incantation
                    </span>
                    <input
                        type="Texte"
                        name="incantationTime"
                        placeholder="Instantanée, 1 action, 1 bonus action, 1 minute, 10 minutes, 1 heure, 8 heures"
                        value={spell.incantationTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>
                        Durée
                    </span>
                    <input
                        type="text"
                        name="duration"
                        placeholder="Instantané, Jusqu'à 1 minute, 1 minute, 10 minutes, 1 heure, 8 heures"
                        value={spell.duration}
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>
                        Concentration
                    </span>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="concentration"
                        checked={spell.concentration}
                        onChange={(e) => setSpell({ ...spell, concentration: e.target.checked })} />
                </div>
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>
                        Ritual
                    </span>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="ritual"
                        checked={spell.ritual}
                        onChange={(e) => setSpell({ ...spell, ritual: e.target.checked })} />
                </div >
                <div className="horizontal-separator" />
                <div className="div-input">
                    <span>Composantes</span>
                    <div className="checkbox-group">
                        {Object.values(SpellComponentType).map((component) => (
                            <LabeledCheckbox
                                label={component}
                                isChecked={spell.components.includes(component)}
                                onChange={() => handleComponentChange(component)}
                            />
                        ))}
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>Annuler</button>
                    <button className="validate" onClick={handleSubmit}>Créer</button>
                </div>
            </div>
        </div>
    );
};

export default CreateSpellModal;
