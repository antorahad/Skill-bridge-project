import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "./CourseCard";

const HomeCourseCard = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="grid grid-cols-2 gap-5 place-items-center">
                {
                    courses.map(item => <CourseCard key={item.id} item={item}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default HomeCourseCard;