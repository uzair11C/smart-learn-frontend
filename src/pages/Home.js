import React from "react";
import Banner from "../components/Banner";
import Services from "../components/HomeComponents/Services";

const Home = () => {
    return (
        <>
            <Banner
                title="NextStep AI"
                catchprase="Made by Students for Students"
                imageUrl="/images/smartLearn.jpg"
            />
            <Services />
        </>
    );
};

export default Home;
