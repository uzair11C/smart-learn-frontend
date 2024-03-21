import React from "react";
import Banner from "../components/HomeComponents/Banner";
import Services from "../components/HomeComponents/Services";

const Home = () => {
    return (
        <>
            <Banner
                title="SMART LEARN"
                catchprase="Made by Students for Students"
            />
            <Services />
        </>
    );
};

export default Home;
