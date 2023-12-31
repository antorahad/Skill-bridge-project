import CardPlan from "./CardPlan";

const PricingCard = ({filteredPlan}) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10"> 
           <div className="bg-white p-10 max-w-6xl mx-auto rounded-lg shadow-sm">
           <div className="grid grid-cols-2 place-items-center gap-5">
                    {
                        filteredPlan.map(item => <CardPlan key={item.id} item={item}></CardPlan>)
                    }
            </div>
           </div>
        </div>
    );
};

export default PricingCard;