import Banner from "../components/Banner";
import Benifit from "../components/Benifit";
import BenifitCard from "../components/BenifitCard";
import Brand from "../components/Brand";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Hero/>
            <Benifit/>
            <BenifitCard/>
        </div>
    );
};

export default Home;