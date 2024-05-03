import React from "react";
import Banner from "../components/Banner";
import UploadCV from "../components/ConsultationComponents/UploadCV";
import Result from "../components/ConsultationComponents/Result";

const RolePrediction = () => {
  return (
    <>
      <Banner title="Role Prediction" />
      <UploadCV />
      <Result />
    </>
  );
};

export default RolePrediction;
