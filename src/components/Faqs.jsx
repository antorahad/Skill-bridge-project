import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Faqs = ({ 
    faqToggleOne, 
    faqToggleTwo, 
    faqToggleThree, 
    faqToggleFour, 
    faqToggleFive, 
    faqToggleSix, 
    handleFaqAll, 
    handleFaqOne, 
    handleFaqTwo,
    handleFaqThree,
    handleFaqFour,
    handleFaqFive,
    handleFaqSix 
    }) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col lg:flex-row items-start justify-between bg-white shadow-sm rounded-md">
                <div className="w-full lg:w-1/2 p-5 lg:p-10 flex flex-col items-start gap-5">
                    <h1 className="text-[38px] font-[600]">Frequently Asked Questions</h1>
                    <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                    <button onClick={handleFaqAll} className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">See All Faqs</button>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-5 p-5 lg:p-10">
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">Can I enroll in multiple courses at once?</h1>
                                <button onClick={handleFaqOne} className="btn btn-square btn-md bg-baseColor hover:bg-baseColor focus:bg-baseColor bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 border-none outline-none">
                                    {
                                        faqToggleOne ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleOne &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">Enrollment Process for Different Courses</h1>
                                <button onClick={handleFaqTwo} className="btn btn-square btn-md bg-baseColor hover:bg-baseColor focus:bg-baseColor bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 border-none outline-none">
                                    {
                                        faqToggleTwo ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleTwo &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Submit forms online, pay fees, attend orientation for course enrollment.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">What kind of support can I expect from instructors?</h1>
                                <button onClick={handleFaqThree} className="btn btn-square btn-md bg-baseColor hover:bg-baseColor focus:bg-baseColor bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 border-none outline-none">
                                    {
                                        faqToggleThree ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleThree &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Instructors offer guidance, feedback, resources, and assistance for academic queries and challenges.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">Are the courses self-paced or do they have specific start and end dates?</h1>
                                <button onClick={handleFaqFour} className="btn btn-square btn-md bg-baseColor hover:bg-baseColor focus:bg-baseColor bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 border-none outline-none">
                                    {
                                        faqToggleFour ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleFour &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Courses have set start and end dates, not self-paced, following a structured schedule.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">Are there any prerequisites for the courses?</h1>
                                <button onClick={handleFaqFive} className="btn btn-square btn-md bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">
                                    {
                                        faqToggleFive ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleFive &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Check course descriptions for specific prerequisites; requirements vary based on individual courses.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <div className="flex items-center justify-between p-5 bg-navColor bg-opacity-30 rounded-t-md shadow-sm">
                                <h1 className="text-[16px] lg:text-[18px] font-[500]">Can I download the course materials for offline access?</h1>
                                <button onClick={handleFaqSix} className="btn btn-square btn-md bg-baseColor hover:bg-baseColor focus:bg-baseColor bg-opacity-20 hover:bg-opacity-20 focus:bg-opacity-20 border-none outline-none">
                                    {
                                        faqToggleSix ?
                                            <IoMdClose size={20} /> :
                                            <FaPlus size={20} />
                                    }
                                </button>
                            </div>
                            {
                                faqToggleSix &&
                                <div className="p-5 shadow-sm rounded-b-md">
                                    <p className="text-[16px] font-[400] leading-relaxed">Offline access to course materials depends on the platform's policy; check specific guidelines.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;