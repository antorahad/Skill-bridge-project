import CardPlan from "./CardPlan";

const PricingCard = ({plan}) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10"> 
            <div className="grid grid-cols-2 place-items-center gap-5">
                    {
                        plan.map(item => <CardPlan key={item.id} item={item}></CardPlan>)
                    }
            </div>
        </div>
    );
};

export default PricingCard;