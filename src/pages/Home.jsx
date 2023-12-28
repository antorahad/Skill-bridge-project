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
import Pricing from "../components/Pricing";
import PricingCard from "../components/PricingCard";

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
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('./testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    const [planCategory, setPlanCategory] = useState([])
    useEffect(() => {
        fetch('./planCategory.json')
        .then(res => res.json())
        .then(data => setPlanCategory(data))
    }, [])
    const [plan, setPlan] = useState([])
    useEffect(() => {
        fetch('./plan.json')
        .then(res => res.json())
        .then(data => setPlan(data))
    }, [])
    const [displayCards, setDisplayCards] = useState(3)
    const [viewAll, setViewAll] = useState(false)
    const [displayCourses, setDisplayCourses] = useState(2)
    const [viewAllCourse, setViewAllCourse] = useState(false)
    const [displayTestimonials, setDisplayTestimonials] = useState(2)
    const [viewAllTestimonials, setViewAllTestimonials] = useState(false)

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
        if (viewAllCourse) {
            setDisplayCourses(2);
            setViewAllCourse(false);
        } else {
            setDisplayCourses(courses.length);
            setViewAllCourse(true);
        }
    }

    const handleTestimonial = () => {
        if (viewAllTestimonials) {
            setDisplayTestimonials(2);
            setViewAllTestimonials(false);
        } else {
            setDisplayTestimonials(testimonials.length);
            setViewAllTestimonials(true);
        }
    }
    return (
        <div>
            <Banner />
            <Brand />
            <Hero />
            <Benifit handleClick={handleClick} viewAll={viewAll} />
            <BenifitCard cards={cards} displayCards={displayCards} />
            <HomeCourse handleCourse={handleCourse} viewAllCourse={viewAllCourse} />
            <HomeCourseCard courses={courses} displayCourses={displayCourses} />
            <Testimonials handleTestimonial={handleTestimonial} viewAllTestimonials={viewAllTestimonials}/>
            <TestimonialCard testimonials={testimonials} displayTestimonials={displayTestimonials}/>
            <Pricing planCategory={planCategory}/>
            <PricingCard plan={plan}/>
        </div>
    );
};

export default Home;