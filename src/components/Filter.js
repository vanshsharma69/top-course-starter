import React from "react";

const Filter = ({ filterData, category, setCategory }) => {

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className="w-11/12 max-w-[1200px] flex flex-wrap justify-center gap-4 mx-auto py-6">
            {filterData.map((data) => (
                <button
                    key={data.id}
                    onClick={() => filterHandler(data.title)}
                    className={`px-5 py-2 rounded-full border text-sm sm:text-base font-medium transition-all duration-300 ease-in-out 
                        ${
                            category === data.title
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md hover:shadow-xl scale-105"
                                : "bg-gray-800 text-gray-300 border-gray-700 hover:border-indigo-500 hover:text-white hover:scale-105"
                        }`}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
};

export default Filter;
