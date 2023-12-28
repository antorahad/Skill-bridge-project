const CardTestimonials = ({ item }) => {
    const { id, review, image, name } = item;
    return (
        <div className="card bg-white shadow-sm rounded-md">
            <div className="card-body space-y-4">
                <p className="text-[16px] font-[400] text-thirdColor">{review}</p>
                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                        <img src={image} alt="" />
                        <p className="text-[16px] font-[600]">{name}</p>
                    </div>
                    <div>
                        <button className="btn border-none outline-none">Read Full Story</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTestimonials;