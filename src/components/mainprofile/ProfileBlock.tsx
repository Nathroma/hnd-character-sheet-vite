import React from 'react';
import './ProfileBlock.scss';

type ProfileBlockProps = {
  icon: React.ReactNode;
  label: string;
  placeholder?: string;
};

const ProfileBlock: React.FC<ProfileBlockProps> = ({ icon, label, placeholder }) => {
  return (
    <div className="character-sheet">
      {/* Ligne 1 : Nom, Niveau, PX */}
      <div className="row top-row">
        <div className="field-group wide">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" />
        </div>
        <div className="field-group small">
          <label htmlFor="niveau">Niveau</label>
          <input type="number" id="niveau" name="niveau" />
        </div>
        <div className="field-group small">
          <label htmlFor="px">PX</label>
          <input type="number" id="px" name="px" />
        </div>
      </div>

      {/* Ligne 2 : Race, Historique */}
      <div className="row">
        <div className="field-group">
          <label htmlFor="race">Race</label>
          <input type="text" id="race" name="race" />
        </div>
        <div className="field-group">
          <label htmlFor="historique">Historique</label>
          <input type="text" id="historique" name="historique" />
        </div>
      </div>

      {/* Ligne 3 : Classe, Archétype */}
      <div className="row">
        <div className="field-group">
          <label htmlFor="classe">Classe</label>
          <input type="text" id="classe" name="classe" />
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
          <input type="text" id="alignement" name="alignement" />
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
