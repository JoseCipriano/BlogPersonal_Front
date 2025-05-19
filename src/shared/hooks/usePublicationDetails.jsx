import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPublicationById, getCommentsByPublication, addComment } from "../../services";

const initialPublicationDetails = {
  id: "",
  title: "",
  description: "",
  course: "",
  dateCreated: "",
  comments: [],
};

export const usePublicationDetails = () => {
  const [publicationDetails, setPublicationDetails] = useState(initialPublicationDetails);
  const [isFetching, setIsFetching] = useState(false);
  const [isAddingComment, setIsAddingComment] = useState(false);

  //  Obtener publication Details
  const getPublicationDetails = useCallback(async (id) => {
    try {
      setIsFetching(true);

      const publicationResponse = await getPublicationById(id);

      if (publicationResponse.error) {
        toast.error(publicationResponse.message || "Error al obtener la publicación");
        setIsFetching(false);
        return;
      }

      const commentsResponse = await getCommentsByPublication(id);

      if (commentsResponse.error) {
        toast.error(commentsResponse.message || "Error al obtener los comentarios");
        setIsFetching(false);
        return;
      }

      setPublicationDetails({
        id: publicationResponse.data.data.publication._id,
        title: publicationResponse.data.data.publication.title,
        description: publicationResponse.data.data.publication.description,
        course: publicationResponse.data.data.publication.course,
        dateCreated: publicationResponse.data.data.publication.dateCreated,
        comments: commentsResponse.data.data.comments,
      });

      setIsFetching(false);
    } catch (error) {
      toast.error(error.message || "Error al obtener la información");
      setIsFetching(false);
    }
  }, []);

  // Add comments by Publication
  const addCommentToPublication = useCallback(async (publicationId, { userName, textComment }) => {
    try {
      setIsAddingComment(true);

      const response = await addComment(publicationId, {
        userName,
        textComment,
      });

      if (response.error) {
        toast.error(response.message || "Error al agregar el comentario");
        setIsAddingComment(false);
        return;
      }

      // Actualizamos el estado con el nuevo comentario
      setPublicationDetails((prevDetails) => ({
        ...prevDetails,
        comments: [...prevDetails.comments, response.data.comment],
      }));

      toast.success("Comentario agregado correctamente");
      setIsAddingComment(false);
    } catch (error) {
      toast.error(error.message || "Error al agregar el comentario");
      setIsAddingComment(false);
    }
  }, []);

  return {
    publicationDetails,
    isFetching,
    isAddingComment,
    getPublicationDetails,
    addCommentToPublication,
  };
};