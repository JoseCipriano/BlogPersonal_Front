import React from "react";
import { PublicationsPage } from "../publication/PublicationsPage";
import PropTypes from "prop-types";

export const ContentPublications = ({ publications, getPublications }) => {
    return (
        <div>
            <div>
                <PublicationsPage publications={publications} />
            </div>
        </div>
    );
};

ContentPublications.propTypes = {
    publications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            course: PropTypes.string.isRequired,
            dateCreated: PropTypes.string.isRequired,
        })
    ).isRequired,
    getPublications: PropTypes.func.isRequired,
};