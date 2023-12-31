const Pricing = ({planCategories, selectedCategory, handlePlanCategory}) => {

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[38px] font-[600]">Our Pricing</h1>
                    <p className="text-[16px] font-[400] text-thirdColor">Competitive pricing offering premium courses, ensuring value, affordability, and accessibility for all learners.</p>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-5 bg-secondaryColor shadow-sm p-5 rounded-md">
                        {planCategories.map(item => (
                            <button
                                onClick={() => handlePlanCategory(item.category)}
                                className={`btn capitalize ${selectedCategory === item.category ? 'active bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]' : ''}`}
                                key={item.id}
                            >
                                {item.category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
