import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
    return (
        <div className="w-[300px] bg-gray-800 bg-opacity-100 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.title} />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute  right-2 bottom-3 flex justify-center items-center cursor-pointer hover:bg-opacity-70 transition-all duration-300 grid place-items-center">
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button> 
                </div>
            </div>
            <div>
                <h2 className="text-white">{course.title}</h2>
                <p className="text-white">{course.description}</p>
            </div>
        </div>
    );
}

export default Card;
