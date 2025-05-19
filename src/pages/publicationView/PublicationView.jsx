import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { PublicationDetails } from "../../components/publication/PublicationDetails";
import './publicationView.css';

export const PublicationsView = () => {
    return (
        <div>
            <Navbar />
            <PublicationDetails/>
        </div>
    );
};
