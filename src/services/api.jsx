import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/blogPersonal/v1",
    timeout: 3000,
    httpsAgent: false,
})

export const getPublications = async () => {
    try {
        return await apiClient.get('/publication/')
    } catch (e) {
        return{
            error: true, 
            message: e.message
        } 
    }
}

export const getPublicationsPage = async () => {
    try {
        return await apiClient.get(`/publication/publications`)
    } catch (e) {
        return{
            error: true, 
            message: e.message
        }     
    }
}

export const getCommentsByPublication = async (publicationId) => {
    try {
        return await apiClient.get(`/comment/${publicationId}/comments`)
    } catch (e) {
        return{
            error: true, 
            message: e.message
        }
    }
}

export const addComment = async (publicationId, data) => {
    try {
        return await apiClient.post(`/comment/${publicationId}/addComment`, data)
    } catch (e) {
        return{
            error: true,
            message: e.message
        }
    }
}

export const getPublicationById = async (publicationId) => {
    try {
        return await apiClient.get(`/publication/publication/${publicationId}`)
    } catch (e) {
        return{
            error: true, 
            message: e.message
        }
    }
}

export const getPublicationByCourse = async (course) => {
    try {
        return await apiClient.get(`/publication/${course}`)
    } catch (e) {
        return{
            error: true, 
            message: e.message
        }
    }
}