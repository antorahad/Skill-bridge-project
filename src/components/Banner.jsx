const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col items-center justify-center gap-10">
                <div>

                </div>
                <div className="flex items-center justify-center gap-5">
                    <button className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">Explore Courses</button>
                    <button className="btn bg-white hover:bg-white focus:bg-white rounded-md text-primaryColor border-none outline-none text-[14px] font-[600]">View Pricing</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;