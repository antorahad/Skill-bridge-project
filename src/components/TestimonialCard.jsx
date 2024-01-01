import CardTestimonials from "./CardTestimonials";

const TestimonialCard = ({testimonials, displayTestimonials}) => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {
                    testimonials.slice(0, displayTestimonials).map(item => <CardTestimonials key={item.id} item={item}></CardTestimonials>)
                }
            </div>
        </div>
    );
};

export default TestimonialCard;