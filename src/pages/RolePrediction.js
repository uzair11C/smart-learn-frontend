import React from "react";
import Banner from "../components/Banner";
import UploadCV from "../components/RolePredictionComponents/UploadCV";

const RolePrediction = () => {
    return (
        <>
            <Banner
                title="Role Prediction"
                imageUrl="/images/rolePrediction.jpg"
            />
            <UploadCV />
        </>
    );
};

export default RolePrediction;
