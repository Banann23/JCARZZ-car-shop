import { useEffect } from "react";

function AboutPage() {

    useEffect(() => {
        document.title = "About - JCARZZ";
    }, []);

    return (
        <>
            <div>About page - coming soon...</div>
        </>
    );
}

export default AboutPage;