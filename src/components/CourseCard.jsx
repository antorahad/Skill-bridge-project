const CourseCard = ({ item }) => {
    const { id, title, image, duration, level, instructor, description } = item
    return (
        <div>
            <div className="card bg-white shadow-sm rounded-md">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body px-10 space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="badge rounded-md p-3 shadow-sm bg-secondaryColor text-thirdColor text-[14px] font-[400]">{duration}</span>
                            <span className="badge rounded-md p-3 shadow-sm bg-secondaryColor text-thirdColor text-[14px] font-[400]">{level}</span>
                        </div>
                        <div>
                            <p className="text-[16px] font-[500]">By {instructor}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[20px] font-[600]">{title}</h1>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <button className="btn btn-block border-none outline-none">Get it Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;