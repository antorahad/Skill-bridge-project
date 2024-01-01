import { Link } from "react-router-dom";

const HomeCourse = ({handleCourse, viewAllCourse}) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Our Courses</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Career-focused courses for professional growth, led by industry experts for your success.</p>
                </div>
                <div>
                    <Link>
                        <button onClick={handleCourse} className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">{viewAllCourse ? 'Show Less' : 'View All'}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCourse;