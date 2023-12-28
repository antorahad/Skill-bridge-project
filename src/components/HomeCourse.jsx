import { Link } from "react-router-dom";

const HomeCourse = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Our Courses</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Career-focused courses for professional growth, led by industry experts for your success.</p>
                </div>
                <div>
                    <Link>
                        <button className="btn bg-white hover:bg-white focus:bg-white rounded-md text-primaryColor border-none outline-none text-[14px] font-[600]">View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCourse;