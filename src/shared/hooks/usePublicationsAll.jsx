import { useEffect , useState, useCallback } from "react"
import toast from "react-hot-toast"
import { getPublicationsPage as getPublicationsPageRequest } from "../../services"

export const usePublicationsAll = () => {
     const [publications , setPublications] = useState([]);
     const [isFetching, setIsFetching] = useState(false);

     const getPublicationsPage = useCallback( async () => {
        setIsFetching(true);
        const publicationsData = await getPublicationsPageRequest();
        if(publicationsData.error){
            toast.error(publicationsData.e?.response?.data || 'Error al obtener todas las publicaciones');
            return
        }

        setPublications(publicationsData.data.publications);
        setIsFetching(false);
        
     }, []);

     useEffect(() => {
        getPublicationsPage();
     }, [getPublicationsPage]);

     return{
        getPublicationsPage,
        allPublications: publications, 
        isFetching
     };
}

