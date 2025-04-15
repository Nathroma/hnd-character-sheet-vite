import React from "react";
import "./ProfilPage.scss";
import { Character } from "@/types/characterType";
import VerticalSeparator from "@/UI/verticalSeparator/VerticalSeparator";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ProfilPageProps = {
    character: Character;
};

const dataPhysicalImgPath = "src/assets/icons/physicalDatasLogos/";
const dataProfilImgPath = "src/assets/icons/profilDatasLogos/";

const ProfilPage = ({ character }: ProfilPageProps) => {

    return (
        <div className="character-sheet">
            <div className="character-sheet__container">
                {/* Header : photo, cercle "Niveau / XP", bulles de classes */}
                <div className="character-sheet__header">
                    {/* Photo du personnage */}
                    <div className="character-sheet__photo">
                        <img src={"photoUrl"} alt="Portrait du personnage" />
                    </div>

                    {/* Cercle Niveau / XP */}
                    <div className="character-sheet__level">
                        <div className="character-sheet__level-circle">
                            <CircularProgressbar
                                value={50}
                                styles={buildStyles({
                                    pathColor: "#4caf50",
                                    trailColor: "#ddd",
                                    strokeLinecap: "round",
                                    pathTransitionDuration: 0.5,
                                })}
                            />
                            <span className="character-sheet__level-arrow">⬆</span>
                            <p>
                                Niveau
                            </p>
                            <strong>{3}</strong>
                            <p className="character-sheet__xp">XP : {50}</p>
                        </div>
                    </div>

                    {/* Classes du personnage */}
                    <div className="character-sheet__classes">
                        <div className="character-sheet__classes-circle">
                            <span className="character-sheet__classes-icon">🏹</span>
                            <strong className="character-sheet__classes-name">{"Ranger"}</strong>
                            <strong className="character-sheet__classes-level">{3}</strong>
                        </div>
                    </div>
                </div>

                <div className="character-sheet-name-block">
                    <p>{"characterName"}</p>
                </div>

                <div className="character-infos__content">
                    {/* Bloc d’informations générales : Race, Historique, etc. */}
                    <div className="character-datas">
                        <div className="character-sheet__info-block">
                            <div className="race">
                                <img src="" alt="" />
                                <label>Race :</label>
                                <p>{"race"}</p>
                            </div>
                            <div className="variante">
                                <img src="" alt="" />
                                <label>Variante :</label>
                                <p>{"archetype"}</p>
                            </div>
                        </div>
                        <div className="character-sheet__info-block">
                            <div className="historical">
                                <img src="" alt="" />
                                <label>Historique :</label>
                                <p>{"background"}</p>
                            </div>
                            <div className="archetype">
                                <img src="" alt="" />
                                <label>Archetype :</label>
                                <p>{"archetype"}</p>
                            </div>
                        </div>
                        <div className="character-sheet__info-block">
                            <img src={dataProfilImgPath + "alignement.png"} alt="" />
                            <label>Alignement :</label>
                            <p>{"alignment"}</p>
                        </div>
                    </div>
                    {/* Bloc d’informations physiques : Taille, Âge, etc. */}
                    <div className="character-physical">
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "height.svg"} alt="" />
                                <strong>Taille :</strong>
                            </div>
                            <p>{"size"}</p>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "age.svg"} alt="" />
                                <strong>Âge :</strong>
                            </div>
                            <p>{"age"}</p>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "eye.png"} alt="" />
                                <strong>Couleur des yeux :</strong>
                            </div>
                            <p>{"eyeColor"}</p>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "hair.png"} alt="" />
                                <strong>Couleur des cheveux :</strong>
                            </div>
                            <p>{"hairColor"}</p>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "skinTone.png"} alt="" />
                                <strong>Teinte de peau :</strong>
                            </div>
                            <span>{"skinTone"}</span>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "pilosity.png"} alt="" />
                                <strong>Pilosité :</strong>
                            </div>
                            <p>{"bodyHair"}</p>
                        </div>
                        <div className="phsyical-wrapper">
                            <div>
                                <img src={dataPhysicalImgPath + "weight.png"} alt="" />
                                <strong>Poids :</strong>
                            </div>
                            <p>{"weight"} kg</p>
                        </div>
                    </div>
                </div>
                {/* Biographie */}
            </div>
            {/* <div className="character-sheet__bio">
                <label>Biographie du personnage :</label>
                <p>{"biography"}</p>
            </div> */}
        </div>
    );
};

export default ProfilPage;