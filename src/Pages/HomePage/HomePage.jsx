import HomeBlog from "./HomeBlog/HomeBlog.jsx";
import HeroSection from "./HeroSection/HeroSection.jsx";
import HomeShop from "./HomeShop/HomeShop.jsx";
import { useEffect } from "react";

function HomePage() {

    useEffect(() => {
        document.title = "Home - JCARZZ";
    }, []);

    return (
        <>
            <HeroSection />
            <HomeBlog />
            <HomeShop />
        </>
    );
}

export default HomePage;