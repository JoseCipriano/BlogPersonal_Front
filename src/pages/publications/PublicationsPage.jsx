import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { ContentPublications } from "../../components/dashboard/ContentPublications";
import { usePublicationsAll } from "../../shared/hooks/usePublicationsAll";
import './publicationsPage.css';

export const PublicationsPage = () => {
    const { allPublications, getPublicationsPage } = usePublicationsAll();

    return (
        <div>
            <Navbar />
            <div className="publications-container">
            <main className="publications-main">
                <header className="publications-header">
                    <h1>Publicaciones</h1>
                    <p>Aqui puedes ver todas las publicaciones......</p>
                </header>
            </main>

                <section className="publications-list">
                    <ContentPublications
                        publications={allPublications}
                        getPublications={getPublicationsPage}
                    />
                </section>
        </div>
        </div>
    );
};
