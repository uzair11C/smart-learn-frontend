import { createContext } from "react";

export const PredictionContext = createContext({
    prediction: {},
    setPrediction: () => {},
});
