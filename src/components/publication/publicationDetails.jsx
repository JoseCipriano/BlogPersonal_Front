import { useEffect, useState } from "react";
import { usePublicationDetails } from "../../shared/hooks";
import { useParams } from "react-router-dom";

export const PublicationDetails = () => {
  const { publicationId } = useParams();
  const {
    publicationDetails,
    isFetching,
    getPublicationDetails,
    addCommentToPublication,
    isAddingComment,
  } = usePublicationDetails();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    if (publicationId) {
      getPublicationDetails(publicationId);
    }
  }, [publicationId, getPublicationDetails]);

  if (isFetching) {
    return <p className="loading-text">Cargando publicación...</p>;
  }

  if (!publicationDetails.id) {
    return <p className="error-text">Publicación no encontrada.</p>;
  }

  const handleAddComment = async (e) => {
    e.preventDefault();
    await addCommentToPublication(publicationId, { userName, textComment });
    setUserName("");
    setTextComment("");
    setIsFormVisible(false); 
  };

  return (
    <div className="blog-container">
      <div className="blog-publication">
        <div className="blog-header">
          <img
            src={`https://ui-avatars.com/api/?name=${publicationDetails.course}&background=#121212&color=333`}
            alt="Avatar"
            className="publication-avatar"
          />
          <div>
            <h2 className="publication-title">{publicationDetails.title}</h2>
            <h2 className="publication-user">{publicationDetails.course}</h2>
            <span className="publication-date">
              {new Date(publicationDetails.dateCreated).toLocaleDateString()}
            </span>
          </div>
        </div>
        <p className="publication-description">{publicationDetails.description}</p>
      </div>

      <div className="blog-comments">
        <h3 className="blog-comments-title">
          Comentarios <span className="comment-count">({publicationDetails.comments.length})</span>
        </h3>

        <button
          className="btn-add-comment"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Cancelar" : "Agregar Comentario"}
        </button>

        {isFormVisible && (
          <form className="comment-form" onSubmit={handleAddComment}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-input"
              required
            />
            <textarea
              placeholder="Escribe tu comentario..."
              value={textComment}
              onChange={(e) => setTextComment(e.target.value)}
              className="form-textarea"
              required
            />
            <button
              type="submit"
              className={`form-submit ${isAddingComment ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isAddingComment}
            >
              {isAddingComment ? "Agregando..." : "Publicar"}
            </button>
          </form>
        )}

        {publicationDetails.comments.length > 0 ? (
          <ul className="blog-comments-list">
            {publicationDetails.comments.map((comment) => (
              <li key={comment._id} className="blog-comment">
                <div className="blog-comment-header">
                  <img
                    src={`https://ui-avatars.com/api/?name=${comment.userName}&background=#121212&color=333`}
                    alt="Avatar"
                    className="blog-avatar"
                  />
                  <div>
                    <p className="blog-user">{comment.userName}</p>
                    <span className="blog-date">
                      {new Date(comment.dateComment).toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="blog-comment-text">{comment.textComment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comments">No hay comentarios para esta publicación.</p>
        )}
      </div>
    </div>
  );
};
