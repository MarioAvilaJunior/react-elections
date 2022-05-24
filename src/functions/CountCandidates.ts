import { IElection } from "../data/allElections";
import { ICity } from "../data/allCities";

const CountCandidates = (
  elections: IElection[],
  selectedCity: ICity
): number => {
  const checkSelectedCityId = (election: IElection) => {
    return election.cityId === selectedCity.id;
  };

  return elections.filter(checkSelectedCityId).length;
};

export { CountCandidates };
