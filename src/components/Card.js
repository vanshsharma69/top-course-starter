import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedcourses, setLikedCourses }) => {
    function clickhandler() {
        if (likedcourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((id) => id !== course.id));
            toast.warning("Like removed");
        } else {
            if (likedcourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like added");
        }
    }

    return (
        <div
            className="w-[300px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeInUp"
        >
            <div className="relative">
                <img
                    src={course.image.url}
                    alt={course.title}
                    className="w-full h-44 object-cover"
                />
                <div className="w-10 h-10 bg-white rounded-full absolute right-3 bottom-[-20px] flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow hover:shadow-md">
                    <button onClick={clickhandler} className="transition-transform duration-200 active:scale-90 hover:animate-pulse">
                        {likedcourses.includes(course.id) ? (
                            <FcLike fontSize="1.75rem" />
                        ) : (
                            <FcLikePlaceholder fontSize="1.75rem" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4 pt-6">
                <h2 className="text-white text-lg font-semibold mb-2 truncate">{course.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {course.description.length > 100
                        ? `${course.description.substring(0, 100)}...`
                        : course.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
