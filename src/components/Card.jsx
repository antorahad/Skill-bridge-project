const Card = ({ item }) => {
    const { id, no, title, description } = item;
    return (
        <div>
            <div className="card bg-white shadow-sm rounded-md">
                <div className="card-body space-y-4">
                    <h2 className="flex items-center justify-end text-[60px] font-[700]">{no}</h2>
                    <h2 className="text-[20px] font-[600]">{title}</h2>
                    <p className="text-[16px] font-[400]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;