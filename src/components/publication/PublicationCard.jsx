import React from "react";
import PropTypes from "prop-types";

export const PublicationCard = ({title, course, dateCreated, id, navigateToPublicationHandler}) => {
    const handleNavigate = () =>{
        navigateToPublicationHandler(id)
    }
    return(
        <div onClick={handleNavigate} className="publication-card">
            <h3>{title}</h3>
            <p>{dateCreated}</p>
            <p><strong>{course}</strong></p>
        </div>
    )

    PublicationCard.PropTypes = {
         title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        dateCreated: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        navigateToPublicationHandler: PropTypes.func.isRequired
    }

}

export const PublicationsCard = ({ title, description, course, dateCreated, id, navigateToPublicationHandler }) => {
    const handleNavigate = () => {
        navigateToPublicationHandler(id)
    }
    return (
        <div onClick={handleNavigate} className="publications-card">
            <h3>{title}</h3>
            <p>{new Date(dateCreated).toLocaleString()}</p>
            <p><strong>{course}</strong></p>
            <p>{description}</p>
        </div>
    )

    PublicationCard.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        dateCreated: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        navigateToPublicationHandler: PropTypes.func.isRequired
    }
}