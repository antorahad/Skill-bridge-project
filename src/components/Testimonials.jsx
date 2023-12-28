const Testimonials = ({handleTestimonial, viewAllTestimonials}) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Our Testimonials</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Rave reviews praising career transformations, highlighting expert guidance for lifelong skill enhancement.</p>
                </div>
                <div>
                    <button onClick={handleTestimonial} className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">{ viewAllTestimonials ? 'Show Less' : 'View All'}</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;