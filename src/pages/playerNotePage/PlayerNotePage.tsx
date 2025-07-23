import KnownCharacterTableBlock from "@/components/knownCharacterTableBlock/KnownCharacterTableBlock";
import { Character } from "@/types/characterType";
import cx from 'classnames';
import React from "react";
import "./PlayerNotePage.scss";

type PlayerNotePageProps = {
    title: string;
    character: Character;
};

const PlayerNotePage = ({ title, character }: PlayerNotePageProps) => {
    return (
        <div className={cx('player-note-page')}>
            <div className={cx('player-note-header')}>
                <h1>{title}</h1>
            </div>
            <div className={cx('infos-wrapper')}>
                <textarea className={cx('player-note')}
                    placeholder="Entrez vos notes ici..."
                    onChange={(e) => { character.updatePlayerNote(e.target.value) }} value={character.datas.playerNotes.note} />
                <div className={cx('secondary-infos')}>
                    <div className={cx('KnownCharacterTableBlock')}>
                        <KnownCharacterTableBlock character={character} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerNotePage;