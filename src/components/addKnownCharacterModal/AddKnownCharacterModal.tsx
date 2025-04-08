import React from "react";
import "./AddKnownCharacter.scss";

type AddKnownCharacterProps = {
    title: string;
};

const AddKnownCharacter = ({ title }: AddKnownCharacterProps) => {
    return (
        <div className="name">
            <h1>{title}</h1>
        </div>
    );
};

export default AddKnownCharacter;