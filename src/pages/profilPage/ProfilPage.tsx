import React from "react";
import "./ProfilPage.scss";
import { Character } from "@/types/characterType";

type ProfilPageProps = {
    character: Character;
};

const ProfilPage = ({ character }: ProfilPageProps) => {
    return (
        <div className="character-sheet">
            {/* Header : photo, cercle "Niveau / XP", bulles de classes */}
            <div className="character-sheet__header">
                {/* Photo du personnage */}
                <div className="character-sheet__photo">
                    <img src={"photoUrl"} alt="Portrait du personnage" />
                </div>

                {/* Cercle Niveau / XP */}
                <div className="character-sheet__level">
                    <div className="character-sheet__level-circle">
                        <span className="character-sheet__level-arrow">⬆</span>
                        <p>
                            Niveau <strong>{"level"}</strong>
                        </p>
                        <p className="character-sheet__xp">XP : {"xp"}</p>
                    </div>
                </div>

                {/* Classes du personnage */}
                <div className="character-sheet__classes">
                    <div className="character-sheet__class barbarian">
                        Barbare <span>{"barbarianLevel"}</span>
                    </div>
                </div>
            </div>

            <div className="character-infos__content">
                {/* Bloc d’informations générales : Nom, Race, Historique, etc. */}
                <div className="character-datas">
                    <div className="character-sheet__info-block">
                        <label>Nom du personnage :</label>
                        <p>{"characterName"}</p>
                    </div>
                    <div className="character-sheet__info-block">
                        <label>Race :</label>
                        <p>{"race"}</p>
                    </div>
                    <div className="character-sheet__info-block">
                        <label>Historique :</label>
                        <p>{"background"}</p>
                    </div>
                    <div className="character-sheet__info-block">
                        <label>Archetype :</label>
                        <p>{"archetype"}</p>
                    </div>
                    <div className="character-sheet__info-block">
                        <label>Alignement :</label>
                        <p>{"alignment"}</p>
                    </div>
                </div>

                {/* Bloc d’informations physiques : Taille, Âge, etc. */}
                <div className="character-physical">
                    <p>
                        <strong>Taille :</strong> {"size"}
                    </p>
                    <p>
                        <strong>Âge :</strong> {"age"}
                    </p>
                    <p>
                        <strong>Couleur des yeux :</strong> {"eyeColor"}
                    </p>
                    <p>
                        <strong>Couleur des cheveux :</strong> {"hairColor"}
                    </p>
                    <p>
                        <strong>Teinte de peau :</strong> {"skinTone"}
                    </p>
                    <p>
                        <strong>Pilosité :</strong> {"bodyHair"}
                    </p>
                    <p>
                        <strong>Poids :</strong> {"weight"} kg
                    </p>
                </div>
            </div>

            {/* Biographie */}
            <div className="character-sheet__bio">
                <label>Biographie du personnage :</label>
                <p>{"biography"}</p>
            </div>
        </div>
    );
};

export default ProfilPage;