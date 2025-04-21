import react from "react";

function Cards({courses}) {

    let allCourses=[];

    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            });
        });
    }   

    return(
        <div>
            
        </div>
    )
}
export default Cards;