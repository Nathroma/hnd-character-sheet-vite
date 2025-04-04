import React from "react";
import "./ProfilPage.scss";

type ProfilPageProps = {
    title: string;
};

const ProfilPage = ({ title }: ProfilPageProps) => {
    return (
        <div className="name">
            <h1>{title}</h1>
        </div>
    );
};

export default ProfilPage;