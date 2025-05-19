import { HomePage } from './pages/home/HomePage'
 import { PublicationsPage } from './pages/publications/PublicationsPage'
 import { PublicationsView } from "./pages/publicationView/PublicationView";
 import { CoursePublication } from "./pages/coursePublication/CoursePublication";

export const routes = [
    { path: '/', element: <HomePage/> },  
    { path: '/publicaciones', element: <PublicationsPage/> },
    { path: '/publicaciones/:publicationId', element: <PublicationsView/>},
    { path: '/:course/publicaciones', element: <CoursePublication/>}
]
