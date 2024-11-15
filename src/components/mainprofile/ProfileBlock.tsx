import React from 'react';
import './ProfileBlock.scss';

type ProfileBlockProps = {
  icon: React.ReactNode;
  label: string;
  placeholder?: string;
};

const ProfileBlock: React.FC<ProfileBlockProps> = ({ icon, label, placeholder }) => {
  return (
    <div className="profile-block">
      <div className="profile-block__icon">
        {icon}
      </div>
      <div className="profile-block__label">
        {label}
      </div>
      <input
        type="text"
        className="profile-block__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileBlock;
