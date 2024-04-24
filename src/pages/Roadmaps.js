import React from "react";
import Banner from "../components/Banner";
import RoadmapsList from "../components/RoadmapComponents/RoadmapsList";

const Roadmaps = () => {
    return (
        <>
            <Banner title="Roadmaps" imageUrl="/images/careerRoadmap.jpg" />
            <RoadmapsList />
        </>
    );
};

export default Roadmaps;
