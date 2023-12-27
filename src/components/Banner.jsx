import thunder from '../assets/thunder.svg'
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-5 text-center">
                    <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <img src={thunder} className="w-10 h-10 rounded-lg" />
                        <p className='text-[36px] font-[600]'><span className='text-baseColor'>Unlock</span> Your Creative Potential</p>
                    </div>
                    <p className='text-[28px] font-[500]'>with Online Design and Development Courses.</p>
                    <p className='text-[16px] font-[400]'>Learn from Industry Experts and Enhance Your Skills.</p>
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