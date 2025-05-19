import React from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { PublicationsCard } from "./PublicationCard"

export const PublicationsPage = ({ publications }) => {
  const navigate = useNavigate()

  const navigateToPublicationHandler = (id) => {
    navigate(`/publicaciones/${id}`)
  }

  return (
    <div className="publications-container">
      {publications.map((publication) => (
        <PublicationsCard
          key={publication._id}
          title={publication.title}
          description={publication.description}
          course={publication.course}
          dateCreated={publication.dateCreated}
          id={publication._id}
          navigateToPublicationHandler={navigateToPublicationHandler}
        />
      ))}
    </div>
  )
}

PublicationsPage.propTypes = {
    publications: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        dateCreated: PropTypes.string.isRequired,
        })
    ).isRequired,
}