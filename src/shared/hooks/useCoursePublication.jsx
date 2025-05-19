import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import {getPublicationByCourse as getPublicationByCourseRequest} from "../../services"

export const usePublicationsByCourse = () => {
  const [publications, setPublications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const  getPublicationByCourse = useCallback(async (course) => {
        setIsFetching(true);

        const response = await getPublicationByCourseRequest(course);

        if(response.error){
            toast.error(response.message || "Error al obteners las publicaciones por el curso");
            setIsFetching(false);
            return;
        }

        setPublications(response.data.publications);
        setIsFetching(false);
        
    }, []);

    return {
        getPublicationByCourse, 
        publications, 
        isFetching,
    };
};
