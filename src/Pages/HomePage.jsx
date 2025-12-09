import HomeBlog from "../components/HomeBlog/HomeBlog.jsx";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeShop from "../components/HomeShop/HomeShop.jsx";
import FooterSection from "../components/FooterSection/FooterSection.jsx";

function HomePage() {
    return (
        <>
            <HeroSection />
            <HomeBlog />
            <HomeShop />
            <FooterSection />
        </>
    );
}

export default HomePage;