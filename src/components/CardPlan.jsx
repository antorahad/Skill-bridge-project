const CardPlan = ({ item }) => {
    const { id, category, title, price, extra, features } = item
    return (
        <div className="card bg-white shadow-sm rounded-md">
            <div className="card-body space-y-4">
                <h2 className="text-[20px] font-[600] capitalize">{category}</h2>
            </div>
        </div>
    );
};

export default CardPlan;