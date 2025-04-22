import React from "react";
import Card from "./Card";

function Cards({ courses }) {
    const getCourses = () => {
        return Object.values(courses).flat();
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course, index) => (
                    <Card key={index} course={course} />
                ))
            }
        </div>
    );
}

export default Cards;
