const Benifit = ({ handleClick, viewAll }) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Benefits</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Unlock your potential with diverse courses; learn, grow, and excel in your chosen field.</p>
                </div>
                <div>
                    <button onClick={handleClick} className="btn bg-white hover:bg-white focus:bg-white rounded-md text-primaryColor border-none outline-none text-[14px] font-[600]">{viewAll ? 'Show Less' : 'View All'}</button>
                </div>
            </div>
        </div>
    );
};

export default Benifit;