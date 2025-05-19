import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { CoursePublications } from "../../components/publication/CoursePublication";
import './coursePublication.css'

export const CoursePublication = () => {
    return (
        <div>
            <Navbar />
            <CoursePublications/>
        </div>
    );
};
