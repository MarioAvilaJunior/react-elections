import React from "react";
import { ICandidate } from "../data/allCandidates";
import { ICity } from "../data/allCities";

interface ICountCandidatesProps {
  city: ICity;
  candidades: ICandidate[];
}

const CountCandidates = (props: ICountCandidatesProps) => {
  return <div>CountCandidates</div>;
};

export { CountCandidates };
