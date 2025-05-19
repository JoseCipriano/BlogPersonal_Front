import React from "react";
import { Publications } from "../publication/Publications";
import PropTypes from "prop-types";

export const Content = ({ publications, getPublications }) => {
    return (
        <div>
            <div>
                <Publications publications={publications} />
            </div>
        </div>
    );
};

Content.propTypes = {
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
