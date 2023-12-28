
import CourseCard from "./CourseCard";

const HomeCourseCard = ({courses, displayCourses}) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="grid grid-cols-2 gap-5 place-items-center">
                {
                    courses.slice(0, displayCourses).map(item => <CourseCard key={item.id} item={item}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default HomeCourseCard;