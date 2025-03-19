import React from 'react';
import './ProfileBlock.scss';
import { ClassType, classNames } from '@/types/classType';
import { Character } from '@/types/characterType';
import { ProfileType } from '@/types/profileType';

type ProfileBlockProps = {
  character: Character;
};

const ProfileBlock = ({ character }: ProfileBlockProps) => {
  return (
    <div className="character-sheet">
      {/* Ligne 1 : Nom, Niveau, PX */}
      <div className="row top-row">
        <div className="field-group wide">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            value={character.attributes.profileDatas.name.value?.toString()}
            onChange={(e: any) => character.setProfileData(ProfileType.name, e.target.value)}
          />
        </div>
        <div className="field-group small">
          <label htmlFor="niveau">Niveau</label>
          <input
            type="number"
            id="niveau"
            name="niveau"
            onChange={(e: any) => character.setProfileData(ProfileType.level, e.target.value)}
          />
        </div>
        <div className="field-group small">
          <label htmlFor="px">PX</label>
          <input
            type="text"
            id="px"
            name="px"
            onChange={(e: any) => character.setProfileData(ProfileType.experience, e.target.value)}
          />
        </div>
      </div>

      {/* Ligne 2 : Race, Historique */}
      <div className="row">
        <div className="field-group">
          <label htmlFor="race">Race</label>
          <input
            type="text"
            id="race"
            name="race"
            onChange={(e: any) => character.setProfileData(ProfileType.race, e.target.value)}
          />
        </div>
        <div className="field-group">
          <label htmlFor="historique">Historique</label>
          <input
            type="text"
            id="historique"
            name="historique"
            onChange={(e: any) => character.setProfileData(ProfileType.history, e.target.value)}
          />
        </div>
      </div>

      {/* Ligne 3 : Classe, Archétype */}
      <div className="row">
        <div className="field-group">
          <label htmlFor="classe">Classe</label>
          <select
            id="archetype"
            value={character.attributes.profileDatas.class ?? ''}
            onChange={(e: any) => character.setClass(e.target.value)}
          >
            <option value="" disabled hidden>
              Choisir une classe
            </option>
            {Object.values(ClassType).map((classKey) => (
              <option key={classKey} value={classKey}>
                {classNames[classKey]}
              </option>
            ))}
          </select>
        </div>
        <div className="field-group">
          <label htmlFor="archetype">Archétype</label>

          <select id="archetype" value={character.profileDatas.class ?? ""} onChange={(e: any) => onClassChange(e.target.value)}>
            <option value="" disabled hidden>
              Choisir une classe
            </option>
            {Object.values(ClassType).map((classKey) => (
              <option key={classKey} value={classKey}>
                {classNames[classKey]}
              </option>
            ))}
          </select>
        </div>
        <div className="field-group">
          <label htmlFor="archetype">Archétype</label>
          <input type="text" id="archetype" name="archetype" />
        </div>
      </div>

      {/* Ligne 4 : Alignement, Foi */}
      <div className="row">
        <div className="field-group">
          <label htmlFor="alignement">Alignement</label>
          <input
            type="text"
            id="alignement"
            name="alignement"
            onChange={(e: any) => character.setProfileData(ProfileType.alignement, e.target.value)}
          />
        </div>
        <div className="field-group">
          <label htmlFor="foi">Foi</label>
          <input type="text" id="foi" name="foi" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
