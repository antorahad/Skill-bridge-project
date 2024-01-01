const Benifit = ({ handleClick, viewAll }) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Benefits</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Unlock your potential with diverse courses; learn, grow, and excel in your chosen field.</p>
                </div>
                <div>
                    <button onClick={handleClick} className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">{viewAll ? 'Show Less' : 'View All'}</button>
                </div>
            </div>
        </div>
    );
};

export default Benifit;