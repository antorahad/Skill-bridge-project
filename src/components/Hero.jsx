import hero from '../assets/hero.jpg'
const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="w-full flex items-center justify-center">
                <img src={hero} className="w-full rounded-xl" />
            </div>
        </div>
    );
};

export default Hero;