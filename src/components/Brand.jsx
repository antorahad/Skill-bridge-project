import card1 from '../assets/Card-1.svg'
import card2 from '../assets/Card-2.svg'
import card3 from '../assets/Card-3.svg'
import card4 from '../assets/Card-4.svg'
import card5 from '../assets/Card-5.svg'
import card6 from '../assets/Card-6.svg'
import card7 from '../assets/Card-7.svg'
import Marquee from "react-fast-marquee";

const Brand = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className='bg-white p-5 rounded-lg shadow-sm'>
                <Marquee direction='right' speed={30}>
                    <div className="flex items-center justify-center gap-2">
                        <img src={card1} />
                        <img src={card2} />
                        <img src={card3} />
                        <img src={card4} />
                        <img src={card5} />
                        <img src={card6} />
                        <img src={card7} />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Brand;