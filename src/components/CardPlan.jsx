import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const CardPlan = ({ item }) => {
    const { id, category, title, price, extra, features } = item
    return (
        <div className="card bg-navColor w-full shadow-sm rounded-md">
            <div className="card-body text-center space-y-4">
                <h2 className="text-[18px] font-[500] capitalize bg-baseColor bg-opacity-15 w-full p-3 rounded-md">{title}</h2>
                <p className="text-[60px] font-[600]">{price} <span className="text-[16px] font-[500]">/{extra}</span></p>
                <p className="text-[18px] font-[500]">Available Features</p>
                <ul className="flex flex-col gap-7">
                    {
                        features.map(item => <li className="flex items-center justify-start gap-5 p-3 rounded-md bg-white" key={item.id}><span className="bg-baseColor bg-opacity-15 p-1 rounded-sm">{item.status ? <IoCheckmarkSharp size={10}></IoCheckmarkSharp> : <IoMdClose size={10}></IoMdClose>}</span> {item.feature}</li>)
                    }
                </ul>
                <button className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor rounded-md text-white border-none outline-none text-[14px] font-[600]">Get Started</button>
            </div>
        </div>
    );
};

export default CardPlan;