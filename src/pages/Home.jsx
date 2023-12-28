import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Benifit from "../components/Benifit";
import BenifitCard from "../components/BenifitCard";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import HomeCourse from "../components/HomeCourse";
import HomeCourseCard from "../components/HomeCourseCard";

const Home = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('./benifits.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const [displayCards, setDisplayCards] = useState(3)
    const [viewAll, setViewAll] = useState(false)

    const handleClick = () => {
        if (viewAll) {
            setDisplayCards(3)
            setViewAll(false);
        } else {
            setDisplayCards(cards.length);
            setViewAll(true);
        }
    }
    return (
        <div>
            <Banner />
            <Brand />
            <Hero />
            <Benifit handleClick={handleClick} viewAll={viewAll} />
            <BenifitCard cards={cards} displayCards={displayCards} />
            <HomeCourse/>
            <HomeCourseCard/>
        </div>
    );
};

export default Home;