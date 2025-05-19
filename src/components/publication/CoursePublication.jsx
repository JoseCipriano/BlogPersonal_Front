import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePublicationsByCourse } from "../../shared/hooks";
import { PublicationCard } from "./PublicationCard";
import { useNavigate } from "react-router-dom"

export const CoursePublications = () => {
  const navigate = useNavigate()
  const { course } = useParams();
  const { getPublicationByCourse, publications, isFetching } = usePublicationsByCourse();

  const navigateToPublicationHandler = (id) => {
    navigate(`/publicaciones/${id}`)
  }

  useEffect(() => {
    if (course) {
      getPublicationByCourse(course);
    }
  }, [course, getPublicationByCourse]);

  return (
    <div className="course-publications-container">
      <h2 className="title-course">{course}</h2>
      
      {isFetching ? (
        <p className="text-gray-500">Cargando publicaciones...</p>
      ) : publications.length > 0 ? (
        publications.map((publication) => (
          <PublicationCard
            key={publication._id}
            title={publication.title}
            description={publication.description}
            course={publication.course}
            dateCreated={new Date(publication.dateCreated).toLocaleString()}
            id={publication._id}
            navigateToPublicationHandler={navigateToPublicationHandler}
          />
        ))
      ) : (
        <p className="text-gray-500">No hay publicaciones para este curso.</p>
      )}
    </div>
  );
};
