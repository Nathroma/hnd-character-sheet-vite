import React from "react";
import "./PlayerNotePage.scss";
import { Character } from "@/types/characterType";
import KnownCharacterTableBlock from "@/components/knownCharacterTableBlock/KnownCharacterTableBlock";

type PlayerNotePageProps = {
    title: string;
    character: Character;
};

const PlayerNotePage = ({ title, character }: PlayerNotePageProps) => {
    return (
        <div className="player-note-page">
            <div className="player-note-header">
                <h1>{title}</h1>
            </div>
            <div className="infos-wrapper">
                <textarea className="player-note"
                    placeholder="Entrez vos notes ici..."
                    onChange={(e) => { character.updatePlayerNote(e.target.value) }} value={character.datas.playerNotes.note} />
                <div className="secondary-infos">
                    <div className="KnownCharacterTableBlock">
                        <KnownCharacterTableBlock character={character} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerNotePage;