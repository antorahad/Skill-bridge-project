import Card from "./Card";

const BenifitCard = ({ cards, displayCards }) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
                {
                    cards.slice(0, displayCards).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default BenifitCard;