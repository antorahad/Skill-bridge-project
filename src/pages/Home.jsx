import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Benifit from "../components/Benifit";
import BenifitCard from "../components/BenifitCard";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import HomeCourse from "../components/HomeCourse";
import HomeCourseCard from "../components/HomeCourseCard";
import Testimonials from "../components/Testimonials.Jsx";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('./benifits.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    const [displayCards, setDisplayCards] = useState(3)
    const [viewAll, setViewAll] = useState(false)
    const [displayCourses, setDisplayCourses] = useState(2)
    const [viewAllCourse, setViewAllCourse] = useState(false)

    const handleClick = () => {
        if (viewAll) {
            setDisplayCards(3);
            setViewAll(false);
        } else {
            setDisplayCards(cards.length);
            setViewAll(true);
        }
    }

    const handleCourse = () => {
        if(viewAllCourse) {
            setDisplayCourses(2);
            setViewAllCourse(false);
        } else{
            setDisplayCourses(courses.length);
            setViewAllCourse(true);
        }
    }
    return (
        <div>
            <Banner />
            <Brand />
            <Hero />
            <Benifit handleClick={handleClick} viewAll={viewAll} />
            <BenifitCard cards={cards} displayCards={displayCards} />
            <HomeCourse handleCourse={handleCourse} viewAllCourse={viewAllCourse}/>
            <HomeCourseCard courses={courses} displayCourses={displayCourses}/>
            <Testimonials/>
            <TestimonialCard/>
        </div>
    );
};

export default Home;